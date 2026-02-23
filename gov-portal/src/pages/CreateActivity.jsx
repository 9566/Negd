import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiCamera, FiVideo, FiMapPin, FiCalendar } from 'react-icons/fi'

const CreateActivity = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            alert('Activity submitted successfully!')
            navigate('/activities')
        }, 1500)
    }

    return (
        <div>
            <div className="page-header" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <button className="btn btn-outline" style={{ padding: '8px', borderRadius: '50%' }} onClick={() => navigate(-1)}>
                        <FiArrowLeft />
                    </button>
                    <div>
                        <h1 className="page-title">Create New Activity</h1>
                        <p className="page-subtitle">Submit a field report for an NMBA event</p>
                    </div>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '24px' }}>
                <form onSubmit={handleSubmit} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label className="form-label">Activity Title *</label>
                            <input className="form-input" required placeholder="e.g. Awareness Rally at City Center" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Activity Category *</label>
                            <select className="form-input">
                                <option>Awareness Rally</option>
                                <option>School Programme</option>
                                <option>Panchayat Rally</option>
                                <option>Community Outreach</option>
                                <option>Yoga & Wellness</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Description / Brief Report *</label>
                        <textarea className="form-input" style={{ minHeight: '120px' }} placeholder="Provide a short description of the event and its impact..." />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label className="form-label"><FiCalendar style={{ marginRight: '6px' }} /> Event Date *</label>
                            <input type="date" className="form-input" />
                        </div>
                        <div className="form-group">
                            <label className="form-label"><FiMapPin style={{ marginRight: '6px' }} /> Specific Location *</label>
                            <input className="form-input" placeholder="e.g. Govt Primary School hall" />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                        <div className="form-group">
                            <label className="form-label">Number of Participants *</label>
                            <input type="number" className="form-input" placeholder="Total reached" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Social Media Link (Optional)</label>
                            <input className="form-input" placeholder="YouTube, X or Facebook URL" />
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className="btn btn-primary" style={{ marginTop: '10px', padding: '12px', justifyContent: 'center' }}>
                        {loading ? 'Submitting...' : 'Upload Activity & Go Live'}
                    </button>
                    <p style={{ fontSize: '12px', color: '#6B7280', textAlign: 'center', margin: 0 }}>
                        Note: Once submitted, this activity will be immediately visible on the public dashboard.
                    </p>
                </form>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div className="card">
                        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Upload Media</h3>
                        <div style={{ border: '2px dashed #E5E7EB', borderRadius: '8px', padding: '30px 20px', textAlign: 'center' }}>
                            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiCamera /></div>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#F3F4F6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FiVideo /></div>
                            </div>
                            <p style={{ fontSize: '13px', fontWeight: 600, margin: '0 0 4px' }}>Click to upload photos/videos</p>
                            <p style={{ fontSize: '11px', color: '#9CA3AF', margin: 0 }}>PNG, JPG or MP4 (Max 10MB each)</p>
                            <button className="btn btn-outline" style={{ marginTop: '16px', fontSize: '12px' }}>Browse Files</button>
                        </div>
                        <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                            <div style={{ aspectRatio: '1', background: '#F9FAFB', borderRadius: '6px', border: '1px solid #F3F4F6' }} />
                            <div style={{ aspectRatio: '1', background: '#F9FAFB', borderRadius: '6px', border: '1px solid #F3F4F6' }} />
                        </div>
                    </div>

                    <div className="card" style={{ background: '#FFFBEB', borderColor: '#FEF3C7' }}>
                        <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#92400E', marginBottom: '8px' }}>Guidelines</h3>
                        <ul style={{ fontSize: '11px', color: '#B45309', paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            <li>Upload at least 2 clear photos of the event.</li>
                            <li>Ensure participants are visible in photos.</li>
                            <li>Report actual reach, not estimated.</li>
                            <li>Double check event date before submission.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateActivity
