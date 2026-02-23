import { Link } from 'react-router-dom'
import { FiShield } from 'react-icons/fi'

const Unauthorized = () => {
    return (
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'var(--bg-page)', padding: '20px',
        }}>
            <div style={{ textAlign: 'center', maxWidth: '400px' }}>
                <div style={{
                    width: '80px', height: '80px', borderRadius: '50%', background: '#FEE2E2',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                }}>
                    <FiShield size={36} color="#DC2626" />
                </div>
                <h1 style={{ fontSize: '24px', fontWeight: 700, color: '#111827', marginBottom: '8px' }}>
                    Access Denied
                </h1>
                <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '24px', lineHeight: 1.6 }}>
                    You do not have permission to access this page. Please contact your administrator if you believe this is an error.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <Link to="/dashboard">
                        <button className="btn btn-primary">Go to Dashboard</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn btn-outline">Back to Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Unauthorized
