import React, { useState } from "react";

interface ToggleProps {
  active: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ active, onToggle }) => (
  <div className={active ? "toggle active" : "toggle"} onClick={onToggle} />
);

const Settings: React.FC = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [autoLogout, setAutoLogout] = useState(true);

  return (
    <div>
      <div className="page-header">
        <h1 className="heading-page">Settings</h1>
      </div>

      {/* General */}
      <div className="settings-section">
        <h2 className="heading-section mb-4">General</h2>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">Language</div>
            <div className="text-secondary">Select your preferred language</div>
          </div>
          <select className="form-select w-40">
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">Dark Mode</div>
            <div className="text-secondary">Enable dark theme</div>
          </div>
          <Toggle active={darkMode} onToggle={() => setDarkMode(!darkMode)} />
        </div>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">Auto Logout</div>
            <div className="text-secondary">
              Automatically logout after 30 minutes of inactivity
            </div>
          </div>
          <Toggle
            active={autoLogout}
            onToggle={() => setAutoLogout(!autoLogout)}
          />
        </div>
      </div>

      {/* Security */}
      <div className="settings-section">
        <h2 className="heading-section mb-4">Security</h2>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">Two-Factor Authentication</div>
            <div className="text-secondary">
              Add an extra layer of security to your account
            </div>
          </div>
          <Toggle
            active={twoFactor}
            onToggle={() => setTwoFactor(!twoFactor)}
          />
        </div>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">Session History</div>
            <div className="text-secondary">
              View and manage your active sessions
            </div>
          </div>
          <button className="btn btn-outline btn-sm">View Sessions</button>
        </div>
      </div>

      {/* Notifications */}
      <div className="settings-section">
        <h2 className="heading-section mb-4">Notification Preferences</h2>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">Email Notifications</div>
            <div className="text-secondary">Receive updates via email</div>
          </div>
          <Toggle
            active={emailNotif}
            onToggle={() => setEmailNotif(!emailNotif)}
          />
        </div>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">SMS Notifications</div>
            <div className="text-secondary">Receive updates via SMS</div>
          </div>
          <Toggle active={smsNotif} onToggle={() => setSmsNotif(!smsNotif)} />
        </div>
        <div className="settings-row">
          <div>
            <div className="text-sm font-medium">Push Notifications</div>
            <div className="text-secondary">Browser push notifications</div>
          </div>
          <Toggle
            active={pushNotif}
            onToggle={() => setPushNotif(!pushNotif)}
          />
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        <button className="btn btn-primary">Save Changes</button>
        <button className="btn btn-secondary">Reset to Default</button>
      </div>
    </div>
  );
};

export default Settings;
