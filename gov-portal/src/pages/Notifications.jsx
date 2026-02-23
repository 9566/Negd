import { FiCheckCircle, FiAlertCircle, FiInfo, FiUserPlus, FiFileText, FiShield } from 'react-icons/fi'

const notifications = [
    { id: 1, icon: FiCheckCircle, iconColor: '#22C55E', iconBg: '#D1FAE5', title: 'Activity Published', desc: 'Drawing competition activity in Amroha is now live on the public portal.', time: '2 min ago', unread: true },
    { id: 2, icon: FiFileText, iconColor: '#1A56DB', iconBg: '#DBEAFE', title: 'New District Report', desc: 'A new comprehensive activity report has been uploaded from Ayodhya.', time: '15 min ago', unread: true },
    { id: 3, icon: FiInfo, iconColor: '#0891B2', iconBg: '#CFFAFE', title: 'Quarterly Review Meeting', desc: 'National review meeting scheduled for all SNOs on 5th March.', time: '1 hour ago', unread: true },
    { id: 4, icon: FiUserPlus, iconColor: '#7C3AED', iconBg: '#E9D5FF', title: 'New DNO Added', desc: 'Dr. Priya Sharma has been assigned as DNO for Jaipur district.', time: '3 hours ago', unread: false },
    { id: 5, icon: FiShield, iconColor: '#F97316', iconBg: '#FEF3C7', title: 'System Security', desc: 'Successfull login from a new device detected for your account.', time: '5 hours ago', unread: false },
    { id: 6, icon: FiInfo, iconColor: '#0891B2', iconBg: '#CFFAFE', title: 'System Update', desc: 'Platform updated to Version 2.4. Improved dashboard loading speed.', time: '1 day ago', unread: false },
]

const Notifications = () => {
    const unreadCount = notifications.filter(n => n.unread).length

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="page-title">Notifications</h1>
                    <p className="page-subtitle">{unreadCount} unread notifications</p>
                </div>
                <button className="btn btn-outline" style={{ fontSize: '13px' }}>Mark all as read</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {notifications.map(n => (
                    <div
                        key={n.id}
                        className="card"
                        style={{
                            display: 'flex', gap: '16px', padding: '16px 20px', cursor: 'pointer',
                            background: n.unread ? '#F0F9FF' : '#fff',
                            borderColor: n.unread ? '#BAE6FD' : '#E5E7EB',
                        }}
                    >
                        <div style={{
                            width: '44px', height: '44px', borderRadius: '10px',
                            backgroundColor: n.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                            <n.icon size={20} color={n.iconColor} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                <h3 style={{ fontSize: '14px', fontWeight: 600, color: n.unread ? '#111827' : '#6B7280', margin: 0 }}>
                                    {n.title}
                                    {n.unread && <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: '#005999', marginLeft: '8px' }} />}
                                </h3>
                                <span style={{ fontSize: '12px', color: '#9CA3AF', whiteSpace: 'nowrap' }}>{n.time}</span>
                            </div>
                            <p style={{ fontSize: '13px', color: '#6B7280', margin: '4px 0 0', lineHeight: 1.5 }}>{n.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <button className="btn btn-outline">Load Older Notifications</button>
            </div>
        </div>
    )
}

export default Notifications
