import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Activity {
    id: number;
    title: string;
    category: string;
    location: string;
    date: string;
    participants: string;
    participantsCount: number;
    image: string;
    desc: string;
    targetAudience: string;
    venueType: string;
    organizedBy: string;
    chiefGuest: string;
    state: string;
    district: string;
    town: string;
    submittedOn: string;
    aboutText: string;
}

const activities: Activity[] = [
    {
        id: 1, title: "Mass Awareness Rally at Dnyanraj Education Society",
        category: "Awareness Rally", location: "Pune, Maharashtra", date: "25 Jan 2026",
        participants: "250+", participantsCount: 250, image: "🏫",
        desc: "A mass awareness rally organised by Dnyanraj Education Society in Alandi, Pune to mark Republic Day.",
        targetAudience: "Youth & Students", venueType: "Public / Educational Inst.",
        organizedBy: "Dnyanraj Education Society", chiefGuest: "SDM Una, Sh. Vishwa Mohan Chauhan",
        state: "Maharashtra", district: "Pune", town: "Alandi", submittedOn: "26 Jan 2026",
        aboutText: "A mass awareness rally was organised by Dnyanraj Education Society in Alandi, Pune to mark Republic Day. The primary objective was to sensitise the youth about the detrimental effects of substance abuse.\n\nOver 250 students marched through the town centre holding placards. The event concluded with a pledge administration ceremony led by the District Collector.",
    },
    {
        id: 2, title: "Government School Anti-Drug Campaign",
        category: "Community Event", location: "Anand, Andhra Pradesh", date: "22 Jan 2026",
        participants: "800+", participantsCount: 800, image: "🏫",
        desc: "Rally to spread awareness about substance abuse prevention among government school students.",
        targetAudience: "Students", venueType: "Public / Educational Inst.",
        organizedBy: "District Education Office", chiefGuest: "DM Anand, Sh. Rajesh Kumar",
        state: "Andhra Pradesh", district: "Anand", town: "Anand", submittedOn: "23 Jan 2026",
        aboutText: "A comprehensive anti-drug campaign was conducted across government schools in Anand district. Over 800 students participated in awareness sessions, poster-making competitions, and took the NMBA pledge.\n\nThe event was supported by local police and health department officials who shared real-life case studies.",
    },
    {
        id: 3, title: "Village Meeting on Drug Prevention",
        category: "Community Event", location: "Nashik, Maharashtra", date: "20 Jan 2026",
        participants: "300+", participantsCount: 300, image: "🏘️",
        desc: "Community-led initiative to hold rural awareness sessions promoting substance-free communities.",
        targetAudience: "Rural Community", venueType: "Public / Open Ground",
        organizedBy: "Gram Panchayat Committee", chiefGuest: "Sarpanch Sh. Anil Deshmukh",
        state: "Maharashtra", district: "Nashik", town: "Igatpuri", submittedOn: "21 Jan 2026",
        aboutText: "A village-level meeting was organized by the Gram Panchayat Committee to discuss the rising issue of substance abuse among rural youth. Community leaders, teachers, and health workers participated.\n\nThe meeting concluded with a resolution to establish a village-level vigilance committee to monitor and prevent drug abuse.",
    },
    {
        id: 4, title: "Yoga & Fitness Camp Against Drug Abuse",
        category: "Awareness Rally", location: "Bangalore, Karnataka", date: "18 Jan 2026",
        participants: "1,200+", participantsCount: 1200, image: "🧘",
        desc: "A large-scale yoga and fitness event highlighting physical and mental wellness.",
        targetAudience: "General Public", venueType: "Public / Open Ground",
        organizedBy: "District Sports Authority", chiefGuest: "DC Bangalore, Sh. Mohan Rao",
        state: "Karnataka", district: "Bangalore Urban", town: "Bangalore", submittedOn: "19 Jan 2026",
        aboutText: "A mega yoga and fitness camp was organized to promote healthy alternatives to substance abuse. The event featured yoga sessions, fitness competitions, and awareness talks by medical professionals.\n\nOver 1,200 participants including students, working professionals, and senior citizens participated in the event.",
    },
    {
        id: 5, title: "Rehabilitation Assistance Programme",
        category: "Rehabilitation", location: "New Delhi", date: "15 Jan 2026",
        participants: "150+", participantsCount: 150, image: "🏥",
        desc: "Comprehensive counselling and treatment referral services for affected individuals and families.",
        targetAudience: "Affected Individuals", venueType: "Public / Hospital",
        organizedBy: "AIIMS De-addiction Centre", chiefGuest: "Dr. Rajiv Sharma, HOD Psychiatry",
        state: "Delhi", district: "New Delhi", town: "Ansari Nagar", submittedOn: "16 Jan 2026",
        aboutText: "A rehabilitation assistance programme was conducted at AIIMS to provide counselling, treatment referrals, and family support services. Medical professionals provided guidance on treatment options and recovery pathways.\n\nOver 150 individuals and family members received direct assistance during the programme.",
    },
    {
        id: 6, title: "Community Empowerment Drive",
        category: "Community Event", location: "Lucknow, UP", date: "12 Jan 2026",
        participants: "600+", participantsCount: 600, image: "💪",
        desc: "Raising awareness about NMBA initiatives through community mobilization.",
        targetAudience: "Community Leaders", venueType: "Public / Community Hall",
        organizedBy: "District Administration", chiefGuest: "ADM Lucknow, Sh. Pradeep Singh",
        state: "Uttar Pradesh", district: "Lucknow", town: "Lucknow", submittedOn: "13 Jan 2026",
        aboutText: "A community empowerment drive was organized to engage local leaders, youth volunteers, and NGOs in the fight against substance abuse. The event included panel discussions, street plays, and pledge ceremonies.\n\nOver 600 community members actively participated and pledged their support.",
    },
    {
        id: 7, title: "Door-to-Door Awareness Campaign",
        category: "Awareness Rally", location: "Chennai, Tamil Nadu", date: "10 Jan 2026",
        participants: "400+", participantsCount: 400, image: "🚪",
        desc: "Volunteers visiting households to discuss drug abuse prevention measures.",
        targetAudience: "Households", venueType: "Residential Areas",
        organizedBy: "NMBA Volunteer Network", chiefGuest: "Commissioner Chennai, Sh. Venkat Raman",
        state: "Tamil Nadu", district: "Chennai", town: "T. Nagar", submittedOn: "11 Jan 2026",
        aboutText: "Trained volunteers visited over 400 households in T. Nagar to distribute awareness pamphlets, explain the dangers of substance abuse, and share information about local support services.\n\nThe campaign was well-received with many families requesting follow-up visits.",
    },
    {
        id: 8, title: "Skill Training for Recovered Individuals",
        category: "Rehabilitation", location: "Kolkata, West Bengal", date: "8 Jan 2026",
        participants: "250+", participantsCount: 250, image: "🛠️",
        desc: "Vocational training and rehabilitation support for individuals in recovery.",
        targetAudience: "Recovered Individuals", venueType: "Public / Training Centre",
        organizedBy: "State Rehabilitation Board", chiefGuest: "Secretary SJE, Sh. Debashis Roy",
        state: "West Bengal", district: "Kolkata", town: "Salt Lake", submittedOn: "9 Jan 2026",
        aboutText: "A vocational skill training programme was launched for individuals recovering from substance abuse. Training was provided in areas like tailoring, computer operation, and mobile repair.\n\nOver 250 beneficiaries enrolled in the programme, with placement support offered post-training.",
    },
    {
        id: 9, title: "Community Support Network Meeting",
        category: "Community Event", location: "Jaipur, Rajasthan", date: "5 Jan 2026",
        participants: "500+", participantsCount: 500, image: "🤝",
        desc: "Building community support networks for drug-free zones.",
        targetAudience: "Community Members", venueType: "Public / Municipal Hall",
        organizedBy: "Jaipur Municipal Corporation", chiefGuest: "Mayor Jaipur, Smt. Kavita Sharma",
        state: "Rajasthan", district: "Jaipur", town: "Jaipur", submittedOn: "6 Jan 2026",
        aboutText: "A meeting of community support networks was held to discuss progress on creating drug-free zones. Representatives from 50 wards shared best practices and implementation strategies.\n\nThe meeting resolved to increase community surveillance and establish more peer support groups across the city.",
    },
];

