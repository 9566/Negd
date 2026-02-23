import React, { useState } from "react";

const mockNotifications = [
    { id: 1, title: "New Activity Submitted", message: "Ashok Kumar submitted a new activity 'Drawing Competition' for Amroha district.", time: "2 hours ago", read: false, type: "info" },
    { id: 2, title: "Report Published", message: "Monthly Activity Report for January 2026 has been published successfully.", time: "5 hours ago", read: false, type: "success" },
    { id: 3, title: "Pledge Target Reached", message: "Uttar Pradesh has reached 80% of its pledge target for Q1 2026.", time: "1 day ago", read: true, type: "success" },
    { id: 4, title: "System Maintenance", message: "The portal will undergo scheduled maintenance on 25th Feb 2026, 2:00 AM - 4:00 AM.", time: "2 days ago", read: true, type: "warning" },
    { id: 5, title: "Feedback Received", message: "New feedback received from Rajasthan - Jaipur district regarding facilities listing.", time: "3 days ago", read: true, type: "info" },
    { id: 6, title: "Account Update", message: "Your profile information was updated successfully.", time: "5 days ago", read: true, type: "info" },
];

const Notifications: React.FC = () => {
    const [notifications, setNotifications] = useState(mockNotifications);

    const markAllRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const unreadCount = notifications.filter(n => !n.read).length;

    const typeIcon = (type: string) => {
        if (type === "success") return "✅";
        if (type === "warning") return "⚠️";
        return "ℹ️";
    };

    return (
        <div>
            <div className="page-header">
                <div>
                    <h1 className="heading-page">Notifications</h1>
                    {unreadCount > 0 && (
                        <span className="badge badge-info" style={{ marginTop: "4px" }}>
                            {unreadCount} unread
                        </span>
                    )}
                </div>
                <button className="btn btn-outline btn-sm" onClick={markAllRead}>
                    Mark all as read
                </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {notifications.map((n) => (
                    <div
                        key={n.id}
                        className={`notification-card ${!n.read ? 'unread' : ''}`}
                        onClick={() => setNotifications(prev => prev.map(x => x.id === n.id ? { ...x, read: true } : x))}
                        style={{ cursor: "pointer" }}
                    >
                        <div style={{ fontSize: "20px", marginTop: "2px" }}>{typeIcon(n.type)}</div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "4px" }}>
                                <h4 style={{ fontSize: "14px", fontWeight: n.read ? 400 : 600, color: "var(--color-text-primary)", margin: 0 }}>
                                    {n.title}
                                </h4>
                                <span className="text-muted">{n.time}</span>
                            </div>
                            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", margin: 0, lineHeight: 1.5 }}>
                                {n.message}
                            </p>
                        </div>
                        {!n.read && (
                            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--color-primary-light)", flexShrink: 0, marginTop: "6px" }} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Notifications;
