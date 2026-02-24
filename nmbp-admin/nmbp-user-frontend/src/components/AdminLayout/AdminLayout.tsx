import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
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
        {
          label: "Important Documents",
          path: "/important-documents",
          icon: "📂",
        },
        { label: "Feedback", path: "/feedback", icon: "💬" },
        { label: "Reports", path: "/reports", icon: "📈" },
      ];
    }
    // central
    return [
      ...base,
      { label: "All Activities", path: "/activities", icon: "📋" },
      {
        label: "State/UT/District",
        path: "/state-ut-district-activity",
        icon: "🗺️",
      },
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="admin-header">
        <div className="header-left">
          <div className="header-logo">🏛️</div>
          <div>
            <div className="flex items-center gap-1">
              <span className="bg-red-500 text-xs px-1 rounded font-semibold">
                BETA
              </span>
              <span className="header-subtitle">Government of India</span>
            </div>
            <div className="header-title">
              Ministry of Social Justice & Empowerment
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="text-right">
            <div className="header-user-name">{user?.name}</div>
            <div className="header-user-role">{roleLabel[role]}</div>
          </div>
          <div className="header-avatar">
            {user?.name
              ?.split(" ")
              .map((w) => w[0])
              .join("") || "U"}
          </div>
          <button
            className="header-logout-btn"
            onClick={() => setShowLogoutModal(true)}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Content - full width */}
      <main className="page-content w-full max-w-7xl mx-auto">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="admin-footer">
        © 2025 - Copyright UX4G. All rights reserved. Powered by NeGD | MeitY
        &nbsp;&nbsp; Terms & Conditions &nbsp;&nbsp; Privacy Policy
      </footer>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowLogoutModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-3 text-gray-900">
              Confirm Logout
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to logout? You will need to login again to
              access the portal.
            </p>
            <div className="modal-actions">
              <button
                className="btn btn-secondary"
                onClick={() => setShowLogoutModal(false)}
              >
                Cancel
              </button>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
