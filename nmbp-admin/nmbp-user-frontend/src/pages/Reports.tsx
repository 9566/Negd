import React, { useState } from "react";

const mockReports = [
    { id: 1, title: "Monthly Activity Report - Jan 2026", date: "31/01/2026", type: "Monthly", state: "All States", status: "Published" },
    { id: 2, title: "Pledge Analysis - Q4 2025", date: "15/12/2025", type: "Quarterly", state: "All States", status: "Published" },
    { id: 3, title: "District Performance - Feb 2026", date: "01/02/2026", type: "Monthly", state: "Uttar Pradesh", status: "Draft" },
    { id: 4, title: "Bureau Assessment - 2025", date: "01/01/2026", type: "Annual", state: "All States", status: "Published" },
    { id: 5, title: "Facilities Report - Feb 2026", date: "10/02/2026", type: "Monthly", state: "Maharashtra", status: "Pending" },
];

const Reports: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");

    const filtered = mockReports.filter(r =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const statusBadge = (s: string) => {
        const cls = s === "Published" ? "badge-success" : s === "Draft" ? "badge-warning" : "badge-info";
        return <span className={`badge ${cls}`}>{s}</span>;
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="heading-page">Reports</h1>
                <button className="btn btn-primary">📥 Export</button>
            </div>

            {/* Filter Bar */}
            <div className="card" style={{ marginBottom: "16px" }}>
                <div className="card-body" style={{ display: "flex", gap: "16px", alignItems: "flex-end", flexWrap: "wrap" }}>
                    <div className="form-group" style={{ margin: 0, flex: 1, minWidth: "200px" }}>
                        <label className="form-label">From Date</label>
                        <input type="date" className="form-input" value={dateFrom} onChange={e => setDateFrom(e.target.value)} />
                    </div>
                    <div className="form-group" style={{ margin: 0, flex: 1, minWidth: "200px" }}>
                        <label className="form-label">To Date</label>
                        <input type="date" className="form-input" value={dateTo} onChange={e => setDateTo(e.target.value)} />
                    </div>
                    <div className="form-group" style={{ margin: 0, flex: 1, minWidth: "200px" }}>
                        <label className="form-label">Report Type</label>
                        <select className="form-select">
                            <option value="">All Types</option>
                            <option>Monthly</option>
                            <option>Quarterly</option>
                            <option>Annual</option>
                        </select>
                    </div>
                    <button className="btn btn-primary btn-sm">Apply Filters</button>
                </div>
            </div>

            <div className="table-container">
                <div className="table-header">
                    <h2 className="heading-card">All Reports</h2>
                    <div className="search-bar">
                        <span className="search-icon">🔍</span>
                        <input placeholder="Search reports..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className="table-scroll">
                    <table className="table-styled">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Report Title</th>
                                <th>Date</th>
                                <th>Type</th>
                                <th>State</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(r => (
                                <tr key={r.id}>
                                    <td>{r.id}</td>
                                    <td style={{ fontWeight: 500 }}>{r.title}</td>
                                    <td>{r.date}</td>
                                    <td>{r.type}</td>
                                    <td>{r.state}</td>
                                    <td>{statusBadge(r.status)}</td>
                                    <td><button className="btn btn-outline btn-sm">View</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginRight: "auto" }}>
                        Showing 1-{filtered.length} of {filtered.length}
                    </span>
                    <button className="pagination-btn">‹</button>
                    <button className="pagination-btn active">1</button>
                    <button className="pagination-btn">›</button>
                </div>
            </div>
        </div>
    );
};

export default Reports;
