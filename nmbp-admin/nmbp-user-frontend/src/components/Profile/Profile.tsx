import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const roleLabels: Record<string, string> = {
    central: "Central Admin",
    state: "State Nodal Officer",
    district: "District Nodal Officer",
  };

  const initials =
    user?.name
      ?.split(" ")
      .map((w) => w[0])
      .join("") || "U";

  return (
    <div>
      <div className="page-header">
        <h1 className="heading-page">My Profile</h1>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/change-password")}
        >
          Change Password
        </button>
      </div>

      <div className="card">
        <div
          className="card-body"
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {/* Avatar */}
          <div style={{ textAlign: "center" }}>
            <div className="profile-avatar-lg">{initials}</div>
            <button
              className="btn btn-outline btn-sm"
              style={{ marginTop: "16px" }}
            >
              Edit Profile
            </button>
          </div>

          {/* Details */}
          <div style={{ flex: 1, minWidth: "300px" }}>
            <div className="form-section-title">Personal Information</div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <div className="text-body">{user?.name || "N/A"}</div>
              </div>
              <div className="form-group">
                <label className="form-label">Role</label>
                <div className="text-body">
                  {roleLabels[user?.role || "district"]}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <div className="text-body">
                  {user?.name?.toLowerCase().replace(" ", ".") + "@gov.in"}
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Phone</label>
                <div className="text-body">+91 98765 43210</div>
              </div>
            </div>

            <div className="form-section-title" style={{ marginTop: "24px" }}>
              Location Details
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">State</label>
                <div className="text-body">Uttar Pradesh</div>
              </div>
              <div className="form-group">
                <label className="form-label">District</label>
                <div className="text-body">Amroha</div>
              </div>
              <div className="form-group">
                <label className="form-label">Member Since</label>
                <div className="text-body">January 2025</div>
              </div>
              <div className="form-group">
                <label className="form-label">Last Login</label>
                <div className="text-body">22 Feb 2026, 10:30 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
