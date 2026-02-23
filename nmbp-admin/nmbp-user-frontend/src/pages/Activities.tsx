import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const allActivities = [
    { id: 1, title: "Drawing Competition", date: "11/02/2026", location: "Community Hall, Amroha", participants: 80, district: "Amroha", state: "Uttar Pradesh" },
    { id: 2, title: "Slogan Writing Competition", date: "09/12/2025", location: "Town Hall, Ayodhya", participants: 532, district: "Ayodhya", state: "Uttar Pradesh" },
    { id: 3, title: "Rangoli Making Competition", date: "26/01/2026", location: "School Ground, Bhopal", participants: 150, district: "Bhopal", state: "Madhya Pradesh" },
    { id: 4, title: "Nukad Natak", date: "01/01/2026", location: "Market Square, Azamgarh", participants: 40, district: "Azamgarh", state: "Uttar Pradesh" },
    { id: 5, title: "Marathon/Walkathon", date: "01/01/2026", location: "Stadium, Jaipur", participants: 210, district: "Jaipur", state: "Rajasthan" },
    { id: 6, title: "Awareness Rally", date: "15/01/2026", location: "Main Road, Patna", participants: 350, district: "Patna", state: "Bihar" },
];

const Activities: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const role = user?.role || "district";
    const [search, setSearch] = useState("");

    // Role-based filtering
    const activities = allActivities.filter((a) => {
        const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase()) ||
            a.district.toLowerCase().includes(search.toLowerCase());
        return matchSearch;
    });

    const canEdit = role === "district";

    const pageTitle = role === "central" ? "All Activities" : role === "state" ? "District Activities" : "My Activities";

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: 0 }}>{pageTitle}</h1>
                {role === "district" && (
                    <Button color="#057A55" radius="md" size="sm" onClick={() => navigate("/create-activity")}>
                        + Create Activity
                    </Button>
                )}
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB" }}>
                {/* Search */}
                <div style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #F3F4F6" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "6px", padding: "6px 12px", width: "280px" }}>
                        <span style={{ color: "#9CA3AF" }}>🔍</span>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search activities..." style={{ border: "none", background: "none", outline: "none", fontSize: "13px", width: "100%", color: "#374151" }} />
                    </div>
                    {(role === "central" || role === "state") && (
                        <select style={{ border: "1px solid #E5E7EB", borderRadius: "6px", padding: "6px 10px", fontSize: "13px", color: "#374151", backgroundColor: "#fff" }}>
                            <option>{role === "central" ? "All States" : "All Districts"}</option>
                        </select>
                    )}
                </div>

                {/* Table */}
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#F9FAFB" }}>
                            <th style={{ padding: "10px 20px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Activity</th>
                            <th style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Date</th>
                            {(role === "central" || role === "state") && <th style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>District</th>}
                            <th style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Location</th>
                            <th style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Participants</th>
                            <th style={{ padding: "10px 16px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.map((a) => (
                            <tr key={a.id} style={{ borderTop: "1px solid #F3F4F6" }}>
                                <td style={{ padding: "12px 20px", fontSize: "13px", color: "#111827", fontWeight: 500 }}>{a.title}</td>
                                <td style={{ padding: "12px 16px", fontSize: "13px", color: "#6B7280" }}>{a.date}</td>
                                {(role === "central" || role === "state") && <td style={{ padding: "12px 16px", fontSize: "13px", color: "#6B7280" }}>{a.district}</td>}
                                <td style={{ padding: "12px 16px", fontSize: "13px", color: "#6B7280" }}>{a.location}</td>
                                <td style={{ padding: "12px 16px", fontSize: "13px", color: "#6B7280" }}>{a.participants}</td>
                                <td style={{ padding: "12px 16px" }}>
                                    {canEdit ? (
                                        <div style={{ display: "flex", gap: "8px" }}>
                                            <button style={{ background: "none", border: "none", color: "#1A56DB", fontSize: "13px", cursor: "pointer", fontWeight: 500 }}>✏️ Edit</button>
                                            <button style={{ background: "none", border: "none", color: "#dc2626", fontSize: "13px", cursor: "pointer", fontWeight: 500 }}>🗑 Delete</button>
                                        </div>
                                    ) : (
                                        <span style={{ color: "#1A56DB", fontSize: "13px", cursor: "pointer", fontWeight: 500 }}>View →</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #F3F4F6", fontSize: "12px", color: "#6B7280" }}>
                    <div style={{ display: "flex", gap: "4px" }}>
                        <span style={{ padding: "4px 8px", border: "1px solid #1A56DB", borderRadius: "4px", color: "#1A56DB", fontWeight: 600, backgroundColor: "#EBF5FF" }}>1</span>
                        {[2, 3].map(n => <span key={n} style={{ padding: "4px 8px", cursor: "pointer" }}>{n}</span>)}
                    </div>
                    <div>Showing 6 of 6 items</div>
                </div>
            </div>
        </div>
    );
};

export default Activities;
