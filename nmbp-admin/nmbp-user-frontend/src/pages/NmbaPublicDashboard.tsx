import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

const bgColors = ["#dbeafe", "#dcfce7", "#fef3c7", "#ede9fe", "#fce7f3", "#cffafe"];

const recentActivities = [
    { id: 1, title: "Aksnd-Student Awareness Drive", location: "Pune, Maharashtra", date: "25 Jun 2026", category: "Awareness Rally", image: "🏫" },
    { id: 2, title: "Government School Pledge", location: "Anand, Andhra Pradesh", date: "15 Jun 2026", category: "School Programme", image: "🏫" },
    { id: 3, title: "Village Meeting", location: "Alwar, Rajasthan", date: "13 Jun 2026", category: "Panchayat Rally", image: "🏘️" },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
    "Awareness Rally": { bg: "#E1EFFE", color: "#1A56DB" },
    "School Programme": { bg: "#DEF7EC", color: "#03543F" },
    "Panchayat Rally": { bg: "#FDE8E8", color: "#9B1C1C" },
};

const NmbaPublicDashboard: React.FC = () => {
    return (
        <div style={{ padding: "24px" }}>
            {/* Hero Banner */}
            <div style={{
                background: "linear-gradient(135deg, #1e3a5f 0%, #003366 100%)",
                borderRadius: "12px", padding: "24px 32px", color: "#fff",
                display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px",
            }}>
                <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 4px" }}>Nasha Mukt Bharat Abhiyaan</h2>
                    <p style={{ fontSize: "13px", opacity: 0.85, margin: 0 }}>Join 98 lakh+ citizens committed to a drug-free society.</p>
                </div>
                <Link to="/pledge">
                    <Button color="#fff" variant="white" size="sm" radius="md" styles={{ root: { color: "#003366", fontWeight: 600 } }}>
                        Take the Pledge →
                    </Button>
                </Link>
            </div>

            {/* Dashboard Title */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Dashboard</h1>
                    <p style={{ fontSize: "13px", color: "#6B7280", margin: 0 }}>Live impact metrics verified from field reports across 372 districts</p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                    <select style={{ padding: "8px 12px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "13px", backgroundColor: "#fff" }}>
                        <option>All States ▾</option>
                    </select>
                    <select style={{ padding: "8px 12px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "13px", backgroundColor: "#fff" }}>
                        <option>All Districts ▾</option>
                    </select>
                </div>
            </div>

            {/* Stats Cards Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "16px" }}>
                {[
                    { label: "Total Pledges", value: "22,75,906" },
                    { label: "People Reached", value: "25,89,78,572" },
                    { label: "Youth Reached", value: "9,33,63,189" },
                    { label: "Women Reached", value: "6,36,83,454" },
                ].map(s => (
                    <div key={s.label} style={{ backgroundColor: "#fff", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px 20px" }}>
                        <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "6px", fontWeight: 500 }}>{s.label}</div>
                        <div style={{ fontSize: "22px", fontWeight: 800, color: "#1A56DB" }}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Stats Cards Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
                {[
                    { label: "Total Activities Conducted", value: "8,16,100" },
                    { label: "Villages Covered", value: "3,79,707" },
                    { label: "Educational Institutions Covered", value: "16,09,943" },
                ].map(s => (
                    <div key={s.label} style={{ backgroundColor: "#fff", borderRadius: "10px", border: "1px solid #E5E7EB", padding: "16px 20px" }}>
                        <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "6px", fontWeight: 500 }}>{s.label}</div>
                        <div style={{ fontSize: "22px", fontWeight: 800, color: "#1A56DB" }}>{s.value}</div>
                    </div>
                ))}
            </div>

            {/* Number of Programmes */}
            <h2 style={{ fontSize: "13px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "16px" }}>NUMBER OF PROGRAMMES</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "32px" }}>
                {/* Education & Youth */}
                <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <span style={{ fontSize: "20px" }}>📚</span>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: 0 }}>Education & Youth</h3>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {[
                            { label: "Educational Institute Community Programme", value: "20,503" },
                            { label: "Active Std Against Drug Abuse", value: "47,131" },
                            { label: "Dnk % Social/Culture", value: "681" },
                            { label: "Youth Reached by Govt", value: "77,687" },
                            { label: "Nasha Mukt Social Programme", value: "5,705" },
                            { label: "Art & Cultural", value: "1,461" },
                        ].map(s => (
                            <div key={s.label}>
                                <div style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>{s.label}</div>
                                <div style={{ fontSize: "18px", fontWeight: 800, color: "#1A56DB" }}>{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Community Outreach */}
                <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <span style={{ fontSize: "20px" }}>🤝</span>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: 0 }}>Community Outreach</h3>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {[
                            { label: "Awareness/Community Programme", value: "9,019" },
                            { label: "Community Awareness", value: "58,851" },
                            { label: "Community Dep Programme", value: "53,541" },
                            { label: "Media Campaign", value: "7,901" },
                            { label: "Nasha Awareness Programme", value: "4,448" },
                            { label: "All Youth And Development", value: "4,116" },
                        ].map(s => (
                            <div key={s.label}>
                                <div style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>{s.label}</div>
                                <div style={{ fontSize: "18px", fontWeight: 800, color: "#1A56DB" }}>{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Governance & Local Bodies */}
                <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <span style={{ fontSize: "20px" }}>🏛️</span>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: 0 }}>Governance & Local Bodies</h3>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {[
                            { label: "District Committee Meeting", value: "898" },
                            { label: "People Event Coverage", value: "31,864" },
                            { label: "Villages Covered", value: "39,296" },
                            { label: "Panchayat", value: "4,602" },
                        ].map(s => (
                            <div key={s.label}>
                                <div style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>{s.label}</div>
                                <div style={{ fontSize: "18px", fontWeight: 800, color: "#1A56DB" }}>{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Targeted Interventions */}
                <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                        <span style={{ fontSize: "20px" }}>🎯</span>
                        <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", margin: 0 }}>Targeted Interventions</h3>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                        {[
                            { label: "Women Focus/Women's SHG Mahila Udyam", value: "9,515" },
                            { label: "All Data Youth Adults People Identification: National/Condition", value: "10,885" },
                            { label: "People in 11 Yr Age", value: "39,088" },
                            { label: "Total", value: "2,974" },
                            { label: "Identification Driven On Supply Of Substance", value: "1,840" },
                        ].map(s => (
                            <div key={s.label}>
                                <div style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>{s.label}</div>
                                <div style={{ fontSize: "18px", fontWeight: 800, color: "#1A56DB" }}>{s.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activities */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <h2 style={{ fontSize: "13px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", margin: 0 }}>RECENT ACTIVITIES ACROSS INDIA</h2>
                <Link to="/activity-snapshot" style={{ fontSize: "13px", color: "#1A56DB", fontWeight: 600, textDecoration: "none" }}>View all Activities →</Link>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
                {recentActivities.map((a, idx) => (
                    <div key={a.id} style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden" }}>
                        <div style={{
                            height: "160px", backgroundColor: bgColors[idx % bgColors.length],
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "48px", position: "relative",
                        }}>
                            {a.image}
                            <span style={{
                                position: "absolute", bottom: "10px", left: "10px",
                                padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600,
                                backgroundColor: categoryColors[a.category]?.bg || "#F3F4F6",
                                color: categoryColors[a.category]?.color || "#374151",
                            }}>{a.category}</span>
                        </div>
                        <div style={{ padding: "14px" }}>
                            <h3 style={{ fontSize: "14px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>{a.title}</h3>
                            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "#6B7280" }}>
                                <span>📍 {a.location}</span>
                                <span>📅 {a.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Find Facilities Banner */}
            <div style={{
                background: "linear-gradient(135deg, #1e3a5f 0%, #003366 100%)",
                borderRadius: "12px", padding: "24px 32px", color: "#fff",
                display: "flex", gap: "24px", alignItems: "center",
            }}>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px" }}>Find De-addiction Facilities Near You</h3>
                    <p style={{ fontSize: "13px", opacity: 0.9, margin: "0 0 16px" }}>
                        Locate verified Integrated Rehabilitation Centres (IRCAs), Outreach Centres (ODICs), and Addiction Treatment Facilities (ATFs) in your district.
                    </p>
                    <Link to="/facilities">
                        <button style={{
                            padding: "10px 20px", borderRadius: "6px", border: "none",
                            backgroundColor: "#dc2626", color: "#fff", fontWeight: 600, fontSize: "13px", cursor: "pointer",
                        }}>📍 View Facility Map →</button>
                    </Link>
                </div>
                {/* Mini map placeholder */}
                <div style={{
                    width: "200px", height: "140px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px",
                }}>🗺️</div>
            </div>
        </div>
    );
};

export default NmbaPublicDashboard;
