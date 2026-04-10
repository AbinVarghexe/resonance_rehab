import { promises as fs } from "node:fs";
import path from "node:path";
import { teamData } from "@/data/teamData";
import { mergeImageOverrides } from "@/features/team/utils/teamMembers";

const DATA_DIR = path.join(process.cwd(), "data");
const OVERRIDES_PATH = path.join(DATA_DIR, "team-photo-overrides.json");
const UPLOADS_DIR = path.join(
  process.cwd(),
  "public",
  "images",
  "meetourteam",
  "uploads"
);

const ALLOWED_MIME_TYPES = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024;

const ensureStorage = async () => {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.mkdir(UPLOADS_DIR, { recursive: true });
  try {
    await fs.access(OVERRIDES_PATH);
  } catch {
    await fs.writeFile(OVERRIDES_PATH, "{}\n", "utf8");
  }
};

const readOverrides = async () => {
  await ensureStorage();
  const raw = await fs.readFile(OVERRIDES_PATH, "utf8");
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
};

const writeOverrides = async (overrides) => {
  await ensureStorage();
  await fs.writeFile(OVERRIDES_PATH, `${JSON.stringify(overrides, null, 2)}\n`, "utf8");
};

export const getTeamMembersWithOverrides = async () => {
  const overrides = await readOverrides();
  return mergeImageOverrides(teamData.allMembers, overrides);
};

export const saveTeamMemberPhoto = async ({ slug, mimeType, base64Data }) => {
  if (!slug || typeof slug !== "string") {
    throw new Error("Team member slug is required.");
  }

  const extension = ALLOWED_MIME_TYPES[mimeType];
  if (!extension) {
    throw new Error("Only JPG, PNG, and WEBP images are allowed.");
  }

  const member = teamData.allMembers.find((item) => item.slug === slug);
  if (!member) {
    throw new Error("Team member not found.");
  }

  if (!base64Data || typeof base64Data !== "string") {
    throw new Error("Image data is required.");
  }

  const buffer = Buffer.from(base64Data, "base64");
  if (buffer.byteLength === 0) {
    throw new Error("Image file is empty.");
  }

  if (buffer.byteLength > MAX_IMAGE_SIZE_BYTES) {
    throw new Error("Image must be 5MB or smaller.");
  }

  await ensureStorage();

  const safeSlug = slug.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  const fileName = `${safeSlug}-${Date.now()}.${extension}`;
  const absolutePath = path.join(UPLOADS_DIR, fileName);
  const publicPath = `/images/meetourteam/uploads/${fileName}`;

  await fs.writeFile(absolutePath, buffer);

  const overrides = await readOverrides();
  overrides[slug] = publicPath;
  await writeOverrides(overrides);

  return {
    ...member,
    image: publicPath,
  };
};
