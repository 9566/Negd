import { useState } from 'react'
import { FiSearch, FiDownload } from 'react-icons/fi'

const dnoData = [
    { id: 1, name: 'Smt. Meena Kumari', designation: 'District Collector', district: 'Amroha', state: 'Uttar Pradesh', mobile: '9876543210', email: 'meena@gov.in', status: 'Active' },
    { id: 2, name: 'Shri Rajesh Gupta', designation: 'Addl. District Magistrate', district: 'Ayodhya', state: 'Uttar Pradesh', mobile: '9876543211', email: 'rajesh@gov.in', status: 'Active' },
    { id: 3, name: 'Dr. Priya Sharma', designation: 'District Collector', district: 'Jaipur', state: 'Rajasthan', mobile: '9876543212', email: 'priya@gov.in', status: 'Active' },
    { id: 4, name: 'Shri Amit Kumar', designation: 'Addl. DM', district: 'Patna', state: 'Bihar', mobile: '9876543213', email: 'amit@gov.in', status: 'Inactive' },
    { id: 5, name: 'Smt. Kavita Singh', designation: 'District Collector', district: 'Bhopal', state: 'Madhya Pradesh', mobile: '9876543214', email: 'kavita@gov.in', status: 'Active' },
    { id: 6, name: 'Shri Vijay Rao', designation: 'Deputy Commissioner', district: 'Pune', state: 'Maharashtra', mobile: '9876543215', email: 'vijay@gov.in', status: 'Active' },
    { id: 7, name: 'Dr. Sunita Reddy', designation: 'District Collector', district: 'Hyderabad', state: 'Telangana', mobile: '9876543216', email: 'sunita@gov.in', status: 'Active' },
    { id: 8, name: 'Shri Mahesh Nair', designation: 'District Collector', district: 'Kochi', state: 'Kerala', mobile: '9876543217', email: 'mahesh@gov.in', status: 'Inactive' },
]

const DnoList = () => {
    const [search, setSearch] = useState('')
    const [stateFilter, setStateFilter] = useState('All')

    const states = ['All', ...new Set(dnoData.map(d => d.state))]
    const filtered = dnoData.filter(d =>
        (stateFilter === 'All' || d.state === stateFilter) &&
        (d.name.toLowerCase().includes(search.toLowerCase()) || d.district.toLowerCase().includes(search.toLowerCase()))
    )

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">List of DNOs</h1>
                    <p className="page-subtitle">District Nodal Officers across all states</p>
                </div>
                <button className="btn btn-outline">
                    <FiDownload size={14} />
                    Export CSV
                </button>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div className="search-input" style={{ flex: 1, minWidth: '200px' }}>
                    <FiSearch size={15} color="#9CA3AF" />
                    <input
                        placeholder="Search by name or district..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </div>
                <select
                    className="form-input form-select"
                    style={{ width: 'auto', padding: '8px 32px 8px 12px' }}
                    value={stateFilter}
                    onChange={e => setStateFilter(e.target.value)}
                >
                    {states.map(s => <option key={s} value={s}>{s === 'All' ? 'All States' : s}</option>)}
                </select>
            </div>

            {/* Table */}
            <div className="card" style={{ padding: 0 }}>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table-styled">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>District</th>
                                <th>State</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map((d, i) => (
                                <tr key={d.id}>
                                    <td>{i + 1}</td>
                                    <td style={{ fontWeight: 500 }}>{d.name}</td>
                                    <td>{d.designation}</td>
                                    <td>{d.district}</td>
                                    <td>{d.state}</td>
                                    <td>{d.mobile}</td>
                                    <td style={{ color: '#1A56DB' }}>{d.email}</td>
                                    <td>
                                        <span className={`badge ${d.status === 'Active' ? 'badge-success' : 'badge-error'}`}>
                                            {d.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div style={{ padding: '0 20px' }}>
                    <div className="pagination">
                        <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginRight: 'auto' }}>
                            Showing 1-{filtered.length} of {filtered.length} results
                        </span>
                        <button className="pagination-btn active">1</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DnoList
