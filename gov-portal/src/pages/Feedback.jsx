import { useState } from 'react'

const Feedback = () => {
    const [form, setForm] = useState({ name: '', email: '', type: 'Query', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const update = (field, value) => setForm({ ...form, [field]: value })

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Feedback & Grievances</h1>
                    <p className="page-subtitle">Submit your queries or report issues</p>
                </div>
            </div>

            {submitted ? (
                <div className="card" style={{ textAlign: 'center', padding: '48px', maxWidth: '500px', margin: '0 auto' }}>
                    <div style={{ fontSize: '64px', marginBottom: '16px' }}>✅</div>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                        Thank you for your feedback!
                    </h2>
                    <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px' }}>
                        Your ticket has been created. We will respond within 48 hours.
                    </p>
                    <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', type: 'Query', message: '' }); }}>
                        Submit Another
                    </button>
                </div>
            ) : (
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div className="card">
                        <div className="form-group">
                            <label className="form-label">Full Name *</label>
                            <input className="form-input" placeholder="Enter your name" value={form.name} onChange={e => update('name', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email Address *</label>
                            <input className="form-input" type="email" placeholder="Enter your email" value={form.email} onChange={e => update('email', e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Feedback Type</label>
                            <select className="form-input form-select" value={form.type} onChange={e => update('type', e.target.value)}>
                                <option>Query</option>
                                <option>Suggestion</option>
                                <option>Grievance</option>
                                <option>Bug Report</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Message *</label>
                            <textarea
                                className="form-input"
                                rows={5}
                                placeholder="Describe your issue or feedback..."
                                value={form.message}
                                onChange={e => update('message', e.target.value)}
                                style={{ resize: 'vertical' }}
                            />
                        </div>
                        <button
                            className="btn btn-primary"
                            style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '14px' }}
                            onClick={() => setSubmitted(true)}
                        >
                            Submit Feedback
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Feedback
