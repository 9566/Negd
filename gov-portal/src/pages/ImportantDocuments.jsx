import { FiDownload, FiEye, FiFileText } from 'react-icons/fi'

const documents = [
    { id: 1, title: 'NMBA Operational Guidelines 2024-25', category: 'Guidelines', size: '2.4 MB', date: '15 Jan 2026', type: 'PDF' },
    { id: 2, title: 'District Action Plan Template', category: 'Templates', size: '1.1 MB', date: '10 Jan 2026', type: 'DOCX' },
    { id: 3, title: 'MoSJE Circular - Fund Allocation', category: 'Circulars', size: '890 KB', date: '05 Jan 2026', type: 'PDF' },
    { id: 4, title: 'Activity Reporting Format', category: 'Templates', size: '540 KB', date: '28 Dec 2025', type: 'XLSX' },
    { id: 5, title: 'Training Manual for DNOs', category: 'Manuals', size: '5.2 MB', date: '20 Dec 2025', type: 'PDF' },
    { id: 6, title: 'Annual Performance Review 2024', category: 'Reports', size: '3.8 MB', date: '15 Dec 2025', type: 'PDF' },
    { id: 7, title: 'NMBA Campaign Branding Kit', category: 'Resources', size: '12.5 MB', date: '10 Dec 2025', type: 'ZIP' },
    { id: 8, title: 'State-wise Target Sheet 2025-26', category: 'Templates', size: '1.3 MB', date: '01 Dec 2025', type: 'XLSX' },
]

const catBadge = {
    'Guidelines': 'badge-info',
    'Templates': 'badge-purple',
    'Circulars': 'badge-warning',
    'Manuals': 'badge-success',
    'Reports': 'badge-info',
    'Resources': 'badge-warning',
}

const ImportantDocuments = () => {
    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Important Documents</h1>
                    <p className="page-subtitle">Government orders, guidelines, and reference materials</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {documents.map(doc => (
                    <div key={doc.id} className="card" style={{ display: 'flex', gap: '16px', alignItems: 'start' }}>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '10px',
                            background: doc.type === 'PDF' ? '#FEE2E2' : doc.type === 'XLSX' ? '#D1FAE5' : doc.type === 'DOCX' ? '#DBEAFE' : '#FEF3C7',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                            <FiFileText size={20} color={doc.type === 'PDF' ? '#DC2626' : doc.type === 'XLSX' ? '#16A34A' : doc.type === 'DOCX' ? '#1A56DB' : '#F97316'} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#111827', margin: '0 0 6px' }}>{doc.title}</h3>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', color: '#6B7280', marginBottom: '10px' }}>
                                <span className={`badge ${catBadge[doc.category] || 'badge-info'}`}>{doc.category}</span>
                                <span>{doc.size}</span>
                                <span>{doc.date}</span>
                            </div>
                            <div style={{ display: 'flex', gap: '8px' }}>
                                <button className="btn btn-outline" style={{ padding: '5px 12px', fontSize: '12px' }}>
                                    <FiEye size={12} /> View
                                </button>
                                <button className="btn btn-primary" style={{ padding: '5px 12px', fontSize: '12px' }}>
                                    <FiDownload size={12} /> Download
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ImportantDocuments
