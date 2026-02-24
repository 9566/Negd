import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";

const SIDEBAR_W = 200;

const PublicLayout: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-app-bg flex flex-col">
      {/* Gov toolbar */}
      <div className="gov-toolbar flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span>🇮🇳</span>
          <span className="hidden sm:inline">Government of India</span>
          <span className="sm:hidden">Govt of India</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="cursor-pointer hidden md:inline">
            Skip to Main Content
          </span>
          <span className="cursor-pointer font-semibold">A</span>
          <span className="cursor-pointer">A</span>
          <span className="cursor-pointer text-sm font-bold">A</span>
          <span className="cursor-pointer">🌗</span>
          <span className="cursor-pointer font-bold">T</span>
          <button className="bg-transparent border border-white text-white px-2 text-xs rounded cursor-pointer">
            🌐 English ▾
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="main-header flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="w-8 h-8 sm:w-9 sm:h-9 logo-bg rounded flex items-center justify-center">
            <span className="text-base sm:text-lg">🏛️</span>
          </div>
          <div className="flex-1 sm:flex-none">
            <div className="flex items-center gap-1 flex-wrap">
              <span className="beta-badge">BETA</span>
              <span className="gov-subtitle hidden sm:inline">
                Government of India
              </span>
            </div>
            <div className="ministry-title text-sm sm:text-base">
              Ministry of Social Justice & Empowerment
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <div className="text-right hidden sm:block">
            <div className="text-sm font-semibold">Sachin Malhotra</div>
            <div className="text-xs opacity-80">sachin.malhotra@email.com</div>
          </div>
          <div className="user-avatar">SM</div>
        </div>
      </header>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="sidebar-bg border-sidebar md:flex-shrink-0 overflow-y-auto w-full md:w-[200px] border-b md:border-b-0 md:border-r">
          <nav className="flex md:flex-col overflow-x-auto md:overflow-x-visible">
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
                className={({ isActive: active }) =>
                  `sidebar-link whitespace-nowrap ${active ? "sidebar-link-active" : "sidebar-link-inactive"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-x-hidden min-h-[400px]">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <footer className="footer-bg flex flex-col sm:flex-row justify-between items-center text-xs text-white border-t border-gray-800 gap-3 sm:gap-0">
        <span className="text-center sm:text-left">
          © 2025 - Copyright UX4G. All rights reserved. Powered by NeGD | MeitY
          Government of India|2025 UX4G
        </span>
        <span className="flex gap-4">
          <a href="#" className="footer-link">
            Terms & Conditions
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </span>
      </footer>
    </div>
  );
};

export default PublicLayout;
