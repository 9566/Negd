import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLayout: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const role = user?.role || "district";

    const menuItems = (() => {
        const base = [{ label: "Dashboard", path: "/dashboard", icon: "📊" }];
        if (role === "district") {
            return [
                ...base,
                { label: "Create Activity", path: "/create-activity", icon: "➕" },
                { label: "My Activities", path: "/activities", icon: "📋" },
                { label: "Send Feedback", path: "/feedback", icon: "💬" },
                { label: "Data Entry", path: "/data-entry", icon: "📝" },
            ];
        }
        if (role === "state") {
            return [
                ...base,
                { label: "District Activities", path: "/activities", icon: "📋" },
                { label: "DNO List", path: "/dno-list", icon: "👥" },
                { label: "Important Documents", path: "/important-documents", icon: "📂" },
                { label: "Feedback", path: "/feedback", icon: "💬" },
                { label: "Reports", path: "/reports", icon: "📈" },
            ];
        }
        // central
        return [
            ...base,
            { label: "All Activities", path: "/activities", icon: "📋" },
            { label: "State/UT/District", path: "/state-ut-district-activity", icon: "🗺️" },
            { label: "Pledge Report", path: "/all-pledge-report", icon: "📝" },
            { label: "Bureau Status", path: "/bureau-status-report", icon: "📊" },
            { label: "QR Management", path: "/qr-management", icon: "📱" },
            { label: "User Management", path: "/user-management", icon: "👥" },
            { label: "Reports", path: "/reports", icon: "📈" },
            { label: "All Feedback", path: "/feedback", icon: "💬" },
        ];
    })();

    const managementItems = [
        { label: "Profile", path: "/profile", icon: "👤" },
        { label: "Notifications", path: "/notifications", icon: "🔔" },
        { label: "Settings", path: "/settings", icon: "⚙️" },
    ];

    const roleLabel: Record<string, string> = {
        central: "Central Admin",
        state: "State Nodal Officer",
        district: "District Nodal Officer",
    };

    const handleLogout = () => {
        setShowLogoutModal(false);
        logout();
        navigate("/login");
    };

    return (
        <div style={{ minHeight: "100vh", backgroundColor: "var(--color-bg)" }}>
            {/* Header */}
            <header className="admin-header">
                <div className="header-left">
                    <button className="header-toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        ☰
                    </button>
                    <div className="header-logo">🏛️</div>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ backgroundColor: "#e74c3c", fontSize: "9px", padding: "1px 5px", borderRadius: "2px", fontWeight: 600 }}>BETA</span>
                            <span className="header-subtitle">Government of India</span>
                        </div>
                        <div className="header-title">Ministry of Social Justice & Empowerment</div>
                    </div>
                </div>
                <div className="header-right">
                    <div style={{ textAlign: "right" }}>
                        <div className="header-user-name">{user?.name}</div>
                        <div className="header-user-role">{roleLabel[role]}</div>
                    </div>
                    <div className="header-avatar">
                        {user?.name?.split(" ").map(w => w[0]).join("") || "U"}
                    </div>
                    <button className="header-logout-btn" onClick={() => setShowLogoutModal(true)}>
                        Logout
                    </button>
                </div>
            </header>

            <div style={{ display: "flex" }}>
                {/* Sidebar */}
                <aside className={`admin-sidebar ${!sidebarOpen ? 'collapsed' : ''}`}>
                    <div className="sidebar-inner">
                        {/* Home */}
                        <NavLink
                            to="/"
                            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                        >
                            <span className="sidebar-icon">🏠</span> Home
                        </NavLink>

                        {/* NMBA Section */}
                        <div className="sidebar-section-label">NMBA</div>

                        {menuItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                            >
                                <span className="sidebar-icon">{item.icon}</span> {item.label}
                            </NavLink>
                        ))}

                        {/* Management Section */}
                        <div className="sidebar-section-label" style={{ marginTop: "16px" }}>Account</div>

                        {managementItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                            >
                                <span className="sidebar-icon">{item.icon}</span> {item.label}
                            </NavLink>
                        ))}
                    </div>
                </aside>

                {/* Content */}
                <main className="page-content">
                    <Outlet />
                </main>
            </div>

            {/* Footer */}
            <footer className="admin-footer">
                © 2025 - Copyright UX4G. All rights reserved. Powered by NeGD | MeitY &nbsp;&nbsp; Terms & Conditions &nbsp;&nbsp; Privacy Policy
            </footer>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="modal-overlay" onClick={() => setShowLogoutModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>Confirm Logout</h3>
                        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                            Are you sure you want to logout? You will need to login again to access the portal.
                        </p>
                        <div className="modal-actions">
                            <button className="btn btn-secondary" onClick={() => setShowLogoutModal(false)}>Cancel</button>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminLayout;
