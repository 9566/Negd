import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const [loginType, setLoginType] = useState('otp')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleMockLogin = (role) => {
        login(role)
        if (role === 'central') navigate('/dashboard')
        else if (role === 'state') navigate('/state-dashboard')
        else navigate('/district-dashboard')
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #003366 0%, #005999 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div className="card" style={{ maxWidth: '450px', width: '100%', padding: '40px' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{ fontSize: '32px', marginBottom: '12px' }}>🏛️</div>
                    <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#111827', margin: 0 }}>MoSJE Portal</h1>
                    <p style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>Nasha Mukt Bharat Abhiyaan</p>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', background: '#F3F4F6', padding: '4px', borderRadius: '8px' }}>
                    <button
                        onClick={() => setLoginType('otp')}
                        style={{
                            flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
                            background: loginType === 'otp' ? '#fff' : 'transparent',
                            boxShadow: loginType === 'otp' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                            fontSize: '13px', fontWeight: 600, cursor: 'pointer'
                        }}
                    >OTP Login</button>
                    <button
                        onClick={() => setLoginType('password')}
                        style={{
                            flex: 1, padding: '8px', borderRadius: '6px', border: 'none',
                            background: loginType === 'password' ? '#fff' : 'transparent',
                            boxShadow: loginType === 'password' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                            fontSize: '13px', fontWeight: 600, cursor: 'pointer'
                        }}
                    >Password</button>
                </div>

                <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Mobile Number</label>
                    <input type="text" className="form-input" placeholder="Enter 10 digit mobile" />
                </div>

                {loginType === 'otp' ? (
                    <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }} disabled>Get OTP</button>
                ) : (
                    <>
                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>Password</label>
                            <input type="password" className="form-input" placeholder="••••••••" />
                        </div>
                        <button className="btn btn-primary" style={{ width: '100%', padding: '12px' }} disabled>Login</button>
                    </>
                )}

                <div style={{ marginTop: '32px', textAlign: 'center' }}>
                    <p style={{ fontSize: '12px', color: '#9CA3AF', marginBottom: '16px' }}>— QUICK ACCESS (DEVELOPMENT) —</p>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <button className="badge badge-error" style={{ cursor: 'pointer', border: 'none', padding: '8px 16px' }} onClick={() => handleMockLogin('central')}>Central Admin</button>
                        <button className="badge badge-info" style={{ cursor: 'pointer', border: 'none', padding: '8px 16px' }} onClick={() => handleMockLogin('state')}>State SNO</button>
                        <button className="badge badge-success" style={{ cursor: 'pointer', border: 'none', padding: '8px 16px' }} onClick={() => handleMockLogin('district')}>District DNO</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
