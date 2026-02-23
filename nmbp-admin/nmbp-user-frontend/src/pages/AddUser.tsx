import React from "react";
import { useNavigate } from "react-router-dom";

const AddUser: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/user-management");
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="heading-page">Add New User</h1>
                <button className="btn btn-secondary" onClick={() => navigate("/user-management")}>← Back</button>
            </div>

            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-input" placeholder="Enter first name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-input" placeholder="Enter last name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="Enter email address" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-input" placeholder="Enter phone number" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Role</label>
                                <select className="form-select">
                                    <option value="">Select Role</option>
                                    <option value="central">Central Admin</option>
                                    <option value="state">State Nodal Officer</option>
                                    <option value="district">District Nodal Officer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">State</label>
                                <select className="form-select">
                                    <option value="">Select State</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Rajasthan</option>
                                    <option>Bihar</option>
                                    <option>Maharashtra</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">District</label>
                                <select className="form-select">
                                    <option value="">Select District</option>
                                    <option>Lucknow</option>
                                    <option>Agra</option>
                                    <option>Amroha</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <select className="form-select">
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-section-title" style={{ marginTop: "24px" }}>Login Credentials</div>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-input" placeholder="Enter username" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-input" placeholder="Enter password" />
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                            <button type="submit" className="btn btn-primary">Add User</button>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate("/user-management")}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddUser;
