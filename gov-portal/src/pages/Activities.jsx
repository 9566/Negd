import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useAuth } from '../context/AuthContext'

const activities = [
    { id: 1, title: 'Drawing competitions', date: '11/02/2026', location: 'Amroha, UP', type: 'School Programme', participants: 80, images: 3 },
    { id: 2, title: 'Slogan Writing Competition', date: '09/12/2025', location: 'Ayodhya, UP', type: 'Awareness Rally', participants: 532, images: 5 },
    { id: 3, title: 'Rangoli Making Competition', date: '26/01/2026', location: 'Auraiya, UP', type: 'Art & Cultural', participants: 150, images: 2 },
    { id: 4, title: 'Nukad Natak', date: '01/01/2026', location: 'Azamgarh, UP', type: 'Community Programme', participants: 40, images: 0 },
    { id: 5, title: 'Marathon Against Drugs', date: '15/01/2026', location: 'Lucknow, UP', type: 'Awareness Rally', participants: 320, images: 8 },
    { id: 6, title: 'Anti-Drug Workshop', date: '20/01/2026', location: 'Jaipur, Rajasthan', type: 'School Programme', participants: 200, images: 4 },
    { id: 7, title: 'Village Awareness Drive', date: '12/02/2026', location: 'Patna, Bihar', type: 'Panchayat Rally', participants: 95, images: 1 },
]

const Activities = () => {
    const [search, setSearch] = useState('')
    const [typeFilter, setTypeFilter] = useState('All')
    const { user } = useAuth()
    const isDistrict = user?.role === 'district'

    const types = ['All', ...new Set(activities.map(a => a.type))]
    const filtered = activities.filter(a =>
        (typeFilter === 'All' || a.type === typeFilter) &&
        a.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">NMBA Activities</h1>
                    <p className="page-subtitle">Field reports and events conducted across districts</p>
                </div>
                {isDistrict && <button className="btn btn-primary">+ Create Activity</button>}
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div className="search-input" style={{ flex: 1, minWidth: '200px' }}>
                    <FiSearch size={15} color="#9CA3AF" />
                    <input
                        placeholder="Search activities..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <select
                    className="form-input form-select"
                    style={{ width: 'auto', padding: '8px 32px 8px 12px' }}
                    value={typeFilter}
                    onChange={e => setTypeFilter(e.target.value)}
                >
                    {types.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
                </select>
            </div>

            {/* Table */}
            <div className="card" style={{ padding: 0 }}>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table-styled">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Activity</th>
                                <th>Date</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Participants</th>
                                <th>Media</th>
                                <th style={{ textAlign: 'right' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((a, i) => (
                                <tr key={a.id}>
                                    <td>{i + 1}</td>
                                    <td style={{ fontWeight: 600 }}>{a.title}</td>
                                    <td>{a.date}</td>
                                    <td>{a.location}</td>
                                    <td><span className="badge badge-info">{a.type}</span></td>
                                    <td>{a.participants}</td>
                                    <td>{a.images} 📷</td>
                                    <td style={{ textAlign: 'right' }}>
                                        <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: '11px' }}>View</button>
                                        {isDistrict && <button className="btn btn-outline" style={{ padding: '4px 12px', fontSize: '11px', marginLeft: '6px', color: '#DC2626', borderColor: '#FCA5A5' }}>Delete</button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Activities
