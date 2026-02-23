import React, { useState } from "react";

const helplines = [
    { name: "NMBA Helpline", number: "14446", timing: "24x7 Toll Free", type: "Toll Free" },
    { name: "National Drug De-addiction", number: "1800-11-0031", timing: "24x7 Toll Free", type: "Toll Free" },
    { name: "NIMHANS Helpline", number: "080-46110007", timing: "Mon-Sat, 9am-5pm", type: "Landline" },
];

const faqs = [
    { q: "What is Nasha Mukt Bharat Abhiyaan?", a: "NMBA is a nationwide campaign launched by the Ministry of Social Justice and Empowerment to create drug-free communities through awareness, education, and de-addiction support." },
    { q: "How can I take the pledge?", a: "Visit the E-Pledge section, read the oath, fill in your details, verify via OTP, and download your certificate." },
    { q: "Where can I find de-addiction centres near me?", a: "Use the Facilities section to search for nearby de-addiction centres, rehabilitation facilities, and counselling services." },
    { q: "How do I report drug abuse in my area?", a: "Contact the NMBA Helpline at 14446 or visit your nearest District Nodal Officer to report incidents." },
    { q: "Is the helpline service confidential?", a: "Yes, all calls to the NMBA helpline are completely confidential and handled by trained counsellors." },
];

const Help: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    return (
        <div style={{ padding: "24px" }}>
            <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>Helpline & Support</h1>
            <p style={{ fontSize: "14px", color: "#6B7280", margin: "0 0 24px" }}>Get help, find resources, and connect with support services</p>

            {/* Helpline Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "32px" }}>
                {helplines.map((h) => (
                    <div key={h.number} style={{
                        backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "20px",
                    }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div>
                                <h3 style={{ fontSize: "15px", fontWeight: 700, color: "#111827", margin: "0 0 4px" }}>{h.name}</h3>
                                <p style={{ fontSize: "12px", color: "#6B7280", margin: 0 }}>{h.timing}</p>
                            </div>
                            <span style={{
                                padding: "3px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: 600,
                                backgroundColor: "#DEF7EC", color: "#057A55",
                            }}>{h.type}</span>
                        </div>
                        <div style={{ fontSize: "22px", fontWeight: 800, color: "#1A56DB", fontFamily: "monospace", marginTop: "12px" }}>{h.number}</div>
                    </div>
                ))}
            </div>

            {/* Contact Info */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", padding: "24px", marginBottom: "32px" }}>
                <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", margin: "0 0 16px" }}>Contact Information</h2>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                        <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "4px", textTransform: "uppercase", fontWeight: 600 }}>Email</div>
                        <div style={{ fontSize: "14px", color: "#1A56DB", fontWeight: 500 }}>nmba-helpdesk@gov.in</div>
                    </div>
                    <div>
                        <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "4px", textTransform: "uppercase", fontWeight: 600 }}>Website</div>
                        <div style={{ fontSize: "14px", color: "#1A56DB", fontWeight: 500 }}>www.nmba.gov.in</div>
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                        <div style={{ fontSize: "12px", color: "#6B7280", marginBottom: "4px", textTransform: "uppercase", fontWeight: 600 }}>Address</div>
                        <div style={{ fontSize: "14px", color: "#374151" }}>Ministry of Social Justice & Empowerment, Shastri Bhawan, New Delhi - 110001</div>
                    </div>
                </div>
            </div>

            {/* FAQs */}
            <div style={{ backgroundColor: "#fff", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden" }}>
                <div style={{ padding: "20px 24px", borderBottom: "1px solid #E5E7EB" }}>
                    <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", margin: 0 }}>Frequently Asked Questions</h2>
                </div>
                {faqs.map((faq, i) => (
                    <div key={i} style={{ borderBottom: i < faqs.length - 1 ? "1px solid #F3F4F6" : "none" }}>
                        <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                            width: "100%", padding: "16px 24px", border: "none", backgroundColor: "transparent",
                            display: "flex", justifyContent: "space-between", alignItems: "center",
                            cursor: "pointer", textAlign: "left",
                        }}>
                            <span style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{faq.q}</span>
                            <span style={{ color: "#9CA3AF", fontSize: "12px" }}>{openFaq === i ? "▲" : "▼"}</span>
                        </button>
                        {openFaq === i && (
                            <div style={{ padding: "0 24px 16px", fontSize: "14px", color: "#6B7280", lineHeight: 1.6 }}>{faq.a}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Help;
