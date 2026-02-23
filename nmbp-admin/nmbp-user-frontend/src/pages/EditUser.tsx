import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser: React.FC = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/user-management");
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="heading-page">Edit User #{id}</h1>
                <button className="btn btn-secondary" onClick={() => navigate("/user-management")}>← Back</button>
            </div>

            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-grid">
                            <div className="form-group">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-input" defaultValue="Ashok" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-input" defaultValue="Kumar" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" defaultValue="ashok@gov.in" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input type="tel" className="form-input" defaultValue="+91 9876543210" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Role</label>
                                <select className="form-select" defaultValue="district">
                                    <option value="central">Central Admin</option>
                                    <option value="state">State Nodal Officer</option>
                                    <option value="district">District Nodal Officer</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">State</label>
                                <select className="form-select" defaultValue="Uttar Pradesh">
                                    <option>Uttar Pradesh</option>
                                    <option>Madhya Pradesh</option>
                                    <option>Rajasthan</option>
                                    <option>Bihar</option>
                                    <option>Maharashtra</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">District</label>
                                <select className="form-select" defaultValue="Amroha">
                                    <option>Lucknow</option>
                                    <option>Agra</option>
                                    <option>Amroha</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <select className="form-select" defaultValue="active">
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
                            <button type="submit" className="btn btn-primary">Update User</button>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate("/user-management")}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditUser;
