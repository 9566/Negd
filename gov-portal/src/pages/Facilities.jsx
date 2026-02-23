const facilities = [
    { id: 1, name: 'IRCA - Pune', type: 'IRCA', address: 'Near Civil Hospital, Pune, Maharashtra', beds: 50, contact: '020-26127890', status: 'Active' },
    { id: 2, name: 'ODIC - Lucknow', type: 'ODIC', address: 'Hazratganj, Lucknow, UP', beds: 30, contact: '0522-2209876', status: 'Active' },
    { id: 3, name: 'ATF - Jaipur', type: 'ATF', address: 'Malviya Nagar, Jaipur, Rajasthan', beds: 25, contact: '0141-2560001', status: 'Active' },
    { id: 4, name: 'IRCA - Patna', type: 'IRCA', address: 'Boring Road, Patna, Bihar', beds: 40, contact: '0612-2345678', status: 'Inactive' },
    { id: 5, name: 'ODIC - Bhopal', type: 'ODIC', address: 'MP Nagar, Bhopal, MP', beds: 20, contact: '0755-4567890', status: 'Active' },
    { id: 6, name: 'ATF - Mumbai', type: 'ATF', address: 'Andheri East, Mumbai, Maharashtra', beds: 60, contact: '022-28901234', status: 'Active' },
]

const typeBadge = {
    'IRCA': { bg: '#DBEAFE', color: '#1A56DB' },
    'ODIC': { bg: '#DEF7EC', color: '#03543F' },
    'ATF': { bg: '#E9D5FF', color: '#7C3AED' },
}

const Facilities = () => {
    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">De-addiction Facilities</h1>
                    <p className="page-subtitle">Verified rehabilitation centres across India</p>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="card" style={{
                height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'linear-gradient(135deg, #E0F2FE, #DBEAFE)', marginBottom: '24px',
                flexDirection: 'column', gap: '12px',
            }}>
                <span style={{ fontSize: '48px' }}>🗺️</span>
                <p style={{ fontSize: '14px', color: '#6B7280' }}>Interactive map will be displayed here</p>
            </div>

            {/* Facility Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {facilities.map(f => (
                    <div key={f.id} className="card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: 0 }}>{f.name}</h3>
                            <span className="badge" style={{
                                backgroundColor: typeBadge[f.type]?.bg,
                                color: typeBadge[f.type]?.color,
                            }}>{f.type}</span>
                        </div>
                        <p style={{ fontSize: '13px', color: '#6B7280', margin: '0 0 12px' }}>📍 {f.address}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
                            <span>🛏️ {f.beds} beds</span>
                            <span>📞 {f.contact}</span>
                        </div>
                        <span className={`badge ${f.status === 'Active' ? 'badge-success' : 'badge-error'}`}>
                            {f.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Facilities
