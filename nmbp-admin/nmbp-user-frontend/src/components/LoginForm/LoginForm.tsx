import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, type Role } from "../../context/AuthContext";

interface LoginFormProps {
  title: string;
  role: Role;
  extraFields?: React.ReactNode;
}

const LoginForm: React.FC<LoginFormProps> = ({ title, role, extraFields }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(role);
    navigate("/dashboard");
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🏛️</div>
          <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-600 mt-1">NMBA Admin Portal</p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Extra fields (dropdowns) */}
          {extraFields}

          {/* Username */}
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn btn-primary btn-lg btn-full mt-2"
          >
            Login
          </button>

          {/* Forgot password */}
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-400 no-underline">
              Forgot Password?
            </a>
          </div>

          {/* Back to selection */}
          <div className="text-center mt-3">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="bg-none border-none text-gray-600 text-sm cursor-pointer"
            >
              ← Back to Login Selection
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
