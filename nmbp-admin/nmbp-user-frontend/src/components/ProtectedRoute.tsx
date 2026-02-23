import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth, type Role } from "../context/AuthContext";

interface Props {
    allowedRoles?: Role[];
}

const ProtectedRoute: React.FC<Props> = ({ allowedRoles }) => {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
