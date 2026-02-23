import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
    const [step, setStep] = useState(1)
    const navigate = useNavigate()

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #003366 0%, #005999 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div className="card" style={{ maxWidth: '500px', width: '100%', padding: '40px' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>📋</div>
                    <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: 0 }}>Register as Officer</h1>
                    <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>Enter your official details for NMBA access</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', gap: '8px' }}>
                    <div style={{ width: '30px', height: '6px', borderRadius: '3px', background: step >= 1 ? '#005999' : '#E5E7EB' }} />
                    <div style={{ width: '30px', height: '6px', borderRadius: '3px', background: step >= 2 ? '#005999' : '#E5E7EB' }} />
                    <div style={{ width: '30px', height: '6px', borderRadius: '3px', background: step >= 3 ? '#005999' : '#E5E7EB' }} />
                </div>

                {step === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Official Role</label>
                            <select className="form-input">
                                <option>District Nodal Officer (DNO)</option>
                                <option>State Nodal Officer (SNO)</option>
                                <option>Ministry User (Central)</option>
                            </select>
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Select State</label>
                            <select className="form-input">
                                <option>Uttar Pradesh</option>
                                <option>Maharashtra</option>
                                <option>Rajasthan</option>
                            </select>
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }} onClick={() => setStep(2)}>Continue</button>
                    </div>
                )}

                {step === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Full Name</label>
                            <input type="text" className="form-input" placeholder="e.g. Dr. Ashok Kumar" />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Designation</label>
                            <input type="text" className="form-input" placeholder="e.g. Assistant Director" />
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setStep(1)}>Back</button>
                            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => setStep(3)}>Continue</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Contact Number</label>
                            <input type="tel" className="form-input" placeholder="Enter mobile number" />
                        </div>
                        <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>
                            By registering, you agree to follow the NMBA Data Privacy and Security guidelines.
                        </p>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button className="btn btn-outline" style={{ flex: 1 }} onClick={() => setStep(2)}>Back</button>
                            <button className="btn btn-primary" style={{ flex: 1 }} onClick={() => {
                                alert('Registration successful! Waiting for system verification.')
                                navigate('/login')
                            }}>Register Now</button>
                        </div>
                    </div>
                )}

                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                    <p style={{ fontSize: '13px', color: '#6B7280' }}>
                        Already an officer? <Link to="/login" style={{ color: '#005999', fontWeight: 600, textDecoration: 'none' }}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup
