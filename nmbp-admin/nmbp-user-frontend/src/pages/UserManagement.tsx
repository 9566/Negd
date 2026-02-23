import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const mockUsers = [
    { id: 1, name: "Ashok Kumar", email: "ashok@gov.in", role: "District Nodal Officer", state: "Uttar Pradesh", status: "Active" },
    { id: 2, name: "Shivam Dubey", email: "shivam@gov.in", role: "State Nodal Officer", state: "Madhya Pradesh", status: "Active" },
    { id: 3, name: "Priya Sharma", email: "priya@gov.in", role: "District Nodal Officer", state: "Rajasthan", status: "Inactive" },
    { id: 4, name: "Rahul Verma", email: "rahul@gov.in", role: "State Nodal Officer", state: "Bihar", status: "Active" },
    { id: 5, name: "Neha Singh", email: "neha@gov.in", role: "District Nodal Officer", state: "Maharashtra", status: "Active" },
];

const UserManagement: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null);

    const filtered = mockUsers.filter(u =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const statusBadge = (status: string) => {
        const cls = status === "Active" ? "badge-success" : "badge-danger";
        return <span className={`badge ${cls}`}>{status}</span>;
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="heading-page">User Management</h1>
                <button className="btn btn-primary" onClick={() => navigate("/add-user")}>+ Add User</button>
            </div>

            <div className="table-container">
                <div className="table-header">
                    <h2 className="heading-card">All Users</h2>
                    <div className="search-bar">
                        <span className="search-icon">🔍</span>
                        <input placeholder="Search users..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                </div>
                <div className="table-scroll">
                    <table className="table-styled">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>State</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td style={{ fontWeight: 500 }}>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.role}</td>
                                    <td>{u.state}</td>
                                    <td>{statusBadge(u.status)}</td>
                                    <td style={{ display: "flex", gap: "8px" }}>
                                        <button className="btn btn-outline btn-sm" onClick={() => navigate(`/edit-user/${u.id}`)}>Edit</button>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => setShowDeleteModal(u.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="pagination">
                    <span style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginRight: "auto" }}>
                        Showing 1-{filtered.length} of {filtered.length} users
                    </span>
                    <button className="pagination-btn active">1</button>
                </div>
            </div>

            {/* Delete Modal */}
            {showDeleteModal && (
                <div className="modal-overlay" onClick={() => setShowDeleteModal(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3 style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>Delete User</h3>
                        <p style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}>
                            Are you sure you want to delete this user? This action cannot be undone.
                        </p>
                        <div className="modal-actions">
                            <button className="btn btn-secondary" onClick={() => setShowDeleteModal(null)}>Cancel</button>
                            <button className="btn btn-danger" onClick={() => setShowDeleteModal(null)}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserManagement;
