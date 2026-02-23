const Helpline = () => {
    const stats = [
        { label: 'Total Calls Received', value: '45,200', icon: '📞', bg: '#DBEAFE' },
        { label: 'Calls Resolved', value: '42,800', icon: '✅', bg: '#D1FAE5' },
        { label: 'Pending Calls', value: '2,400', icon: '⏳', bg: '#FEF3C7' },
        { label: 'Avg Response Time', value: '4.2 min', icon: '⏱️', bg: '#E9D5FF' },
    ]

    const recentCalls = [
        { id: 1, caller: 'Anonymous', state: 'Maharashtra', issue: 'Substance abuse counseling', date: '22 Feb 2026', status: 'Resolved' },
        { id: 2, caller: 'Anonymous', state: 'Uttar Pradesh', issue: 'Rehabilitation center info', date: '22 Feb 2026', status: 'Resolved' },
        { id: 3, caller: 'Anonymous', state: 'Rajasthan', issue: 'Family support request', date: '21 Feb 2026', status: 'Pending' },
        { id: 4, caller: 'Anonymous', state: 'Bihar', issue: 'Follow-up counseling', date: '21 Feb 2026', status: 'In Progress' },
        { id: 5, caller: 'Anonymous', state: 'Tamil Nadu', issue: 'Facility location assistance', date: '20 Feb 2026', status: 'Resolved' },
    ]

    const statusBadge = (status) => {
        const cls = status === 'Resolved' ? 'badge-success' : status === 'In Progress' ? 'badge-warning' : 'badge-error'
        return <span className={`badge ${cls}`}>{status}</span>
    }

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Helpline Dashboard</h1>
                    <p className="page-subtitle">NMBA toll-free helpline statistics</p>
                </div>
            </div>

            {/* Helpline Number Banner */}
            <div style={{
                background: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)',
                borderRadius: '12px', padding: '24px 32px', color: '#fff',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px',
            }}>
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 4px' }}>NMBA Helpline</h2>
                    <p style={{ fontSize: '13px', opacity: 0.85, margin: 0 }}>Available 24/7 for substance abuse counseling and support</p>
                </div>
                <div style={{ fontSize: '28px', fontWeight: 800, letterSpacing: '2px' }}>📞 1800-11-0031</div>
            </div>

            {/* Stats */}
            <div className="stats-grid">
                {stats.map(s => (
                    <div key={s.label} className="stat-card">
                        <div>
                            <div className="stat-label">{s.label}</div>
                            <div className="stat-value">{s.value}</div>
                        </div>
                        <div className="stat-icon" style={{ backgroundColor: s.bg }}>{s.icon}</div>
                    </div>
                ))}
            </div>

            {/* Recent Calls */}
            <div className="card" style={{ padding: 0 }}>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--border)' }}>
                    <h2 style={{ fontSize: '16px', fontWeight: 700, margin: 0 }}>Recent Calls</h2>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table-styled">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Caller</th>
                                <th>State</th>
                                <th>Issue</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentCalls.map((c, i) => (
                                <tr key={c.id}>
                                    <td>{i + 1}</td>
                                    <td>{c.caller}</td>
                                    <td>{c.state}</td>
                                    <td style={{ fontWeight: 500 }}>{c.issue}</td>
                                    <td>{c.date}</td>
                                    <td>{statusBadge(c.status)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Helpline
