import React, { useState } from "react";
import { Button } from "@mantine/core";

type Step = "oath" | "form" | "otp" | "success";
type Lang = "en" | "hi";

const oathTextEn = `Dear Friends,

Youth is the energy of any nation and the power of youth has an important contribution in the development of society and country. Therefore, it is very important that maximum number of youth join the drug free India campaign. Accepting this challenge of the country, today we unite under the Nasha Mukt Bharat Abhiyan and take a pledge that not only the community, family, friends, but also ourselves will be drug free because change should start with ourselves. So let us all together take a firm decision to make our district/ state……./name/ drug free. I pledge that I will do everything possible to the best of my ability to make my country drug-free.

Jai Hind!`;

const oathTextHi = `प्रिय साथियों,

युवा किसी भी राष्ट्र की ऊर्जा है और युवाओं की शक्ति का समाज और देश के विकास में महत्वपूर्ण योगदान है। अतः यह अति आवश्यक है कि अधिकतम संख्या में युवा नशा मुक्ति अभियान में शामिल हों। देश की इस चुनौती को स्वीकार करते हुए आज हम सब नशामुक्त भारत अभियान के अंतर्गत एक हुए शपथ लेते हैं कि न केवल समुदाय, परिवार, मित्रों, बल्कि हमें स्वयं भी नशा मुक्त करना होगा। आइए हम मिलकर अपने जिले/राज्य……/नाम/ को नशा मुक्त बनाने के लिए दृढ़ संकल्प लें। मैं शपथ लेती/लेता हूँ कि अपने देश को नशा मुक्त बनाने के लिए अपनी शक्ति के अनुसार हर संभव प्रयास करूँगी/करूँगा।

जय हिन्द!`;

const HERO_IMAGE = "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&h=400&fit=crop";

