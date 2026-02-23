import { FiSearch, FiBell, FiMenu } from 'react-icons/fi'
import styles from './Header.module.css'

const Header = ({ onMenuClick }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <button className={styles.menuBtn} onClick={onMenuClick}>
                    <FiMenu />
                </button>
                <div className={styles.logo}>
                    <div className={styles.emblem}>🏛️</div>
                    <div className={styles.logoText}>
                        <h1>MoSJE Portal</h1>
                        <span>Ministry of Social Justice & Empowerment</span>
                    </div>
                </div>
            </div>

            <div className={styles.headerSearch}>
                <FiSearch size={16} />
                <input type="text" placeholder="Search modules, reports..." />
            </div>

            <div className={styles.headerRight}>
                <button className={styles.notifBtn}>
                    <FiBell size={18} />
                    <span className={styles.notifDot} />
                </button>
                <div className={styles.profile}>
                    <div className={styles.avatar}>A</div>
                    <div className={styles.profileInfo}>
                        <span className={styles.profileName}>Admin User</span>
                        <span className={styles.profileRole}>Central Admin</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
