import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Role = "central" | "state" | "district";

interface User {
    name: string;
    role: Role;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (role: Role) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const roleNames: Record<Role, { name: string }> = {
    central: { name: "Admin User" },
    state: { name: "Shivam Dubey" },
    district: { name: "Ashok Kumar" },
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("nmba_role");
        if (saved && (saved === "central" || saved === "state" || saved === "district")) {
            setUser({ name: roleNames[saved as Role].name, role: saved as Role });
        }
    }, []);

    const login = (role: Role) => {
        const u = { name: roleNames[role].name, role };
        setUser(u);
        localStorage.setItem("nmba_role", role);
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("nmba_role");
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be inside AuthProvider");
    return ctx;
};
