import { saveTeamMemberPhoto } from "@/server/teamPhotoStore";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { slug, mimeType, base64Data } = req.body || {};
    const updatedMember = await saveTeamMemberPhoto({
      slug,
      mimeType,
      base64Data,
    });

    return res.status(200).json({
      message: "Photo uploaded successfully",
      member: updatedMember,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message || "Unable to upload team photo",
    });
  }
}
