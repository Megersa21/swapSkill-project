import { useState } from "react";
import "./setting.css";

function Settings() {
  const [notifications, setNotifications] = useState(true);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Settings saved");
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <h1>Settings</h1>
          <p>Manage your SwapSkill account.</p>
        </div>

        {/* Profile settings */}
        <section className="settings-card">
          <h2>Profile Information</h2>

          <form onSubmit={handleSave}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                defaultValue="SwapSkill User"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                defaultValue="user@example.com"
              />
            </div>

            <div className="form-group">
              <label>Bio</label>
              <textarea
                rows="4"
                placeholder="Tell people about yourself..."
                defaultValue="Learning new skills and sharing knowledge."
              />
            </div>

            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </form>
        </section>

        {/* Notifications */}
        <section className="settings-card">
          <h2>Notifications</h2>

          <div className="setting-row">
            <div>
              <h3>Message Notifications</h3>
              <p>Receive notifications when someone sends you a message.</p>
            </div>

            <label className="switch">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              />

              <span className="slider"></span>
            </label>
          </div>
        </section>

        {/* Account */}
        <section className="settings-card">
          <h2>Account</h2>

          <div className="account-actions">
            <button className="change-password-btn">Change Password</button>

            <button className="logout-btn">Log Out</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Settings;