const Pledge: React.FC = () => {
    const [step, setStep] = useState<Step>("oath");
    const [lang, setLang] = useState<Lang>("en");

    return (
        <div style={{ padding: "0" }}>
            {/* Oath Step */}
            {step === "oath" && (
                <div>
                    {/* Hero Image */}
                    <div style={{
                        width: "100%", height: "320px",
                        background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 30%, #f4a300 70%, #ff8c00 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        position: "relative", overflow: "hidden",
                    }}>
                        <div style={{ position: "absolute", top: "20px", right: "40px", fontSize: "60px", opacity: 0.3 }}>✦</div>
                        <div style={{ position: "absolute", top: "60px", right: "80px", fontSize: "30px", opacity: 0.2 }}>✦</div>
                        <div style={{ position: "absolute", top: "40px", right: "140px", fontSize: "20px", opacity: 0.2 }}>✦</div>
                        <div style={{ textAlign: "center", color: "#fff", zIndex: 1 }}>
                            <div style={{ fontSize: "120px", marginBottom: "0", lineHeight: 1 }}>✊</div>
                            <div style={{ fontSize: "48px", fontWeight: 700 }}>🇮🇳</div>
                        </div>
                    </div>

                    {/* Pledge Content */}
                    <div style={{ padding: "0 32px 32px 32px", marginTop: "-20px", position: "relative" }}>
                        {/* Badge */}
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            backgroundColor: "#057A55", color: "#fff", padding: "6px 14px",
                            borderRadius: "20px", fontSize: "13px", fontWeight: 600, marginBottom: "12px",
                        }}>
                            <span style={{ fontSize: "8px" }}>●</span> 500 Pledges Taken Today
                        </div>

                        {/* Title + Language Toggle */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                            <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: 0 }}>
                                {lang === "en" ? "Nasha Mukt Bharat Abhiyaan Pledge" : "नशा मुक्त भारत अभियान प्रतिज्ञा"}
                            </h1>
                            <div style={{ display: "flex", gap: "4px" }}>
                                <button onClick={() => setLang("en")} style={{
                                    padding: "6px 16px", border: "1px solid #E5E7EB", borderRadius: "4px",
                                    fontSize: "13px", cursor: "pointer", fontWeight: lang === "en" ? 600 : 400,
                                    backgroundColor: lang === "en" ? "#1A56DB" : "#fff",
                                    color: lang === "en" ? "#fff" : "#374151",
                                }}>English</button>
                                <button onClick={() => setLang("hi")} style={{
                                    padding: "6px 16px", border: "1px solid #E5E7EB", borderRadius: "4px",
                                    fontSize: "13px", cursor: "pointer", fontWeight: lang === "hi" ? 600 : 400,
                                    backgroundColor: lang === "hi" ? "#1A56DB" : "#fff",
                                    color: lang === "hi" ? "#fff" : "#374151",
                                }}>हिंदी</button>
                            </div>
                        </div>

                        {/* Oath Card */}
                        <div style={{
                            border: "1px solid #E5E7EB", borderRadius: "8px", padding: "24px",
                            backgroundColor: "#fff", marginBottom: "24px",
                        }}>
                            <p style={{
                                fontSize: "14px", color: "#374151", lineHeight: 1.8,
                                whiteSpace: "pre-line", margin: 0, fontStyle: "italic",
                            }}>
                                {lang === "en" ? oathTextEn : oathTextHi}
                            </p>
                        </div>

                        {/* Take Pledge Button */}
                        <div style={{ textAlign: "center" }}>
                            <Button color="#057A55" size="lg" radius="md" onClick={() => setStep("form")}
                                rightSection={<span>→</span>}
                                styles={{ root: { paddingLeft: "40px", paddingRight: "40px" } }}>
                                {lang === "en" ? "I Take this Pledge" : "मैं शपथ लेता हूँ"}
                            </Button>
                        </div>

                        {/* Download Certificate Link */}
                        <p style={{ textAlign: "center", fontSize: "13px", color: "#6B7280", marginTop: "16px" }}>
                            Taken the pledge before? <a href="#" style={{ color: "#1A56DB", fontWeight: 600, textDecoration: "none" }}>Download your Certificate directly.</a>
                        </p>
                    </div>
                </div>
            )}

            {/* Form Step */}
            {step === "form" && (
                <div>
                    {/* Same hero */}
                    <div style={{
                        width: "100%", height: "280px",
                        background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 30%, #f4a300 70%, #ff8c00 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        position: "relative", overflow: "hidden",
                    }}>
                        <div style={{ textAlign: "center", color: "#fff", zIndex: 1 }}>
                            <div style={{ fontSize: "100px", marginBottom: "0", lineHeight: 1 }}>✊</div>
                            <div style={{ fontSize: "40px", fontWeight: 700 }}>🇮🇳</div>
                        </div>
                    </div>

                    <div style={{ padding: "0 32px 32px 32px", marginTop: "-16px", position: "relative" }}>
                        {/* Badge */}
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            backgroundColor: "#057A55", color: "#fff", padding: "6px 14px",
                            borderRadius: "20px", fontSize: "13px", fontWeight: 600, marginBottom: "8px",
                        }}>
                            <span style={{ fontSize: "8px" }}>●</span> 500 Pledges Taken Today
                        </div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: "0 0 24px 0" }}>Nasha Mukt Bharat Abhiyaan Pledge</h2>

                        {/* Form */}
                        <div style={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #E5E7EB", padding: "24px" }}>
                            <h3 style={{ fontSize: "12px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: "20px" }}>GENERATE CERTIFICATE</h3>

                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>Full Name *</label>
                                    <input type="text" placeholder="Name as per records" style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>Age *</label>
                                    <input type="text" placeholder="Years" style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>Gender *</label>
                                    <select style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", backgroundColor: "#fff", boxSizing: "border-box" }}>
                                        <option>Select Gender</option><option>Male</option><option>Female</option><option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>Pincode *</label>
                                    <input type="text" placeholder="Eg: 110001" style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }} />
                                </div>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>District *</label>
                                    <select style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", backgroundColor: "#fff", boxSizing: "border-box" }}>
                                        <option>Select District</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>State *</label>
                                    <select style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", backgroundColor: "#fff", boxSizing: "border-box" }}>
                                        <option>Select State</option>
                                    </select>
                                </div>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>Mobile Number *</label>
                                    <div style={{ display: "flex", gap: "4px" }}>
                                        <span style={{ padding: "10px 8px", border: "1px solid #E5E7EB", borderRadius: "6px 0 0 6px", fontSize: "14px", backgroundColor: "#F9FAFB", color: "#6B7280" }}>+91</span>
                                        <input type="text" placeholder="10 digit mobile number" style={{ flex: 1, padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "0 6px 6px 0", fontSize: "14px", boxSizing: "border-box" }} />
                                    </div>
                                    <p style={{ fontSize: "11px", color: "#9CA3AF", margin: "4px 0 0" }}>This number will be used for verification in the next step.</p>
                                </div>
                                <div>
                                    <label style={{ fontSize: "13px", fontWeight: 600, color: "#374151", display: "block", marginBottom: "4px" }}>Email Address</label>
                                    <input type="email" placeholder="e.g. name@example.com" style={{ width: "100%", padding: "10px 14px", border: "1px solid #E5E7EB", borderRadius: "6px", fontSize: "14px", boxSizing: "border-box" }} />
                                </div>
                            </div>

                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "24px" }}>
                                <Button variant="outline" color="gray" onClick={() => setStep("oath")}>← Back</Button>
                                <Button color="#057A55" onClick={() => setStep("otp")}>Send OTP & Verify →</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* OTP Step */}
            {step === "otp" && (
                <div>
                    {/* Hero */}
                    <div style={{
                        width: "100%", height: "280px",
                        background: "linear-gradient(135deg, #1e3a5f 0%, #2d6a9f 30%, #f4a300 70%, #ff8c00 100%)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                        <div style={{ textAlign: "center", color: "#fff" }}>
                            <div style={{ fontSize: "100px", lineHeight: 1 }}>✊</div>
                            <div style={{ fontSize: "40px", fontWeight: 700 }}>🇮🇳</div>
                        </div>
                    </div>

                    <div style={{ padding: "0 32px 32px 32px", marginTop: "-16px", position: "relative" }}>
                        <div style={{
                            display: "inline-flex", alignItems: "center", gap: "6px",
                            backgroundColor: "#057A55", color: "#fff", padding: "6px 14px",
                            borderRadius: "20px", fontSize: "13px", fontWeight: 600, marginBottom: "8px",
                        }}>
                            <span style={{ fontSize: "8px" }}>●</span> 500 Pledges Taken Today
                        </div>
                        <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: "0 0 24px 0" }}>Nasha Mukt Bharat Abhiyaan Pledge</h2>

                        <div style={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #E5E7EB", padding: "40px", textAlign: "center", maxWidth: "500px" }}>
                            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>Verify Mobile</h3>
                            <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "24px" }}>
                                Enter the 6-digit OTP sent to <strong>9912341634</strong> ✏️
                            </p>
                            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginBottom: "16px" }}>
                                {[0, 1, 2, 3, 4, 5].map(i => (
                                    <input key={i} type="text" maxLength={1} style={{
                                        width: "48px", height: "48px", textAlign: "center", fontSize: "20px",
                                        border: "1px solid #E5E7EB", borderRadius: "8px", boxSizing: "border-box",
                                    }} />
                                ))}
                            </div>
                            <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "24px" }}>Resend OTP in <strong>0:44</strong></p>

                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Button variant="outline" color="gray" onClick={() => setStep("form")}>← Back</Button>
                                <Button color="#057A55" onClick={() => setStep("success")}>Verify & Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Step */}
            {step === "success" && (
                <div style={{ padding: "40px 32px", textAlign: "center" }}>
                    {/* Check icon */}
                    <div style={{
                        width: "64px", height: "64px", borderRadius: "50%", backgroundColor: "#057A55",
                        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px",
                    }}>
                        <span style={{ color: "#fff", fontSize: "28px" }}>✓</span>
                    </div>

                    <h2 style={{ fontSize: "24px", fontWeight: 700, color: "#111827", marginBottom: "8px" }}>Pledge Successfully Recorded!</h2>
                    <p style={{ fontSize: "14px", color: "#6B7280", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
                        Thank you for Thank you for your commitment to a Drug-Free India and taking the Nasha Mukt Bharat Abhiyaan Pledge. Your certificate has been generated.
                    </p>

                    {/* Certificate Preview */}
                    <div style={{
                        border: "2px solid #057A55", borderRadius: "12px", padding: "32px",
                        maxWidth: "500px", margin: "0 auto 24px", backgroundColor: "#fff",
                        background: "linear-gradient(to bottom, #fff 0%, #f0fff4 100%)",
                    }}>
                        <div style={{ display: "flex", justifyContent: "center", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
                            <span style={{ fontSize: "28px" }}>🏛️</span>
                            <div>
                                <div style={{ fontSize: "10px", fontWeight: 700, color: "#6B7280", textTransform: "uppercase" }}>Social Justice and Empowerment</div>
                                <div style={{ fontSize: "10px", color: "#6B7280" }}>NASHA MUKT BHARAT ABHIYAN</div>
                            </div>
                        </div>
                        <div style={{ marginBottom: "12px" }}>
                            <span style={{ backgroundColor: "#e74c3c", color: "#fff", padding: "2px 8px", borderRadius: "3px", fontSize: "11px", fontWeight: 700 }}>Nasha</span>
                            <span style={{ backgroundColor: "#f59e0b", color: "#fff", padding: "2px 8px", borderRadius: "3px", fontSize: "11px", fontWeight: 700, marginLeft: "2px" }}>Mukt</span>
                            <span style={{ fontSize: "14px", fontWeight: 700, color: "#111827", marginLeft: "6px" }}>Bharat Abhiyaan</span>
                        </div>
                        <p style={{ fontSize: "12px", color: "#6B7280", fontStyle: "italic", margin: "8px 0" }}>This certifies that</p>
                        <p style={{ fontSize: "22px", fontFamily: "cursive", fontWeight: 700, color: "#111827", margin: "4px 0 8px" }}>Ashish</p>
                        <p style={{ fontSize: "11px", color: "#6B7280", lineHeight: 1.6, maxWidth: "400px", margin: "0 auto 16px" }}>
                            has proudly participated in the Nasha Mukt Bharat Abhiyan pledge initiative and has committed to a Drug Free Bharat. Your dedication and commitment contribute significantly to our vision of creating a drug-free society. Thank you for being a part of this vital initiative.
                        </p>
                        <div style={{ display: "flex", justifyContent: "center", gap: "24px", fontSize: "11px", color: "#6B7280" }}>
                            <div><strong>7732471236</strong></div>
                            <div>February, 09 2026</div>
                        </div>
                    </div>

                    {/* Share */}
                    <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "8px" }}>Share your commitment</p>
                    <div style={{ display: "flex", gap: "12px", justifyContent: "center", marginBottom: "24px" }}>
                        {["📱", "f", "𝕏", "🔗", "📅"].map((icon, i) => (
                            <div key={i} style={{
                                width: "36px", height: "36px", borderRadius: "50%", border: "1px solid #E5E7EB",
                                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: "14px",
                            }}>{icon}</div>
                        ))}
                    </div>

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                            <span style={{ fontSize: "18px", cursor: "pointer" }}>🖨️</span>
                        </div>
                        <Button variant="outline" color="#1A56DB" size="lg" leftSection={<span>🔗</span>}>Save to DigiLocker</Button>
                        <Button color="#e74c3c" size="lg" leftSection={<span>📥</span>}>Download Certificate</Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pledge;
