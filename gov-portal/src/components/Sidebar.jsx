import { NavLink, useNavigate } from 'react-router-dom'
import {
    FiHome, FiUsers, FiActivity, FiSettings,
    FiBell, FiHeart, FiMapPin, FiBookOpen, FiLogOut,
    FiClipboard, FiMessageSquare, FiMap, FiGrid, FiPlusCircle
} from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'
import styles from './Sidebar.module.css'

const Sidebar = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    const { user, logout } = useAuth()
    const role = user?.role || 'public'

    const allMenuItems = [
        { label: 'Overview', icon: FiHome, path: '/dashboard', roles: ['central'] },
        { label: 'Public Feed', icon: FiActivity, path: '/public-dashboard', roles: ['central', 'state', 'district'] },

        { section: 'NMBA MANAGEMENT', roles: ['central', 'state', 'district'] },
        { label: 'Create Activity', icon: FiPlusCircle, path: '/activities/create', roles: ['district'] },
        { label: 'My Activities', icon: FiClipboard, path: '/activities', roles: ['district'] },
        { label: 'State Activities', icon: FiClipboard, path: '/activities', roles: ['state'] },
        { label: 'National Feed', icon: FiClipboard, path: '/activities', roles: ['central'] },
        { label: 'Activity Gallery', icon: FiActivity, path: '/activity-snapshot', roles: ['central', 'state', 'district'] },

        { section: 'ADMINISTRATION', roles: ['central', 'state'] },
        { label: 'State Overview', icon: FiMap, path: '/state-dashboard', roles: ['central', 'state'] },
        { label: 'District Reports', icon: FiGrid, path: '/district-dashboard', roles: ['central', 'state'] },
        { label: 'Nodal Officers', icon: FiUsers, path: '/dno-list', roles: ['central', 'state'] },

        { section: 'RESOURCES', roles: ['central', 'state', 'district'] },
        { label: 'Documents', icon: FiBookOpen, path: '/documents', roles: ['central', 'state', 'district'] },
        { label: 'Facilities', icon: FiMapPin, path: '/facilities', roles: ['central', 'state', 'district'] },
        { label: 'Helpline', icon: FiMessageSquare, path: '/helpline', roles: ['central', 'state', 'district'] },

        { section: 'SYSTEM', roles: ['central', 'state', 'district'] },
        { label: 'Notifications', icon: FiBell, path: '/notifications', roles: ['central', 'state', 'district'] },
        { label: 'Settings', icon: FiSettings, path: '/settings', roles: ['central', 'state', 'district'] },
    ]

    const filteredMenu = allMenuItems.filter(item => !item.roles || item.roles.includes(role))

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <>
            {isOpen && <div className={styles.overlay} onClick={onClose} />}
            <nav className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.roleTag}>
                    {role.toUpperCase()} ACCESS
                </div>
                {filteredMenu.map((item, i) => {
                    if (item.section) {
                        return (
                            <div key={i} className={styles.sidebarSection}>
                                <div className={styles.sectionTitle}>{item.section}</div>
                            </div>
                        )
                    }
                    const Icon = item.icon
                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) => isActive ? styles.navLinkActive : styles.navLink}
                            onClick={onClose}
                        >
                            <Icon className={styles.navIcon} />
                            {item.label}
                        </NavLink>
                    )
                })}
                <div className={styles.spacer} />
                <button className={styles.logoutBtn} onClick={handleLogout}>
                    <FiLogOut />
                    Logout
                </button>
            </nav>
        </>
    )
}

export default Sidebar
