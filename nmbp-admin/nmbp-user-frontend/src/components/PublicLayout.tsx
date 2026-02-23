import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const SIDEBAR_W = 200;

const PublicLayout: React.FC = () => {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#F9FAFB", display: "flex", flexDirection: "column" }}>
            {/* Gov toolbar */}
            <div style={{ backgroundColor: "#1a1a2e", color: "#fff", fontSize: "12px", padding: "4px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span>🇮🇳</span><span>Government of India</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ cursor: "pointer" }}>Skip to Main Content</span>
                    <span style={{ cursor: "pointer", fontWeight: 600 }}>A</span>
                    <span style={{ cursor: "pointer" }}>A</span>
                    <span style={{ cursor: "pointer", fontSize: "14px", fontWeight: 700 }}>A</span>
                    <span style={{ cursor: "pointer" }}>🌗</span>
                    <span style={{ cursor: "pointer", fontWeight: 700 }}>T</span>
                    <button style={{ background: "none", border: "1px solid #fff", color: "#fff", padding: "1px 8px", fontSize: "11px", borderRadius: "3px", cursor: "pointer" }}>🌐 English ▾</button>
                </div>
            </div>

            {/* Header */}
            <header style={{ backgroundColor: "#003366", color: "#fff", padding: "10px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "36px", height: "36px", backgroundColor: "#fff", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "18px" }}>🏛️</span>
                    </div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ backgroundColor: "#e74c3c", fontSize: "9px", padding: "1px 5px", borderRadius: "2px", fontWeight: 600 }}>BETA</span>
                            <span style={{ fontSize: "11px", opacity: 0.8 }}>Government of India</span>
                        </div>
                        <div style={{ fontSize: "16px", fontWeight: 700 }}>Ministry of Social Justice & Empowerment</div>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "13px", fontWeight: 600 }}>Sachin Malhotra</div>
                        <div style={{ fontSize: "11px", opacity: 0.8 }}>sachin.malhotra@email.com</div>
                    </div>
                    <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "#057A55", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "#fff" }}>SM</div>
                </div>
            </header>

            <div style={{ display: "flex", flex: 1 }}>
                {/* Sidebar */}
                <aside style={{ width: `${SIDEBAR_W}px`, backgroundColor: "#fff", borderRight: "1px solid #E5E7EB", minHeight: "calc(100vh - 80px)", flexShrink: 0, paddingTop: "8px" }}>
                    {/* Home */}
                    <NavLink to="/" end style={() => ({
                        display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", fontSize: "14px", textDecoration: "none",
                        color: isActive("/") ? "#1A56DB" : "#374151", fontWeight: 500,
                    })}>
                        🏠 Home
                    </NavLink>

                    {/* NMBA section */}
                    <div style={{ padding: "10px 16px", fontSize: "14px", fontWeight: 600, color: "#1A56DB", display: "flex", alignItems: "center", gap: "8px" }}>
                        ⭐ NMBA <span style={{ fontSize: "10px", color: "#9CA3AF" }}>▾</span>
                    </div>

                    {/* NMBA sub-items */}
                    {[
                        { label: "Dashboard", path: "/dashboard-public" },
                        { label: "Activity Snapshot", path: "/activity-snapshot" },
                        { label: "E-Pledge", path: "/pledge" },
                        { label: "Facilities", path: "/facilities" },
                        { label: "Helpline", path: "/helpline" },
                    ].map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            style={({ isActive: active }) => ({
                                display: "block", padding: "8px 16px 8px 44px", fontSize: "13px", textDecoration: "none",
                                color: active ? "#1A56DB" : "#4B5563",
                                backgroundColor: active ? "#E1EFFE" : "transparent",
                                fontWeight: active ? 600 : 400,
                                borderLeft: active ? "3px solid #1A56DB" : "3px solid transparent",
                            })}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    {/* NOS */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", fontSize: "14px", color: "#374151", cursor: "pointer", marginTop: "8px", fontWeight: 500 }}>
                        <span>🎯 NOS</span><span style={{ fontSize: "10px", color: "#9CA3AF" }}>›</span>
                    </div>

                    {/* Label */}
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", fontSize: "14px", color: "#374151", cursor: "pointer", fontWeight: 500 }}>
                        🏷️ Label
                    </div>
                </aside>

                {/* Content */}
                <main style={{ flex: 1, padding: "0" }}>
                    <Outlet />
                </main>
            </div>

            {/* Footer */}
            <footer style={{ padding: "12px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "12px", color: "#6B7280", borderTop: "1px solid #E5E7EB", backgroundColor: "#fff" }}>
                <span>© 2025 - Copyright UX4G. All rights reserved. Powered by NeGD | MeitY Government of India|2025 UX4G</span>
                <span>
                    <a href="#" style={{ color: "#6B7280", textDecoration: "none", marginRight: "16px" }}>Terms & Conditions</a>
                    <a href="#" style={{ color: "#6B7280", textDecoration: "none" }}>Privacy Policy</a>
                </span>
            </footer>
        </div>
    );
};

export default PublicLayout;
