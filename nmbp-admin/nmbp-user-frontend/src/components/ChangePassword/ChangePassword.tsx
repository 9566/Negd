import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChangePassword: React.FC = () => {
    const navigate = useNavigate();
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if (newPassword.length < 8) {
            setError("Password must be at least 8 characters");
            return;
        }
        setError("");
        navigate("/profile");
    };

    return (
        <div>
            <div className="page-header">
                <h1 className="heading-page">Change Password</h1>
                <button className="btn btn-secondary" onClick={() => navigate("/profile")}>← Back to Profile</button>
            </div>

            <div className="card" style={{ maxWidth: "500px" }}>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Old Password</label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Enter current password"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">New Password</label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={(e) => { setNewPassword(e.target.value); setError(""); }}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Confirm New Password</label>
                            <input
                                type="password"
                                className="form-input"
                                placeholder="Re-enter new password"
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                            />
                            {error && <div className="form-error">{error}</div>}
                        </div>

                        <button type="submit" className="btn btn-primary btn-full" style={{ marginTop: "8px" }}>
                            Update Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
