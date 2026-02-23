import { useState } from 'react'
import { FiActivity, FiMap, FiVideo, FiUsers } from 'react-icons/fi'

const Dashboard = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const stats = [
        { label: 'Total Activities', value: '3,380', icon: <FiActivity />, bg: '#DBEAFE' },
        { label: 'Media Uploads', value: '12,450', icon: <FiVideo />, bg: '#D1FAE5' },
        { label: 'States Active', value: '32', icon: <FiMap />, bg: '#E9D5FF' },
        { label: 'Nodal Officers', value: '500', icon: <FiUsers />, bg: '#FEF3C7' },
    ]

    const recentActivities = [
        { id: 1, activity: 'Drawing competitions', date: '11/02/2026', district: 'Amroha', participants: 80 },
        { id: 2, activity: 'Slogan Writing Competition', date: '09/12/2025', district: 'Ayodhya', participants: 532 },
        { id: 3, activity: 'Rangoli Making Competition', date: '26/01/2026', district: 'Auraiya', participants: 150 },
        { id: 4, activity: 'Nukad Natak', date: '01/01/2026', district: 'Azamgarh', participants: 40 },
        { id: 5, activity: 'Marathon Against Drugs', date: '15/01/2026', district: 'Lucknow', participants: 320 },
    ]

    const stateTable = [
        { state: 'Uttar Pradesh', activities: 450, participants: 12000, coverage: '95%' },
        { state: 'Madhya Pradesh', activities: 320, participants: 8500, coverage: '88%' },
        { state: 'Rajasthan', activities: 280, participants: 7200, coverage: '92%' },
        { state: 'Bihar', activities: 250, participants: 6800, coverage: '75%' },
        { state: 'Maharashtra', activities: 230, participants: 6100, coverage: '84%' },
    ]

    return (
        <div>
            {/* Page Header */}
            <div className="page-header">
                <div>
                    <h1 className="page-title">National Monitoring Dashboard</h1>
                    <p className="page-subtitle">National level overview of NMBA mission progress</p>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="stats-grid">
                {stats.map(s => (
                    <div key={s.label} className="stat-card">
                        <div>
                            <div className="stat-label">{s.label}</div>
                            <div className="stat-value">{s.value}</div>
                        </div>
                        <div className="stat-icon" style={{ backgroundColor: s.bg, color: '#1E40AF' }}>{s.icon}</div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px', marginTop: '20px' }}>
                {/* Table Section */}
                <div className="card" style={{ padding: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                        <h2 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>State-wise Coverage</h2>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table className="table-styled">
                            <thead>
                                <tr>
                                    <th>State</th>
                                    <th>Activities</th>
                                    <th>Participants</th>
                                    <th>Coverage</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stateTable.map((r, i) => (
                                    <tr key={i}>
                                        <td style={{ fontWeight: 600 }}>{r.state}</td>
                                        <td>{r.activities}</td>
                                        <td>{r.participants.toLocaleString()}</td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <div style={{ flex: 1, height: '6px', background: '#E5E7EB', borderRadius: '3px', overflow: 'hidden' }}>
                                                    <div style={{ width: r.coverage, height: '100%', background: '#10B981' }} />
                                                </div>
                                                <span style={{ fontSize: '12px', fontWeight: 600 }}>{r.coverage}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Recent Activities Section */}
                <div className="card" style={{ padding: 0 }}>
                    <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                        <h2 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>Live Activity Feed</h2>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table-styled">
                            <thead>
                                <tr>
                                    <th>Activity</th>
                                    <th>Location</th>
                                    <th>Reach</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentActivities.map(r => (
                                    <tr key={r.id}>
                                        <td style={{ fontWeight: 500, fontSize: '13px' }}>{r.activity}</td>
                                        <td style={{ fontSize: '12px', color: '#6B7280' }}>{r.district}</td>
                                        <td style={{ fontSize: '12px', fontWeight: 600 }}>{r.participants}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ padding: '12px', textAlign: 'center' }}>
                        <button className="btn btn-outline" style={{ fontSize: '12px', width: '100%' }}>View All National Feed</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
