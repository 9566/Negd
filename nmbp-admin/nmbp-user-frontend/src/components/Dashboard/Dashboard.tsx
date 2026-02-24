import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

/* ---------- mock data ---------- */
const centralStats = [
  { label: "Total Activities", value: "3,380", icon: "📋", bg: "#eef2ff" },
  { label: "Total Pledges", value: "85,400", icon: "📝", bg: "#D1FAE5" },
  { label: "States Active", value: "32", icon: "🗺️", bg: "#f3e8ff" },
  { label: "Facilities Listed", value: "500", icon: "🏥", bg: "#fffbeb" },
];
const stateStats = [
  { label: "District Activities", value: "710", icon: "📋", bg: "#DBEAFE" },
  { label: "Districts Covered", value: "30", icon: "📍", bg: "#E9D5FF" },
  { label: "People Reached", value: "43,833", icon: "👥", bg: "#FEF3C7" },
  { label: "Pending Reviews", value: "12", icon: "⏳", bg: "#FEE2E2" },
];
const districtStats = [
  { label: "Activities Completed", value: "252", icon: "✅", bg: "#D1FAE5" },
  { label: "Locations Covered", value: "110", icon: "📍", bg: "#f3e8ff" },
  { label: "People Reached", value: "13,723", icon: "👥", bg: "#fffbeb" },
  { label: "Pending Tasks", value: "5", icon: "📌", bg: "#fef2f2" },
];

const recentActivities = [
  {
    id: 1,
    activity: "Drawing competitions",
    date: "11/02/2026",
    district: "Amroha",
    participants: 80,
    status: "Completed",
  },
  {
    id: 2,
    activity: "Slogan Writing Competition",
    date: "09/12/2025",
    district: "Ayodhya",
    participants: 532,
    status: "Completed",
  },
  {
    id: 3,
    activity: "Rangoli Making Competition",
    date: "26/01/2026",
    district: "Auraiya",
    participants: 150,
    status: "In Progress",
  },
  {
    id: 4,
    activity: "Nukad Natak",
    date: "01/01/2026",
    district: "Azamgarh",
    participants: 40,
    status: "Pending",
  },
  {
    id: 5,
    activity: "Marathon Against Drugs",
    date: "15/01/2026",
    district: "Lucknow",
    participants: 320,
    status: "Completed",
  },
];

const stateTable = [
  {
    state: "Uttar Pradesh",
    activities: 450,
    participants: 12000,
    status: "Active",
  },
  {
    state: "Madhya Pradesh",
    activities: 320,
    participants: 8500,
    status: "Active",
  },
  { state: "Rajasthan", activities: 280, participants: 7200, status: "Active" },
  { state: "Bihar", activities: 250, participants: 6800, status: "Active" },
  {
    state: "Maharashtra",
    activities: 230,
    participants: 6100,
    status: "Active",
  },
];

const districtTable = [
  { district: "Amroha", activities: 45, participants: 1200, status: "Active" },
  { district: "Ayodhya", activities: 38, participants: 980, status: "Active" },
  { district: "Auraiya", activities: 32, participants: 850, status: "Active" },
  {
    district: "Azamgarh",
    activities: 28,
    participants: 720,
    status: "Inactive",
  },
];

/* ---------- component ---------- */
const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const role = user?.role || "district";
  const [searchTerm, setSearchTerm] = useState("");

  const stats =
    role === "central"
      ? centralStats
      : role === "state"
        ? stateStats
        : districtStats;

  const statusBadge = (status: string) => {
    const cls =
      status === "Completed"
        ? "badge-success"
        : status === "In Progress"
          ? "badge-warning"
          : status === "Active"
            ? "badge-info"
            : "badge-danger";
    return <span className={`badge ${cls}`}>{status}</span>;
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div>
          <h1 className="heading-page">Dashboard</h1>
          <p className="text-muted mt-1">Last updated: 27 Jan 2026, 03:05 pm</p>
        </div>
        {role === "district" && (
          <button
            className="btn btn-primary"
            onClick={() => navigate("/create-activity")}
          >
            + Create Activity
          </button>
        )}
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-value">{s.value}</div>
            </div>
            <div className={`stat-icon ${s.bgClass}`}>{s.icon}</div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="table-container">
        <div className="table-header">
          <h2 className="heading-card">
            {role === "central"
              ? "State-wise Summary"
              : role === "state"
                ? "District-wise Summary"
                : "Recent Activities"}
          </h2>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="table-scroll">
          {role === "central" && (
            <table className="table-styled">
              <thead>
                <tr>
                  <th>State</th>
                  <th>Activities</th>
                  <th>Participants</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {stateTable
                  .filter((r) =>
                    r.state.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((r, i) => (
                    <tr key={i}>
                      <td className="font-medium">{r.state}</td>
                      <td>{r.activities}</td>
                      <td>{r.participants.toLocaleString()}</td>
                      <td>{statusBadge(r.status)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}

          {role === "state" && (
            <table className="table-styled">
              <thead>
                <tr>
                  <th>District</th>
                  <th>Activities</th>
                  <th>Participants</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {districtTable
                  .filter((r) =>
                    r.district.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((r, i) => (
                    <tr key={i}>
                      <td className="font-medium">{r.district}</td>
                      <td>{r.activities}</td>
                      <td>{r.participants}</td>
                      <td>{statusBadge(r.status)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}

          {role === "district" && (
            <table className="table-styled">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th>Date</th>
                  <th>District</th>
                  <th>Participants</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentActivities
                  .filter((r) =>
                    r.activity.toLowerCase().includes(searchTerm.toLowerCase()),
                  )
                  .map((r) => (
                    <tr key={r.id}>
                      <td className="font-medium">{r.activity}</td>
                      <td>{r.date}</td>
                      <td>{r.district}</td>
                      <td>{r.participants}</td>
                      <td>{statusBadge(r.status)}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <span className="text-sm text-gray-600 mr-auto">
            Showing 1-5 of 25 results
          </span>
          <button className="pagination-btn">‹</button>
          <button className="pagination-btn active">1</button>
          <button className="pagination-btn">2</button>
          <button className="pagination-btn">3</button>
          <button className="pagination-btn">›</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
