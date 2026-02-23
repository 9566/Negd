import { useState } from 'react'
import { FiCheckCircle, FiDownload, FiShare2, FiShield } from 'react-icons/fi'

const Pledge = () => {
    const [step, setStep] = useState(1) // 1: Form, 2: Success/Certificate
    const [formData, setFormData] = useState({
        name: '', mobile: '', state: '', district: ''
    })

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        setStep(2)
    }

    if (step === 2) {
        return (
            <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
                <div className="card" style={{ textAlign: 'center', padding: '40px' }}>
                    <div style={{
                        width: '80px', height: '80px', borderRadius: '50%', background: '#D1FAE5',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
                    }}>
                        <FiCheckCircle size={40} color="#10B981" />
                    </div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#111827', marginBottom: '8px' }}>Pledge Taken Successfully!</h1>
                    <p style={{ color: '#6B7280', marginBottom: '40px' }}>Thank you {formData.name} for joining the mission towards a drug-free India.</p>

                    {/* Certificate Preview */}
                    <div style={{
                        background: '#FAFBFD', border: '12px solid #005999', padding: '40px',
                        borderRadius: '4px', position: 'relative', marginBottom: '40px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                        textAlign: 'center'
                    }}>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#005999', marginBottom: '20px', letterSpacing: '1px' }}>NASHA MUKT BHARAT ABHIYAAN</div>
                        <h2 style={{ fontSize: '32px', margin: '0 0 10px', color: '#111827' }}>Certificate of Commitment</h2>
                        <p style={{ fontSize: '14px', color: '#6B7280' }}>This is to certify that</p>
                        <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '15px 0', borderBottom: '2px solid #005999', display: 'inline-block', paddingBottom: '5px' }}>
                            {formData.name || 'CITIZEN NAME'}
                        </h3>
                        <p style={{ fontSize: '14px', lineHeight: 1.6, maxWidth: '500px', margin: '20px auto', color: '#374151' }}>
                            Has taken the e-pledge and committed to lead a drug-free life and contribute towards making India free from the menace of substance abuse.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '40px' }}>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: '10px', color: '#9CA3AF' }}>DATE</div>
                                <div style={{ fontSize: '12px', fontWeight: 700 }}>{new Date().toLocaleDateString()}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '10px', color: '#9CA3AF' }}>REF ID</div>
                                <div style={{ fontSize: '12px', fontWeight: 700 }}>NMBA-{Math.floor(Math.random() * 90000) + 10000}</div>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                        <button className="btn btn-primary" style={{ padding: '12px 24px' }}>
                            <FiDownload style={{ marginRight: '8px' }} /> Download PDF
                        </button>
                        <button className="btn btn-outline" style={{ padding: '12px 24px' }}>
                            <FiShare2 style={{ marginRight: '8px' }} /> Share Pledge
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{
                background: 'linear-gradient(135deg, #003366 0%, #005999 100%)',
                borderRadius: '16px', padding: '60px 40px', color: '#fff', marginBottom: '40px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '40px', fontWeight: 800, marginBottom: '16px' }}>Take the E-Pledge</h1>
                <p style={{ fontSize: '18px', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
                    Join 2.2+ Crore citizens in the mission for a Drug-Free India.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'start' }}>
                <form className="card" style={{ padding: '32px' }} onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px' }}>Personal Details</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label className="form-label">Full Name *</label>
                            <input
                                className="form-input" required placeholder="As you want it on certificate"
                                value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="form-label">Mobile Number *</label>
                            <input
                                className="form-input" required type="tel" placeholder="10 digit mobile number"
                                value={formData.mobile} onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                            />
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            <div>
                                <label className="form-label">State *</label>
                                <select className="form-input" value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })}>
                                    <option value="">Select State</option>
                                    <option>Uttar Pradesh</option>
                                    <option>Delhi</option>
                                    <option>Punjab</option>
                                </select>
                            </div>
                            <div>
                                <label className="form-label">District *</label>
                                <select className="form-input" value={formData.district} onChange={e => setFormData({ ...formData, district: e.target.value })}>
                                    <option value="">Select District</option>
                                    <option>Amroha</option>
                                    <option>Lucknow</option>
                                    <option>Agra</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ padding: '14px', justifyContent: 'center', fontSize: '16px', marginTop: '10px' }}>
                            Submit & Generate Certificate
                        </button>
                    </div>
                </form>

                <div className="card" style={{ background: '#F0F9FF', borderColor: '#BAE6FD', padding: '32px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#0369A1', marginBottom: '16px' }}>The Oath</h2>
                    <p style={{ fontSize: '15px', lineHeight: 1.8, color: '#0C4A6E', fontStyle: 'italic', background: '#fff', padding: '24px', borderRadius: '8px', border: '1px solid #BAE6FD' }}>
                        "I pledge that I shall never utilize any kind of drug or prohibited substance.
                        I commit myself to contribute towards making my family, my community and my country drug-free."
                    </p>
                    <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', gap: '12px', color: '#0369A1', fontSize: '14px', fontWeight: 600 }}>
                        <FiShield /> Verified Citizen Commitment
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pledge
