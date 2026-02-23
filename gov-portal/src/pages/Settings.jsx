import { useState } from 'react'
import { FiSave, FiUser, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Settings = () => {
    const [activeTab, setActiveTab] = useState('profile')
    const [profile, setProfile] = useState({
        name: 'Admin User', email: 'admin@mosje.gov.in', phone: '+91 98765 43210',
        designation: 'Central Administrator', department: 'Ministry of Social Justice & Empowerment', location: 'New Delhi',
    })
    const [prefs, setPrefs] = useState({
        emailNotif: true, smsAlerts: false, twoFactor: true, autoLogout: true,
    })

    const Toggle = ({ checked, onChange, label, desc }) => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid #F3F4F6' }}>
            <div>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#111827', margin: 0 }}>{label}</p>
                <p style={{ fontSize: '12px', color: '#6B7280', margin: '2px 0 0' }}>{desc}</p>
            </div>
            <button onClick={onChange} style={{
                width: '44px', height: '24px', borderRadius: '12px', border: 'none', cursor: 'pointer',
                background: checked ? '#005999' : '#D1D5DB', position: 'relative', transition: 'background 0.2s',
            }}>
                <span style={{
                    position: 'absolute', top: '2px', width: '20px', height: '20px', borderRadius: '50%',
                    background: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.15)', transition: 'left 0.2s',
                    left: checked ? '22px' : '2px',
                }} />
            </button>
        </div>
    )

    const tabs = [
        { key: 'profile', label: 'Profile' },
        { key: 'preferences', label: 'Preferences' },
    ]

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Settings</h1>
                    <p className="page-subtitle">Manage your profile and preferences</p>
                </div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', gap: '4px', background: '#F3F4F6', borderRadius: '8px', padding: '3px', marginBottom: '24px', maxWidth: '300px' }}>
                {tabs.map(t => (
                    <button
                        key={t.key}
                        onClick={() => setActiveTab(t.key)}
                        style={{
                            flex: 1, padding: '8px 16px', borderRadius: '6px', border: 'none', fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                            background: activeTab === t.key ? '#fff' : 'transparent',
                            color: activeTab === t.key ? '#005999' : '#6B7280',
                            boxShadow: activeTab === t.key ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
                        }}
                    >
                        {t.label}
                    </button>
                ))}
            </div>

            {activeTab === 'profile' && (
                <div className="card">
                    {/* Avatar */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '20px', borderBottom: '1px solid #E5E7EB', marginBottom: '20px' }}>
                        <div style={{
                            width: '64px', height: '64px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #003167, #005999)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#fff', fontSize: '22px', fontWeight: 700,
                        }}>A</div>
                        <div>
                            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', margin: 0 }}>{profile.name}</h3>
                            <p style={{ fontSize: '13px', color: '#6B7280', margin: '2px 0 0' }}>{profile.designation}</p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        {[
                            { icon: FiUser, label: 'Full Name', key: 'name' },
                            { icon: FiMail, label: 'Email', key: 'email' },
                            { icon: FiPhone, label: 'Phone', key: 'phone' },
                            { icon: FiUser, label: 'Designation', key: 'designation' },
                            { icon: FiMapPin, label: 'Department', key: 'department' },
                            { icon: FiMapPin, label: 'Location', key: 'location' },
                        ].map(f => (
                            <div key={f.key} className="form-group">
                                <label className="form-label">{f.label}</label>
                                <input
                                    className="form-input"
                                    value={profile[f.key]}
                                    onChange={e => setProfile({ ...profile, [f.key]: e.target.value })}
                                />
                            </div>
                        ))}
                    </div>

                    <button className="btn btn-primary" style={{ marginTop: '8px' }}>
                        <FiSave size={14} /> Save Changes
                    </button>
                </div>
            )}

            {activeTab === 'preferences' && (
                <div className="card">
                    <Toggle
                        label="Email Notifications" desc="Receive email alerts for important updates"
                        checked={prefs.emailNotif}
                        onChange={() => setPrefs({ ...prefs, emailNotif: !prefs.emailNotif })}
                    />
                    <Toggle
                        label="SMS Alerts" desc="Get SMS for urgent matters"
                        checked={prefs.smsAlerts}
                        onChange={() => setPrefs({ ...prefs, smsAlerts: !prefs.smsAlerts })}
                    />
                    <Toggle
                        label="Two-Factor Authentication" desc="Extra security layer"
                        checked={prefs.twoFactor}
                        onChange={() => setPrefs({ ...prefs, twoFactor: !prefs.twoFactor })}
                    />
                    <Toggle
                        label="Auto Logout" desc="Logout after 30 min of inactivity"
                        checked={prefs.autoLogout}
                        onChange={() => setPrefs({ ...prefs, autoLogout: !prefs.autoLogout })}
                    />

                    <button className="btn btn-primary" style={{ marginTop: '16px' }}>
                        <FiSave size={14} /> Save Preferences
                    </button>
                </div>
            )}
        </div>
    )
}

export default Settings
