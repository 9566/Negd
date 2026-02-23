import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import styles from './Layout.module.css'

const Layout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className={styles.layout}>
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
