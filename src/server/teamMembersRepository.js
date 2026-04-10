import { randomUUID } from "node:crypto";
import { teamData } from "@/data/teamData";
import { getSupabaseAdminClient } from "@/server/supabaseServer";

const ALLOWED_MIME_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;
const SUPABASE_BUCKET = process.env.SUPABASE_BUCKET || "team-photos";

const mapRowToMember = (row) => ({
  id: row.member_id,
  name: row.name,
  slug: row.slug,
  title: row.title,
  category: row.category,
  description: row.description,
  image: row.image_url,
  credentials: row.credentials,
  age: row.age,
  languages: row.languages,
  about: row.about,
  areasOfFocus: row.areas_of_focus || [],
  approach: row.approach || [],
  location: row.location || undefined,
  registration: row.registration || undefined,
  certifications: row.certifications || undefined,
  experience: row.experience || undefined,
});

const mapMemberToRow = (member) => ({
  member_id: member.id,
  name: member.name,
  slug: member.slug,
  title: member.title,
  category: member.category,
  description: member.description,
  image_url: member.image,
  credentials: member.credentials,
  age: member.age,
  languages: member.languages,
  about: member.about,
  areas_of_focus: member.areasOfFocus || [],
  approach: member.approach || [],
  location: member.location || null,
  registration: member.registration || null,
  certifications: member.certifications || null,
  experience: member.experience || null,
});

export const isSupabaseConfigured = () => Boolean(getSupabaseAdminClient());

const ensureSeedData = async (supabase) => {
  const { count, error: countError } = await supabase
    .from("team_members")
    .select("id", { count: "exact", head: true });

  if (countError) {
    throw new Error(countError.message);
  }

  if ((count || 0) > 0) {
    return;
  }

  const seedRows = teamData.allMembers.map(mapMemberToRow);
  const { error: seedError } = await supabase.from("team_members").insert(seedRows);
  if (seedError) {
    throw new Error(seedError.message);
  }
};

export const getTeamMembers = async () => {
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return teamData.allMembers;
  }

  await ensureSeedData(supabase);

  const { data, error } = await supabase
    .from("team_members")
    .select("*")
    .order("member_id", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data || []).map(mapRowToMember);
};

export const updateTeamMemberPhoto = async ({ slug, mimeType, base64Data }) => {
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    throw new Error("Supabase is not configured on this deployment.");
  }

  if (!slug || typeof slug !== "string") {
    throw new Error("Team member slug is required.");
  }

  const extension = ALLOWED_MIME_TYPES[mimeType];
  if (!extension) {
    throw new Error("Only JPG, PNG, and WEBP images are allowed.");
  }

  if (!base64Data || typeof base64Data !== "string") {
    throw new Error("Image data is required.");
  }

  const imageBuffer = Buffer.from(base64Data, "base64");
  if (imageBuffer.byteLength === 0) {
    throw new Error("Image file is empty.");
  }

  if (imageBuffer.byteLength > MAX_IMAGE_SIZE_BYTES) {
    throw new Error("Image must be 5MB or smaller.");
  }

  const { data: row, error: rowError } = await supabase
    .from("team_members")
    .select("*")
    .eq("slug", slug)
    .single();

  if (rowError || !row) {
    throw new Error("Team member not found.");
  }

  const filePath = `${slug}/${randomUUID()}.${extension}`;
  const { error: uploadError } = await supabase.storage
    .from(SUPABASE_BUCKET)
    .upload(filePath, imageBuffer, {
      contentType: mimeType,
      upsert: false,
      cacheControl: "31536000",
    });

  if (uploadError) {
    throw new Error(uploadError.message);
  }

  const { data: publicUrlData } = supabase.storage
    .from(SUPABASE_BUCKET)
    .getPublicUrl(filePath);

  const { data: updated, error: updateError } = await supabase
    .from("team_members")
    .update({ image_url: publicUrlData.publicUrl })
    .eq("slug", slug)
    .select("*")
    .single();

  if (updateError || !updated) {
    throw new Error(updateError?.message || "Failed to update team member photo.");
  }

  return mapRowToMember(updated);
};
