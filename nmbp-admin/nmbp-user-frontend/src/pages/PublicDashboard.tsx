import React from "react";

const callStats = [
    { label: "TOTAL CALLS RECEIVED", value1: "13,189", value2: "4,30,890", color: "#e74c3c" },
    { label: "TOTAL CALLS COMPLETED", value1: "13,174", value2: "4,19,779", color: "#057A55" },
];

const stateData = [
    { sno: 1, state: "Andaman and Nicobar", assessed: 46, completed: 44 },
    { sno: 2, state: "Andhra Pradesh", assessed: 1331, completed: 1305 },
    { sno: 3, state: "Arunachal Pradesh", assessed: 118, completed: 100 },
    { sno: 4, state: "Assam", assessed: 630, completed: 605 },
    { sno: 5, state: "Bihar", assessed: 1002, completed: 867 },
    { sno: 6, state: "Chandigarh", assessed: 102, completed: 99 },
    { sno: 7, state: "Chhattisgarh", assessed: 383, completed: 381 },
    { sno: 8, state: "Delhi", assessed: 742, completed: 700 },
    { sno: 9, state: "Goa", assessed: 125, completed: 120 },
    { sno: 10, state: "Gujarat", assessed: 2036, completed: 1458 },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const PublicDashboard: React.FC = () => {
    return (
        <div style={{ padding: "24px" }}>
            {/* Confidential Support Banner */}
            <div style={{
                background: "linear-gradient(135deg, #057A55 0%, #065f46 100%)",
                borderRadius: "12px", padding: "20px 28px", color: "#fff",
                display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px",
            }}>
                <div>
                    <h2 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 4px" }}>Confidential Support is Available</h2>
                    <p style={{ fontSize: "13px", opacity: 0.9, margin: 0 }}>
                        If you or someone you know is struggling with substance use, trained counsellors are available for confidential support, 24x7 Toll Free.
                    </p>
                </div>
                <div style={{
                    backgroundColor: "#fff", color: "#057A55", borderRadius: "40px",
                    padding: "10px 24px", fontWeight: 800, fontSize: "22px",
                    display: "flex", alignItems: "center", gap: "8px", whiteSpace: "nowrap",
                }}>
                    📞 14446
                </div>
            </div>

            {/* Stats Cards + Charts */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
                {callStats.map((stat, idx) => (
                    <div key={idx} style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "20px" }}>
                        <div style={{ fontSize: "11px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "12px" }}>{stat.label}</div>
                        <div style={{ display: "flex", gap: "24px", marginBottom: "16px" }}>
                            <div>
                                <div style={{ fontSize: "28px", fontWeight: 800, color: stat.color }}>{stat.value1}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "28px", fontWeight: 800, color: stat.color }}>{stat.value2}</div>
                            </div>
                        </div>
                        {/* Chart placeholder */}
                        <div style={{ height: "120px", position: "relative", borderBottom: "1px solid #F3F4F6" }}>
                            <svg width="100%" height="120" viewBox="0 0 400 120" fill="none">
                                <path d={idx === 0 ? "M0,80 C50,60 100,90 150,50 C200,10 250,70 300,40 C350,60 400,20 400,30" : "M0,90 C50,70 100,80 150,40 C200,20 250,60 300,30 C350,50 400,25 400,35"} stroke={stat.color} strokeWidth="2" fill="none" />
                                <path d={idx === 0 ? "M0,80 C50,60 100,90 150,50 C200,10 250,70 300,40 C350,60 400,20 400,30 L400,120 L0,120Z" : "M0,90 C50,70 100,80 150,40 C200,20 250,60 300,30 C350,50 400,25 400,35 L400,120 L0,120Z"} fill={stat.color} fillOpacity="0.1" />
                            </svg>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#9CA3AF", marginTop: "4px" }}>
                            {months.map(m => <span key={m}>{m}</span>)}
                        </div>
                    </div>
                ))}
            </div>

            {/* All India States Table + Call Category Chart */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "24px" }}>
                {/* States Table */}
                <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden" }}>
                    <div style={{ padding: "16px 20px", borderBottom: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>All India States</h3>
                        <div style={{ display: "flex", gap: "4px" }}>
                            {["Day", "Last 7 days", "MTD", "YTD"].map(f => (
                                <button key={f} style={{
                                    padding: "4px 10px", borderRadius: "4px", border: "1px solid #E5E7EB", fontSize: "11px",
                                    cursor: "pointer", backgroundColor: f === "YTD" ? "#1A56DB" : "#fff",
                                    color: f === "YTD" ? "#fff" : "#6B7280", fontWeight: f === "YTD" ? 600 : 400,
                                }}>{f}</button>
                            ))}
                        </div>
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr style={{ backgroundColor: "#F9FAFB" }}>
                                <th style={{ padding: "10px 16px", fontSize: "11px", fontWeight: 600, color: "#6B7280", textAlign: "left" }}>S.No</th>
                                <th style={{ padding: "10px 16px", fontSize: "11px", fontWeight: 600, color: "#6B7280", textAlign: "left" }}>State</th>
                                <th style={{ padding: "10px 16px", fontSize: "11px", fontWeight: 600, color: "#6B7280", textAlign: "right" }}>Assessed</th>
                                <th style={{ padding: "10px 16px", fontSize: "11px", fontWeight: 600, color: "#6B7280", textAlign: "right" }}>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stateData.map(row => (
                                <tr key={row.sno} style={{ borderTop: "1px solid #F3F4F6" }}>
                                    <td style={{ padding: "10px 16px", fontSize: "13px", color: "#6B7280" }}>{row.sno}</td>
                                    <td style={{ padding: "10px 16px", fontSize: "13px", color: "#111827", fontWeight: 500 }}>{row.state}</td>
                                    <td style={{ padding: "10px 16px", fontSize: "13px", color: "#111827", textAlign: "right" }}>{row.assessed.toLocaleString()}</td>
                                    <td style={{ padding: "10px 16px", fontSize: "13px", color: "#111827", textAlign: "right" }}>{row.completed.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ padding: "12px 16px", borderTop: "1px solid #E5E7EB", fontSize: "12px", color: "#1A56DB", cursor: "pointer", fontWeight: 500 }}>
                        Showing 10 of 36 states →
                    </div>
                </div>

                {/* Call Category Stats Chart */}
                <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                        <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: 0 }}>Call Category Stats</h3>
                        <span style={{ fontSize: "11px", color: "#6B7280", padding: "4px 10px", border: "1px solid #E5E7EB", borderRadius: "4px" }}>₹ 19,840</span>
                    </div>
                    {/* Stacked bar chart */}
                    <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "200px", paddingBottom: "4px" }}>
                        {months.slice(0, 8).map((m, i) => {
                            const heights = [
                                [40, 30, 25, 20, 15],
                                [50, 25, 30, 15, 20],
                                [35, 35, 20, 25, 10],
                                [60, 20, 25, 15, 25],
                                [45, 30, 20, 20, 15],
                                [55, 25, 30, 10, 20],
                                [40, 35, 25, 20, 15],
                                [50, 30, 20, 25, 10],
                            ];
                            const colors = ["#057A55", "#f59e0b", "#e74c3c", "#1A56DB", "#9CA3AF"];
                            return (
                                <div key={m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                                        {heights[i].map((h, j) => (
                                            <div key={j} style={{ height: `${h}%`, backgroundColor: colors[j], minHeight: `${h * 1.5}px`, borderRadius: j === 0 ? "4px 4px 0 0" : j === heights[i].length - 1 ? "0 0 4px 4px" : "0" }} />
                                        ))}
                                    </div>
                                    <span style={{ fontSize: "10px", color: "#9CA3AF", marginTop: "4px" }}>{m}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px", fontSize: "11px" }}>
                        {[
                            { label: "Drug Abuse", color: "#057A55" },
                            { label: "Alcohol", color: "#f59e0b" },
                            { label: "In-Complete", color: "#e74c3c" },
                            { label: "Follow up", color: "#1A56DB" },
                            { label: "Other", color: "#9CA3AF" },
                        ].map(l => (
                            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                                <div style={{ width: "8px", height: "8px", borderRadius: "2px", backgroundColor: l.color }} />
                                <span style={{ color: "#6B7280" }}>{l.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Banner */}
            <div style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                borderRadius: "12px", padding: "24px 32px", color: "#fff", textAlign: "center",
            }}>
                <h3 style={{ fontSize: "20px", fontWeight: 700, margin: "0 0 8px" }}>Combat Drug Crime: Report and Seek Help</h3>
                <p style={{ fontSize: "13px", opacity: 0.9, margin: "0 0 16px" }}>
                    The NCBI/NMBA Portal is your secure platform to report drug-related issues and access crucial resources.
                </p>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                    <button style={{ padding: "10px 20px", borderRadius: "6px", border: "none", backgroundColor: "#fff", color: "#d97706", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>
                        🏛️ Proceed to NCBI-NMBA Portal
                    </button>
                    <button style={{ padding: "10px 20px", borderRadius: "6px", border: "1px solid #fff", backgroundColor: "transparent", color: "#fff", fontWeight: 600, fontSize: "13px", cursor: "pointer" }}>
                        📞 Call NCBI Helpline: 1800
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PublicDashboard;
