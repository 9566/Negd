import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Button } from "@mantine/core";

const feedbackData = [
    { id: 1, from: "Ashok Kumar", district: "Amroha", date: "15/02/2026", subject: "Need more awareness materials", message: "We require additional posters and flyers for the upcoming awareness drive in rural areas." },
    { id: 2, from: "Rajesh Singh", district: "Ayodhya", date: "10/02/2026", subject: "Facility infrastructure issue", message: "The IRCA centre in our district needs urgent maintenance and repair work." },
    { id: 3, from: "Priya Sharma", district: "Auraiya", date: "05/02/2026", subject: "Activity coordination request", message: "Requesting coordination with neighboring districts for a joint awareness event." },
    { id: 4, from: "Vikram Patel", district: "Azamgarh", date: "01/02/2026", subject: "Budget allocation query", message: "Need clarification on budget allocation for Q1 2026 activities." },
];

const Feedback: React.FC = () => {
    const { user } = useAuth();
    const role = user?.role || "district";
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    // District: Send feedback form
    if (role === "district") {
        return (
            <div>
                <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: "0 0 20px" }}>Send Feedback</h1>

                {submitted ? (
                    <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #C6F6D5", padding: "40px", textAlign: "center" }}>
                        <div style={{ fontSize: "48px", marginBottom: "12px" }}>✅</div>
                        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#057A55", marginBottom: "8px" }}>Feedback Sent!</h2>
                        <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "16px" }}>Your feedback has been sent to the State Nodal Officer.</p>
                        <Button color="#1A56DB" variant="outline" onClick={() => { setSubmitted(false); setSubject(""); setMessage(""); }}>Send Another</Button>
                    </div>
                ) : (
                    <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "28px", maxWidth: "600px" }}>
                        <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "20px" }}>
                            Your feedback will be sent to the <strong>State Nodal Officer</strong> for your state.
                        </p>
                        <div style={{ marginBottom: "16px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Subject *</label>
                            <input value={subject} onChange={(e) => setSubject(e.target.value)}
                                placeholder="Brief subject of your feedback"
                                style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px" }} />
                        </div>
                        <div style={{ marginBottom: "20px" }}>
                            <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "6px" }}>Message *</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)}
                                placeholder="Describe your feedback or concern in detail"
                                rows={5} style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", resize: "vertical" }} />
                        </div>
                        <Button color="#057A55" size="md" onClick={() => setSubmitted(true)} disabled={!subject || !message}>
                            Send Feedback →
                        </Button>
                    </div>
                )}
            </div>
        );
    }

    // State + Central: View feedback list
    return (
        <div>
            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: "0 0 20px" }}>
                {role === "central" ? "All Feedback" : "Feedback from Districts"}
            </h1>

            <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB" }}>
                <div style={{ padding: "12px 20px", borderBottom: "1px solid #F3F4F6" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", backgroundColor: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "6px", padding: "6px 12px", width: "280px" }}>
                        <span style={{ color: "#9CA3AF" }}>🔍</span>
                        <input type="text" placeholder="Search feedback..." style={{ border: "none", background: "none", outline: "none", fontSize: "13px", width: "100%", color: "#374151" }} />
                    </div>
                </div>

                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#F9FAFB" }}>
                            {["From", "District", "Date", "Subject", ""].map(h => (
                                <th key={h} style={{ padding: "10px 20px", textAlign: "left", fontSize: "12px", fontWeight: 600, color: "#6B7280", textTransform: "uppercase" }}>{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {feedbackData.map((f) => (
                            <tr key={f.id} style={{ borderTop: "1px solid #F3F4F6" }}>
                                <td style={{ padding: "12px 20px", fontSize: "13px", color: "#111827", fontWeight: 500 }}>{f.from}</td>
                                <td style={{ padding: "12px 20px", fontSize: "13px", color: "#6B7280" }}>{f.district}</td>
                                <td style={{ padding: "12px 20px", fontSize: "13px", color: "#6B7280" }}>{f.date}</td>
                                <td style={{ padding: "12px 20px", fontSize: "13px", color: "#111827" }}>{f.subject}</td>
                                <td style={{ padding: "12px 20px" }}>
                                    <span style={{ color: "#1A56DB", fontSize: "13px", cursor: "pointer", fontWeight: 500 }}>View →</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Feedback;
