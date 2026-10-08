import { Link } from "react-router-dom";
import "./profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <section className="profile-header">
          <div className="profile-avatar">M</div>

          <div className="profile-info">
            <h1>My Profile</h1>
            <p className="profile-name">SwapSkill User</p>
            <p className="profile-bio">
              Learning new skills, sharing knowledge, and growing every day.
            </p>

            <Link to="/settings" className="edit-profile-btn">
              Edit Profile
            </Link>
          </div>
        </section>

        {/* Skills */}
        <section className="profile-section">
          <div className="section-header">
            <h2>My Skills</h2>

            <Link to="/skills/add" className="add-skill-btn">
              + Add Skill
            </Link>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <h3>JavaScript</h3>
              <span>Intermediate</span>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <span>Intermediate</span>
            </div>

            <div className="skill-card">
              <h3>Flutter</h3>
              <span>Intermediate</span>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="profile-stats">
          <div className="stat-card">
            <h2>3</h2>
            <p>Skills</p>
          </div>

          <div className="stat-card">
            <h2>12</h2>
            <p>Connections</p>
          </div>

          <div className="stat-card">
            <h2>5</h2>
            <p>Skills Shared</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Profile;
