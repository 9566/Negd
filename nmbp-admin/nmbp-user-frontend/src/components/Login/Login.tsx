import React from "react";
import { useNavigate } from "react-router-dom";

const loginTypes = [
    { role: "central", label: "Central Login", icon: "🏛️", desc: "Access national-level administration" },
    { role: "state", label: "State Login", icon: "🗺️", desc: "Manage state-level operations" },
    { role: "district", label: "District Login", icon: "📋", desc: "Handle district-level activities" },
];

const Login: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="login-bg">
            <div style={{ textAlign: "center", width: "100%", padding: "0 24px" }}>
                {/* Logo & Title */}
                <div style={{ marginBottom: "40px", color: "#fff" }}>
                    <div style={{ fontSize: "48px", marginBottom: "12px" }}>🏛️</div>
                    <h1 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "6px", fontFamily: "var(--font-family)" }}>
                        NMBA Portal
                    </h1>
                    <p style={{ fontSize: "14px", opacity: 0.8 }}>
                        Nasha Mukt Bharat Abhiyaan — Admin Login
                    </p>
                </div>

                {/* Title */}
                <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#fff", marginBottom: "32px" }}>
                    Select Login Type
                </h2>

                {/* Login Type Cards */}
                <div className="login-select-grid" style={{ margin: "0 auto" }}>
                    {loginTypes.map((lt) => (
                        <div
                            key={lt.role}
                            className="login-select-card"
                            onClick={() => navigate(`/login/${lt.role}`)}
                        >
                            <span className="card-icon">{lt.icon}</span>
                            <span className="card-label">{lt.label}</span>
                            <span style={{ fontSize: "12px", color: "var(--color-text-secondary)", textAlign: "center", padding: "0 12px" }}>
                                {lt.desc}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Login;
