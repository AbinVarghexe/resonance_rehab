import { useEffect, useMemo, useState } from "react";

const AdminPage = () => {
  const [members, setMembers] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const selectedMember = useMemo(
    () => members.find((member) => member.slug === selectedSlug),
    [members, selectedSlug]
  );

  useEffect(() => {
    const loadMembers = async () => {
      try {
        const response = await fetch("/api/team-members");
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to load team members");
        }
        setMembers(data.members || []);
        setSelectedSlug(data.members?.[0]?.slug || "");
      } catch (error) {
        setStatus(error.message || "Unable to load team members");
      } finally {
        setLoading(false);
      }
    };

    loadMembers();
  }, []);

  const handleUpload = async (event) => {
    event.preventDefault();
    if (!selectedSlug || !selectedFile) {
      setStatus("Please choose a team member and an image file.");
      return;
    }

    setSubmitting(true);
    setStatus("");

    try {
      const fileBuffer = await selectedFile.arrayBuffer();
      const base64Data = btoa(
        new Uint8Array(fileBuffer).reduce(
          (acc, byte) => acc + String.fromCharCode(byte),
          ""
        )
      );

      const response = await fetch("/api/team-members/photo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: selectedSlug,
          mimeType: selectedFile.type,
          base64Data,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      setMembers((current) =>
        current.map((member) =>
          member.slug === selectedSlug ? data.member : member
        )
      );
      setSelectedFile(null);
      setStatus("Photo updated successfully.");
    } catch (error) {
      setStatus(error.message || "Unable to upload photo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-6 shadow-md sm:p-8">
        <h1 className="font-autumn text-3xl text-primary-color">Team Photo Admin</h1>
        <p className="mt-2 font-urbanist text-sm text-secondary-color">
          Upload and replace photo assets for each team member.
        </p>

        {loading ? (
          <p className="mt-6 font-urbanist text-primary-color">Loading team members...</p>
        ) : (
          <form onSubmit={handleUpload} className="mt-6 space-y-5">
            <label className="block font-urbanist text-sm text-primary-color">
              Team member
              <select
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2"
                value={selectedSlug}
                onChange={(event) => setSelectedSlug(event.target.value)}
              >
                {members.map((member) => (
                  <option key={member.slug} value={member.slug}>
                    {member.name}
                  </option>
                ))}
              </select>
            </label>

            {selectedMember ? (
              <div className="rounded-2xl bg-cream p-4">
                <p className="font-urbanist text-xs text-primary-color">
                  Current image:
                </p>
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="mt-2 h-40 w-40 rounded-2xl object-cover"
                />
              </div>
            ) : null}

            <label className="block font-urbanist text-sm text-primary-color">
              New photo (JPG, PNG, WEBP, max 5MB)
              <input
                className="mt-2 w-full rounded-xl border border-gray-300 px-3 py-2"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(event) => setSelectedFile(event.target.files?.[0] || null)}
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-button-main px-6 py-3 font-urbanist font-bold text-primary-color disabled:opacity-60"
            >
              {submitting ? "Uploading..." : "Upload Photo"}
            </button>
          </form>
        )}

        {status ? (
          <p className="mt-5 rounded-xl bg-cream p-3 font-urbanist text-sm text-primary-color">
            {status}
          </p>
        ) : null}
      </div>
    </main>
  );
};

export default AdminPage;
