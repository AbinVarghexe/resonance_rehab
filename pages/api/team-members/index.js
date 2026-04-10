import { getTeamMembersWithOverrides } from "@/server/teamPhotoStore";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const members = await getTeamMembersWithOverrides();
    return res.status(200).json({ members });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Failed to load team members",
    });
  }
}
