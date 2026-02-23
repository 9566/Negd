const bgColors = ['#dbeafe', '#dcfce7', '#fef3c7', '#ede9fe', '#fce7f3', '#cffafe']
const categoryColors = {
    'Awareness Rally': { bg: '#E1EFFE', color: '#1A56DB' },
    'School Programme': { bg: '#DEF7EC', color: '#03543F' },
    'Panchayat Rally': { bg: '#FDE8E8', color: '#9B1C1C' },
    'Art & Cultural': { bg: '#E9D5FF', color: '#7C3AED' },
    'Community Programme': { bg: '#FEF3C7', color: '#92400E' },
}

const snapshots = [
    { id: 1, title: 'Student Awareness Drive', location: 'Pune, Maharashtra', date: '25 Jun 2026', category: 'Awareness Rally', image: '🏫', participants: 350 },
    { id: 2, title: 'Government School Pledge', location: 'Anand, Andhra Pradesh', date: '15 Jun 2026', category: 'School Programme', image: '🏫', participants: 200 },
    { id: 3, title: 'Village Meeting', location: 'Alwar, Rajasthan', date: '13 Jun 2026', category: 'Panchayat Rally', image: '🏘️', participants: 80 },
    { id: 4, title: 'Drawing Competition', location: 'Amroha, UP', date: '11 Feb 2026', category: 'Art & Cultural', image: '🎨', participants: 120 },
    { id: 5, title: 'Anti-Drug March', location: 'Lucknow, UP', date: '15 Jan 2026', category: 'Awareness Rally', image: '🚶', participants: 500 },
    { id: 6, title: 'Community Workshop', location: 'Patna, Bihar', date: '20 Dec 2025', category: 'Community Programme', image: '🤝', participants: 150 },
]

const ActivitySnapshot = () => {
    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Activity Snapshots</h1>
                    <p className="page-subtitle">Photo gallery of activities conducted across India</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {snapshots.map((a, idx) => (
                    <div key={a.id} className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                        <div style={{
                            height: '180px', backgroundColor: bgColors[idx % bgColors.length],
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '56px', position: 'relative',
                        }}>
                            {a.image}
                            <span style={{
                                position: 'absolute', bottom: '10px', left: '10px',
                                padding: '3px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: 600,
                                backgroundColor: categoryColors[a.category]?.bg || '#F3F4F6',
                                color: categoryColors[a.category]?.color || '#374151',
                            }}>{a.category}</span>
                        </div>
                        <div style={{ padding: '16px' }}>
                            <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#111827', margin: '0 0 8px' }}>{a.title}</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
                                <span>📍 {a.location}</span>
                                <span>📅 {a.date}</span>
                            </div>
                            <div style={{ fontSize: '12px', color: '#6B7280' }}>
                                👥 {a.participants} participants
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ActivitySnapshot
