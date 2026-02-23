import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export const ROLES = {
    CENTRAL: 'central',
    STATE: 'state',
    DISTRICT: 'district',
    PUBLIC: 'public',
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('nmba_user')
        return saved ? JSON.parse(saved) : null
    })
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (user) {
            localStorage.setItem('nmba_user', JSON.stringify(user))
        } else {
            localStorage.removeItem('nmba_user')
        }
    }, [user])

    const login = (role, userData = {}) => {
        const profiles = {
            central: { name: 'Central Admin', designation: 'Central Nodal Officer', scope: 'National' },
            state: { name: 'State Officer', designation: 'State Nodal Officer', scope: 'Uttar Pradesh' },
            district: { name: 'District Officer', designation: 'District Nodal Officer', scope: 'Amroha, UP' },
        }
        const profile = profiles[role] || {}
        setUser({
            role,
            name: userData.name || profile.name,
            designation: profile.designation,
            scope: profile.scope,
            state: userData.state || (role === 'state' ? 'Uttar Pradesh' : role === 'district' ? 'Uttar Pradesh' : null),
            district: userData.district || (role === 'district' ? 'Amroha' : null),
            token: 'mock-jwt-token',
            ...userData,
        })
    }

    const logout = () => {
        setUser(null)
        localStorage.removeItem('nmba_user')
    }

    const hasRole = (...roles) => user && roles.includes(user.role)

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, hasRole, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within AuthProvider')
    return context
}

export default AuthContext
