import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, type Role } from "../context/AuthContext";

interface LoginFormProps {
    title: string;
    role: Role;
    extraFields?: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({ title, role, extraFields }) => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(role);
        navigate("/dashboard");
    };

    return (
        <div className="login-bg">
            <div className="login-card">
                {/* Logo */}
                <div style={{ textAlign: "center", marginBottom: "24px" }}>
                    <div style={{ fontSize: "40px", marginBottom: "8px" }}>🏛️</div>
                    <h1 style={{ fontSize: "22px", fontWeight: 700, color: "var(--color-text-primary)", margin: 0 }}>
                        {title}
                    </h1>
                    <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "4px" }}>
                        NMBA Admin Portal
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Extra fields (dropdowns) */}
                    {extraFields}

                    {/* Username */}
                    <div className="form-group">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="btn btn-primary btn-lg btn-full" style={{ marginTop: "8px" }}>
                        Login
                    </button>

                    {/* Forgot password */}
                    <div style={{ textAlign: "center", marginTop: "16px" }}>
                        <a href="#" style={{ fontSize: "13px", color: "var(--color-primary-light)", textDecoration: "none" }}>
                            Forgot Password?
                        </a>
                    </div>

                    {/* Back to selection */}
                    <div style={{ textAlign: "center", marginTop: "12px" }}>
                        <button
                            type="button"
                            onClick={() => navigate("/login")}
                            style={{
                                background: "none", border: "none", color: "var(--color-text-secondary)",
                                fontSize: "13px", cursor: "pointer", fontFamily: "var(--font-family)"
                            }}
                        >
                            ← Back to Login Selection
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
