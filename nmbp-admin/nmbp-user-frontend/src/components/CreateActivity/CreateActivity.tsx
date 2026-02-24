import React, { useState } from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const CreateActivity: React.FC = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        title: "", description: "", eventDate: "", location: "", participants: "",
    });

    const update = (key: string, val: string) => setForm((p) => ({ ...p, [key]: val }));

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // API integration later
        alert("Activity created successfully!");
        navigate("/activities");
    };

    return (
        <div>
            <div style={{ marginBottom: "20px" }}>
                <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: 0 }}>Create Activity</h1>
                <p style={{ fontSize: "12px", color: "#9CA3AF", margin: "2px 0 0" }}>Fill in the details for the new activity</p>
            </div>

            <form onSubmit={handleSubmit} style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "28px", maxWidth: "640px" }}>
                {/* Activity Title */}
                <div style={{ marginBottom: "18px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Activity Title *</label>
                    <input required value={form.title} onChange={(e) => update("title", e.target.value)}
                        placeholder="e.g. Drawing Competition, Rally, Workshop"
                        style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px" }} />
                </div>

                {/* Description */}
                <div style={{ marginBottom: "18px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Description *</label>
                    <textarea required value={form.description} onChange={(e) => update("description", e.target.value)}
                        placeholder="Describe the activity in detail"
                        rows={4} style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", resize: "vertical" }} />
                </div>

                {/* Event Date + Location */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "18px" }}>
                    <div>
                        <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Event Date *</label>
                        <input required type="date" value={form.eventDate} onChange={(e) => update("eventDate", e.target.value)}
                            style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px" }} />
                    </div>
                    <div>
                        <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Location *</label>
                        <input required value={form.location} onChange={(e) => update("location", e.target.value)}
                            placeholder="e.g. Community Hall, Block A"
                            style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px" }} />
                    </div>
                </div>

                {/* Participants Count */}
                <div style={{ marginBottom: "18px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Participants Count *</label>
                    <input required type="number" min="1" value={form.participants} onChange={(e) => update("participants", e.target.value)}
                        placeholder="Number of participants"
                        style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px" }} />
                </div>

                {/* Upload Photos */}
                <div style={{ marginBottom: "18px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Upload Photos</label>
                    <div style={{
                        border: "2px dashed #E5E7EB", borderRadius: "8px", padding: "24px", textAlign: "center",
                        backgroundColor: "#FAFAFA", cursor: "pointer",
                    }}>
                        <div style={{ fontSize: "28px", marginBottom: "6px" }}>📸</div>
                        <div style={{ fontSize: "13px", color: "#6B7280" }}>Click to upload or drag & drop</div>
                        <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "4px" }}>JPG, PNG up to 5MB each</div>
                        <input type="file" accept="image/*" multiple style={{ display: "none" }} />
                    </div>
                </div>

                {/* Upload Videos */}
                <div style={{ marginBottom: "24px" }}>
                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Upload Videos</label>
                    <div style={{
                        border: "2px dashed #E5E7EB", borderRadius: "8px", padding: "24px", textAlign: "center",
                        backgroundColor: "#FAFAFA", cursor: "pointer",
                    }}>
                        <div style={{ fontSize: "28px", marginBottom: "6px" }}>🎬</div>
                        <div style={{ fontSize: "13px", color: "#6B7280" }}>Click to upload or drag & drop</div>
                        <div style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "4px" }}>MP4 up to 50MB each</div>
                        <input type="file" accept="video/*" multiple style={{ display: "none" }} />
                    </div>
                </div>

                {/* Actions */}
                <div style={{ display: "flex", gap: "12px" }}>
                    <Button type="submit" color="#057A55" size="md">Create Activity</Button>
                    <Button variant="outline" color="gray" size="md" onClick={() => navigate("/activities")}>Cancel</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateActivity;