const categories = ["All Activities", "Awareness Rally", "Community Event", "Rehabilitation"];

const categoryColors: Record<string, { bg: string; color: string }> = {
    "Awareness Rally": { bg: "#E1EFFE", color: "#1A56DB" },
    "Community Event": { bg: "#DEF7EC", color: "#03543F" },
    "Rehabilitation": { bg: "#FDE8E8", color: "#9B1C1C" },
};

const bgColors = ["#dbeafe", "#dcfce7", "#fef3c7", "#ede9fe", "#fce7f3", "#cffafe", "#e0e7ff", "#fef9c3", "#d1fae5"];

const ActivitySnapshot: React.FC = () => {
    const [categoryFilter, setCategoryFilter] = useState("All Activities");
    const [visibleCount, setVisibleCount] = useState(9);
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

    const filtered = categoryFilter === "All Activities" ? activities : activities.filter(a => a.category === categoryFilter);

    // ── DETAIL VIEW ──
    if (selectedActivity) {
        const a = selectedActivity;
        return (
            <div style={{ padding: "24px" }}>
                {/* Breadcrumb */}
                <div style={{ fontSize: "13px", color: "#6B7280", marginBottom: "16px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <Link to="/activity-snapshot" onClick={(e) => { e.preventDefault(); setSelectedActivity(null); }} style={{ color: "#6B7280", textDecoration: "none" }}>NMBA</Link>
                    <span>/</span>
                    <Link to="/activity-snapshot" onClick={(e) => { e.preventDefault(); setSelectedActivity(null); }} style={{ color: "#6B7280", textDecoration: "none" }}>Activity Snapshot</Link>
                    <span>/</span>
                    <span style={{ color: "#111827", fontWeight: 500 }}>{a.title}</span>
                </div>

                {/* Category Badge */}
                <span style={{
                    display: "inline-block", padding: "4px 14px", borderRadius: "14px", fontSize: "12px", fontWeight: 600,
                    backgroundColor: categoryColors[a.category]?.bg || "#F3F4F6",
                    color: categoryColors[a.category]?.color || "#374151", marginBottom: "8px",
                }}>{a.category}</span>

                {/* Title */}
                <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>{a.title}</h1>
                <div style={{ fontSize: "13px", color: "#6B7280", marginBottom: "20px", display: "flex", gap: "16px" }}>
                    <span>📍 {a.location}</span>
                    <span>📅 {a.date}</span>
                </div>

                {/* Large Image */}
                <div style={{
                    width: "100%", height: "400px", borderRadius: "12px",
                    backgroundColor: bgColors[a.id % bgColors.length],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "80px", marginBottom: "8px", position: "relative",
                }}>
                    {a.image}
                </div>
                {/* Carousel dots */}
                <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginBottom: "32px" }}>
                    {[0, 1, 2, 3, 4].map((d, i) => (
                        <div key={i} style={{
                            width: i === 0 ? "10px" : "8px", height: i === 0 ? "10px" : "8px",
                            borderRadius: "50%", backgroundColor: i === 0 ? "#1A56DB" : "#D1D5DB",
                        }} />
                    ))}
                </div>

                {/* Content: About + Map/Details */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "32px" }}>
                    {/* Left: About */}
                    <div>
                        <h2 style={{ fontSize: "13px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>ABOUT THE ACTIVITY</h2>
                        <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, whiteSpace: "pre-line", marginBottom: "24px" }}>{a.aboutText}</p>

                        {/* Details Table */}
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <tbody>
                                {[
                                    { label: "Participants Count", value: a.participantsCount.toString(), bold: true },
                                    { label: "Target Audience", value: a.targetAudience, color: "#1A56DB" },
                                    { label: "Venue Type", value: a.venueType, color: "#1A56DB" },
                                    { label: "Organized By", value: a.organizedBy, color: "#1A56DB" },
                                    { label: "Chief Guest", value: a.chiefGuest, color: "#1A56DB" },
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderTop: i > 0 ? "1px solid #F3F4F6" : "none" }}>
                                        <td style={{ padding: "12px 0", fontSize: "14px", color: "#6B7280" }}>{row.label}</td>
                                        <td style={{ padding: "12px 0", fontSize: "14px", fontWeight: row.bold ? 800 : 600, color: row.color || "#111827", textAlign: "right" }}>{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Right: Map + Info */}
                    <div>
                        {/* Map */}
                        <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "16px", border: "1px solid #E5E7EB" }}>
                            <iframe
                                title="Location"
                                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d73.89!3d18.52!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sin!4v1`}
                                style={{ width: "100%", height: "200px", border: "none" }}
                                loading="lazy"
                            />
                        </div>

                        {/* Location Details */}
                        <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden" }}>
                            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                                <tbody>
                                    {[
                                        { label: "State", value: a.state },
                                        { label: "District", value: a.district },
                                        { label: "Town", value: a.town },
                                        { label: "Activity Date", value: a.date },
                                        { label: "Submitted On", value: a.submittedOn },
                                    ].map((row, i) => (
                                        <tr key={i} style={{ borderTop: i > 0 ? "1px solid #F3F4F6" : "none" }}>
                                            <td style={{ padding: "12px 16px", fontSize: "13px", color: "#6B7280" }}>{row.label}</td>
                                            <td style={{ padding: "12px 16px", fontSize: "13px", fontWeight: 600, color: "#111827", textAlign: "right" }}>{row.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // ── LIST VIEW ──
    return (
        <div style={{ padding: "24px" }}>
            {/* Title + Filters */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                <div>
                    <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Activity Snapshots</h1>
                    <p style={{ fontSize: "14px", color: "#6B7280", margin: 0 }}>NMBA activities conducted across States and Districts</p>
                </div>
                <div style={{ display: "flex", gap: "8px" }}>
                    <select style={{ padding: "8px 12px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "13px", backgroundColor: "#fff" }}>
                        <option>All States ▾</option>
                    </select>
                    <select style={{ padding: "8px 12px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "13px", backgroundColor: "#fff" }}>
                        <option>All Districts ▾</option>
                    </select>
                    <select style={{ padding: "8px 12px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "13px", backgroundColor: "#fff" }}>
                        <option>Activity Types ▾</option>
                    </select>
                </div>
            </div>

            {/* Category Tabs */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "24px" }}>
                {categories.map(c => (
                    <button key={c} onClick={() => { setCategoryFilter(c); setVisibleCount(9); }} style={{
                        padding: "6px 16px", borderRadius: "20px", border: "1px solid #E5E7EB", fontSize: "13px", cursor: "pointer",
                        backgroundColor: categoryFilter === c ? "#1A56DB" : "#fff",
                        color: categoryFilter === c ? "#fff" : "#374151",
                        fontWeight: categoryFilter === c ? 600 : 400,
                    }}>{c}</button>
                ))}
            </div>

            {/* Photo Cards Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "24px" }}>
                {filtered.slice(0, visibleCount).map((a, idx) => (
                    <div key={a.id} onClick={() => setSelectedActivity(a)} style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden", cursor: "pointer", transition: "box-shadow 0.2s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                    >
                        {/* Image */}
                        <div style={{
                            height: "180px", backgroundColor: bgColors[idx % bgColors.length],
                            display: "flex", alignItems: "center", justifyContent: "center",
                            fontSize: "48px", position: "relative",
                        }}>
                            {a.image}
                            <span style={{
                                position: "absolute", top: "12px", left: "12px",
                                padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600,
                                backgroundColor: categoryColors[a.category]?.bg || "#F3F4F6",
                                color: categoryColors[a.category]?.color || "#374151",
                            }}>{a.category}</span>
                        </div>
                        <div style={{ padding: "16px" }}>
                            <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>{a.title}</h3>
                            <p style={{ fontSize: "12px", color: "#6B7280", margin: "0 0 10px", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{a.desc}</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#6B7280" }}>
                                <span>📍 {a.location}</span>
                                <span>📅 {a.date}</span>
                            </div>
                            <div style={{ borderTop: "1px solid #F3F4F6", marginTop: "10px", paddingTop: "10px", fontSize: "13px" }}>
                                <span style={{ fontWeight: 700, color: "#1A56DB" }}>{a.participants}</span>
                                <span style={{ color: "#6B7280" }}> participants</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More */}
            {visibleCount < filtered.length && (
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <button onClick={() => setVisibleCount(c => c + 9)} style={{
                        padding: "10px 32px", border: "1px solid #1A56DB", borderRadius: "8px", fontSize: "14px",
                        backgroundColor: "#fff", color: "#1A56DB", cursor: "pointer", fontWeight: 600,
                    }}>View More Activities</button>
                </div>
            )}

            {/* Bottom CTA Banner */}
            <div style={{
                background: "linear-gradient(135deg, #1A56DB 0%, #003366 100%)",
                borderRadius: "12px", padding: "24px 32px", color: "#fff",
            }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, margin: "0 0 8px" }}>Find De-addiction Facilities Near You</h3>
                <p style={{ fontSize: "13px", opacity: 0.9, margin: "0 0 16px" }}>
                    Locate verified Integrated Rehabilitation Centres (IRCAs), Community Based Peer-Led Intervention, and Addiction Treatment Facilities (ATFs) near you.
                </p>
                <Link to="/facilities">
                    <button style={{
                        padding: "10px 20px", borderRadius: "6px", border: "none",
                        backgroundColor: "#dc2626", color: "#fff", fontWeight: 600, fontSize: "13px", cursor: "pointer",
                    }}>📍 View Facility Map</button>
                </Link>
            </div>
        </div>
    );
};

export default ActivitySnapshot;
