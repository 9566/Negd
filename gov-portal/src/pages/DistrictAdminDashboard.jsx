import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiCheckCircle, FiHome, FiUsers, FiClock } from 'react-icons/fi'

const DistrictAdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const stats = [
        { label: 'Events Conducted', value: '252', icon: <FiCheckCircle />, bg: '#D1FAE5' },
        { label: 'Villages Covered', value: '110', icon: <FiHome />, bg: '#E9D5FF' },
        { label: 'People Engaged', value: '13.7K', icon: <FiUsers />, bg: '#FEF3C7' },
        { label: 'Next Goal', value: '300', icon: <FiClock />, bg: '#DBEAFE' },
    ]

    const activities = [
        { id: 1, title: 'Drawing Competition', date: '11/02/2026', location: 'Amroha Govt School', participants: 80, images: 3 },
        { id: 2, title: 'Slogan Writing', date: '09/12/2025', location: 'Town Hall', participants: 532, images: 5 },
        { id: 3, title: 'Rangoli Competition', date: '26/01/2026', location: 'School Ground', participants: 150, images: 2 },
        { id: 4, title: 'Nukad Natak', date: '01/01/2026', location: 'Market Square', participants: 40, images: 0 },
    ]

    return (
        <div>
            {/* Header */}
            <div className="page-header">
                <div>
                    <h1 className="page-title">District Mission Control</h1>
                    <p className="page-subtitle">Amroha District — Field Operations Hub</p>
                </div>
                <button className="btn btn-primary" onClick={() => navigate('/activities/create')}>
                    + Submit New Activity
                </button>
            </div>

            {/* Stats */}
            <div className="stats-grid">
                {stats.map(s => (
                    <div key={s.label} className="stat-card">
                        <div>
                            <div className="stat-label">{s.label}</div>
                            <div className="stat-value">{s.value}</div>
                        </div>
                        <div className="stat-icon" style={{ backgroundColor: s.bg, color: '#111827' }}>{s.icon}</div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', marginTop: '20px' }}>
                {/* Recent Activities */}
                <div className="card" style={{ padding: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                        <h2 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>Operational Feed</h2>
                        <div className="search-input">
                            <FiSearch size={14} color="#9CA3AF" />
                            <input
                                placeholder="Filter activities..."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table-styled">
                            <thead>
                                <tr>
                                    <th>Activity Title</th>
                                    <th>Date</th>
                                    <th style={{ textAlign: 'right' }}>Participants</th>
                                </tr>
                            </thead>
                            <tbody>
                                {activities
                                    .filter(a => a.title.toLowerCase().includes(searchTerm.toLowerCase()))
                                    .map(a => (
                                        <tr key={a.id}>
                                            <td style={{ fontWeight: 600 }}>{a.title}</td>
                                            <td>{a.date}</td>
                                            <td style={{ textAlign: 'right', fontWeight: 700 }}>{a.participants}</td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ padding: '16px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
                        <button className="btn btn-outline" style={{ width: '100%' }} onClick={() => navigate('/activities')}>Manage All Activities</button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="card" style={{ background: '#F0F9FF', borderColor: '#BAE6FD' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 800, color: '#0369A1', marginBottom: '8px' }}>Action Center</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button className="btn btn-primary" style={{ fontSize: '12px', background: '#0369A1' }}>Request More Resources</button>
                            <button className="btn btn-outline" style={{ fontSize: '12px', background: '#fff' }}>Submit Monthly Plan</button>
                        </div>
                    </div>

                    <div className="card">
                        <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Master Volunteers</h3>
                        {[1, 2, 3].map(i => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F3F4F6' }} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '12px', fontWeight: 600 }}>Volunteer {i}</div>
                                    <div style={{ fontSize: '10px', color: '#9CA3AF' }}>12 Activities done</div>
                                </div>
                                <FiCheckCircle color="#10B981" />
                            </div>
                        ))}
                        <button className="btn btn-outline" style={{ width: '100%', fontSize: '11px', marginTop: '8px' }}>View All Volunteers</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DistrictAdminDashboard
