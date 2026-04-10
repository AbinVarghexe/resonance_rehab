import { getSupabaseAuthClient } from "@/server/supabaseServer";

const normalizeEmail = (email = "") => email.trim().toLowerCase();

const getAllowedAdminEmails = () => {
  const raw = process.env.ADMIN_EMAILS || "";
  return raw
    .split(",")
    .map((item) => normalizeEmail(item))
    .filter(Boolean);
};

export const verifyAdminAccessToken = async (token) => {
  if (!token) {
    throw new Error("Missing access token.");
  }

  const supabase = getSupabaseAuthClient();
  if (!supabase) {
    throw new Error("Supabase auth is not configured.");
  }

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data?.user) {
    throw new Error("Invalid or expired session.");
  }

  const userEmail = normalizeEmail(data.user.email);
  const allowList = getAllowedAdminEmails();

  if (allowList.length > 0 && !allowList.includes(userEmail)) {
    throw new Error("This account is not allowed to manage team photos.");
  }

  return data.user;
};
