import { useState } from 'react'
import { FiSearch, FiCheckCircle, FiMapPin, FiUsers, FiTrendingUp } from 'react-icons/fi'

const StateAdminDashboard = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const stats = [
        { label: 'Activities in State', value: '710', icon: <FiCheckCircle />, bg: '#D1FAE5' },
        { label: 'Active Districts', value: '30/75', icon: <FiMapPin />, bg: '#E9D5FF' },
        { label: 'Total Reach', value: '1.4L+', icon: <FiUsers />, bg: '#FEF3C7' },
        { label: 'State Rank', value: '#3', icon: <FiTrendingUp />, bg: '#DBEAFE' },
    ]

    const districtPerformance = [
        { district: 'Lucknow', activities: 85, participants: 4500, mvs: 12, ranking: 1 },
        { district: 'Varanasi', activities: 72, participants: 3800, mvs: 10, ranking: 2 },
        { district: 'Agra', activities: 65, participants: 3200, mvs: 8, ranking: 3 },
        { district: 'Kanpur', activities: 58, participants: 2900, mvs: 7, ranking: 4 },
        { district: 'Prayagraj', activities: 52, participants: 2600, mvs: 6, ranking: 5 },
        { district: 'Meerut', activities: 48, participants: 2400, mvs: 5, ranking: 6 },
        { district: 'Gorakhpur', activities: 45, participants: 2100, mvs: 5, ranking: 7 },
    ]

    return (
        <div>
            {/* Header */}
            <div className="page-header">
                <div>
                    <h1 className="page-title">State Performance Dashboard</h1>
                    <p className="page-subtitle">Uttar Pradesh — State Nodal Officer Monitoring</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button className="btn btn-outline">Export State Report</button>
                    <button className="btn btn-outline">Announcements</button>
                </div>
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

            {/* Performance Ranking Table */}
            <div className="card" style={{ padding: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '15px', fontWeight: 700, margin: 0 }}>District Ranking & Coverage</h2>
                    <div className="search-input">
                        <FiSearch size={15} color="#9CA3AF" />
                        <input
                            placeholder="Search districts..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table-styled">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>District</th>
                                <th>Activities Done</th>
                                <th>Villages Reached</th>
                                <th>Master Volunteers</th>
                                <th style={{ textAlign: 'right' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {districtPerformance
                                .filter(d => d.district.toLowerCase().includes(searchTerm.toLowerCase()))
                                .map((d) => (
                                    <tr key={d.ranking}>
                                        <td>
                                            <span style={{
                                                width: '24px', height: '24px', borderRadius: '50%',
                                                background: d.ranking <= 3 ? '#FEF3C7' : '#F3F4F6',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '11px', fontWeight: 700, color: d.ranking <= 3 ? '#92400E' : '#6B7280'
                                            }}>
                                                {d.ranking}
                                            </span>
                                        </td>
                                        <td style={{ fontWeight: 600 }}>{d.district}</td>
                                        <td>{d.activities}</td>
                                        <td>{(d.activities * 2)}</td>
                                        <td>{d.mvs}</td>
                                        <td style={{ textAlign: 'right' }}>
                                            <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: '11px' }}>View Detail</button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div style={{ marginTop: '24px' }} className="card">
                <h3 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>Mission Timeline (State Level)</h3>
                <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '20px', padding: '20px 0' }}>
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
                            <div style={{ width: '100%', borderRadius: '4px 4px 0 0', background: 'linear-gradient(to top, #005999, #60A5FA)', height: `${h}%` }} />
                            <span style={{ fontSize: '10px', color: '#9CA3AF' }}>Day {i + 1}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default StateAdminDashboard
