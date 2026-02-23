import React from "react";
import { Badge, Button } from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PageHeader from "../components/common/PageHeader/PageHeader";

const activityData: Record<string, {
    title: string; description: string; date: string; location: string;
    district: string; state: string; participants: number; male: number; female: number;
    status: string; organizer: string; photos: string[]; videos: string[];
}> = {
    "1": {
        title: "Drawing Competition", description: "A drawing competition was organized to raise awareness about the ill effects of drug abuse among youth. Students from various schools participated enthusiastically and created beautiful artwork depicting a drug-free society.",
        date: "11/02/2026", location: "Community Hall, Amroha", district: "Amroha", state: "Uttar Pradesh",
        participants: 80, male: 40, female: 40, status: "Completed", organizer: "Ashok Kumar",
        photos: [], videos: [],
    },
    "2": {
        title: "Slogan Writing Competition", description: "A slogan writing competition to encourage creative expression against drug abuse. Participants wrote powerful slogans in Hindi and English, promoting awareness in the community.",
        date: "09/12/2025", location: "Town Hall, Ayodhya", district: "Ayodhya", state: "Uttar Pradesh",
        participants: 532, male: 232, female: 300, status: "Completed", organizer: "Rajesh Singh",
        photos: [], videos: [],
    },
    "3": {
        title: "Rangoli Making Competition", description: "Rangoli making competition organized on Republic Day to promote drug-free India message through art. Participants used vibrant colors to depict anti-drug themes.",
        date: "26/01/2026", location: "School Ground, Bhopal", district: "Bhopal", state: "Madhya Pradesh",
        participants: 150, male: 100, female: 50, status: "Completed", organizer: "Priya Sharma",
        photos: [], videos: [],
    },
};

const ActivityDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { user } = useAuth();
    const role = user?.role || "district";

    const activity = activityData[id || "1"] || activityData["1"];

    return (
        <div>
            <PageHeader
                title="Activity Details"
                breadcrumbs={[
                    { label: "Home", path: "/dashboard" },
                    { label: role === "district" ? "My Activities" : "Activities", path: "/activities" },
                    { label: activity.title },
                ]}
            />

            <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "28px" }}>
                {/* Title & Status */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "24px" }}>
                    <div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: "0 0 8px" }}>{activity.title}</h2>
                        <Badge
                            color={activity.status === "Completed" ? "green" : activity.status === "In Progress" ? "blue" : "orange"}
                            variant="light" size="md"
                        >
                            {activity.status}
                        </Badge>
                    </div>
                    <div style={{ display: "flex", gap: "8px" }}>
                        {role === "district" && (
                            <>
                                <Button variant="outline" color="#1A56DB" size="sm">✏️ Edit</Button>
                                <Button variant="outline" color="red" size="sm">🗑 Delete</Button>
                            </>
                        )}
                        {role === "state" && (
                            <>
                                <Button color="#057A55" size="sm">✅ Approve</Button>
                                <Button variant="outline" color="red" size="sm">❌ Reject</Button>
                            </>
                        )}
                    </div>
                </div>

                {/* Description */}
                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#6B7280", marginBottom: "8px", textTransform: "uppercase" }}>Description</h3>
                    <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7 }}>{activity.description}</p>
                </div>

                {/* Details Grid */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "24px" }}>
                    {[
                        { label: "Event Date", value: activity.date, icon: "📅" },
                        { label: "Location", value: activity.location, icon: "📍" },
                        { label: "District", value: activity.district, icon: "🏘️" },
                        { label: "State", value: activity.state, icon: "🗺️" },
                        { label: "Organizer", value: activity.organizer, icon: "👤" },
                        { label: "Status", value: activity.status, icon: "📋" },
                    ].map((d) => (
                        <div key={d.label} style={{ backgroundColor: "#F9FAFB", borderRadius: "8px", padding: "16px" }}>
                            <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "4px" }}>{d.icon} {d.label}</div>
                            <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{d.value}</div>
                        </div>
                    ))}
                </div>

                {/* Participant Stats */}
                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#6B7280", marginBottom: "12px", textTransform: "uppercase" }}>Participants</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                        <div style={{ backgroundColor: "#EBF5FF", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
                            <div style={{ fontSize: "28px", fontWeight: 800, color: "#1A56DB" }}>{activity.participants}</div>
                            <div style={{ fontSize: "12px", color: "#6B7280" }}>Total Participants</div>
                        </div>
                        <div style={{ backgroundColor: "#F0FFF4", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
                            <div style={{ fontSize: "28px", fontWeight: 800, color: "#057A55" }}>{activity.male}</div>
                            <div style={{ fontSize: "12px", color: "#6B7280" }}>Male</div>
                        </div>
                        <div style={{ backgroundColor: "#F3E8FF", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
                            <div style={{ fontSize: "28px", fontWeight: 800, color: "#7c3aed" }}>{activity.female}</div>
                            <div style={{ fontSize: "12px", color: "#6B7280" }}>Female</div>
                        </div>
                    </div>
                </div>

                {/* Photos Section */}
                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#6B7280", marginBottom: "12px", textTransform: "uppercase" }}>Photos</h3>
                    {activity.photos.length > 0 ? (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                            {activity.photos.map((p, i) => (
                                <div key={i} style={{ borderRadius: "8px", overflow: "hidden", aspectRatio: "4/3", backgroundColor: "#F3F4F6" }}>
                                    <img src={p} alt={`Photo ${i + 1}`} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ backgroundColor: "#F9FAFB", borderRadius: "8px", padding: "32px", textAlign: "center", color: "#9CA3AF", fontSize: "13px" }}>
                            📸 No photos uploaded
                        </div>
                    )}
                </div>

                {/* Videos Section */}
                <div style={{ marginBottom: "24px" }}>
                    <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#6B7280", marginBottom: "12px", textTransform: "uppercase" }}>Videos</h3>
                    {activity.videos.length > 0 ? (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                            {activity.videos.map((v, i) => (
                                <video key={i} src={v} controls style={{ width: "100%", borderRadius: "8px" }} />
                            ))}
                        </div>
                    ) : (
                        <div style={{ backgroundColor: "#F9FAFB", borderRadius: "8px", padding: "32px", textAlign: "center", color: "#9CA3AF", fontSize: "13px" }}>
                            🎬 No videos uploaded
                        </div>
                    )}
                </div>

                {/* Back Button */}
                <Button variant="outline" color="#1A56DB" onClick={() => navigate("/activities")}>← Back to Activities</Button>
            </div>
        </div>
    );
};

export default ActivityDetails;
