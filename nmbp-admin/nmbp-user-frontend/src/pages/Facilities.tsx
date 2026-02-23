import React, { useState } from "react";
import { Button } from "@mantine/core";

interface Facility {
    id: number;
    name: string;
    type: string;
    types: string[];
    address: string;
    distance: string;
    phone: string;
    website: string;
    services: string[];
}

const facilities: Facility[] = [
    {
        id: 1, name: "National Institute of Mental Health and Neuro Sciences (NIMHANS)",
        type: "De-Addiction Centre", types: ["De-Addiction Centre", "OAT"],
        address: "Hosur Road, Bangalore - 560029", distance: "1.5 KM",
        phone: "info@nimhans.ac.in", website: "https://www.nimhans.ac.in",
        services: ["Inpatient Treatment", "Outpatient Counselling", "De-toxification", "Rehabilitation"],
    },
    {
        id: 2, name: "All India Institute of Medical Sciences (AIIMS)",
        type: "Hospital", types: ["Hospital"],
        address: "Ansari Nagar, New Delhi - 110029", distance: "3.5 KM",
        phone: "Medical Aid: 5 PM", website: "https://www.aiims.edu",
        services: ["De-Addiction Service", "Psychiatric Care", "Counselling"],
    },
    {
        id: 3, name: "Muktangan Rehabilitation Centre",
        type: "Rehabilitation", types: ["Rehabilitation"],
        address: "Thane West, Mumbai - 400601", distance: "1.5 KM",
        phone: "muktangan@rehabilitation.org", website: "",
        services: ["Residential Treatment", "Family Counselling", "Aftercare Support"],
    },
];

const typeColors: Record<string, { bg: string; color: string }> = {
    "De-Addiction Centre": { bg: "#DEF7EC", color: "#03543F" },
    "OAT": { bg: "#E1EFFE", color: "#1A56DB" },
    "Hospital": { bg: "#FDE8E8", color: "#9B1C1C" },
    "Rehabilitation": { bg: "#FDF6B2", color: "#723B13" },
};

const Facilities: React.FC = () => {
    const [search, setSearch] = useState("");

    const filtered = facilities.filter(f => f.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <div style={{ padding: "24px" }}>
            {/* Title */}
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Help Centres & Facilities</h1>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 20px" }}>
                Find de-addiction centres, counselling services, and support facilities across India
            </p>

            {/* Search + Filters */}
            <div style={{ display: "flex", gap: "12px", marginBottom: "24px", alignItems: "center" }}>
                <div style={{ flex: 1, position: "relative" }}>
                    <span style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "#9CA3AF" }}>🔍</span>
                    <input
                        value={search} onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search by facility name, city, district, PIN or address"
                        style={{ width: "100%", padding: "10px 14px 10px 36px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }}
                    />
                </div>
                <select style={{ padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "13px", backgroundColor: "#fff" }}>
                    <option>All Facility Types ▾</option>
                    <option>De-Addiction Centre</option>
                    <option>Hospital</option>
                    <option>Rehabilitation</option>
                </select>
                <Button color="#1A56DB" size="sm" leftSection={<span>📍</span>}>Near Me</Button>
            </div>

            {/* Map + Facility List */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid #E5E7EB", borderRadius: "12px", overflow: "hidden" }}>
                {/* Map */}
                <div style={{
                    backgroundColor: "#e8e8e8", minHeight: "600px", position: "relative",
                }}>
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.596!3d12.972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE5LjIiTiA3N8KwMzUnNDUuNiJF!5e0!3m2!1sen!2sin!4v1"
                        style={{ width: "100%", height: "100%", border: "none" }}
                        loading="lazy"
                    />
                </div>

                {/* Facility Cards */}
                <div style={{ backgroundColor: "#fff" }}>
                    <div style={{ padding: "16px 20px", borderBottom: "1px solid #E5E7EB", fontSize: "14px", fontWeight: 600, color: "#111827" }}>
                        Facilities ({filtered.length})
                    </div>
                    {filtered.map((f) => (
                        <div key={f.id} style={{ padding: "20px", borderBottom: "1px solid #F3F4F6" }}>
                            {/* Type Badges */}
                            <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
                                {f.types.map(t => (
                                    <span key={t} style={{
                                        padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600,
                                        backgroundColor: typeColors[t]?.bg || "#F3F4F6",
                                        color: typeColors[t]?.color || "#374151",
                                    }}>{t}</span>
                                ))}
                            </div>

                            {/* Name */}
                            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>{f.name}</h3>

                            {/* Address + Distance */}
                            <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 2px" }}>📍 {f.address} • {f.distance}</p>
                            {f.phone && <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 2px" }}>✉️ {f.phone}</p>}
                            {f.website && <p style={{ fontSize: "12px", color: "#1A56DB", margin: "0 0 8px" }}>🌐 {f.website}</p>}

                            {/* Services */}
                            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "12px" }}>
                                {f.services.map(s => (
                                    <span key={s} style={{
                                        padding: "3px 10px", borderRadius: "12px", fontSize: "11px",
                                        backgroundColor: "#F3F4F6", color: "#374151",
                                    }}>{s}</span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div style={{ display: "flex", gap: "8px" }}>
                                <Button color="#057A55" size="xs" radius="md">🧭 Get Directions</Button>
                                <Button variant="outline" color="gray" size="xs" radius="md">📞 Call Now</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
