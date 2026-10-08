import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-logo">
          <span>SW</span>
          Skill Wap
        </div>

        <nav className="sidebar-nav">
          <Link to="/dashboard" className="active">
            <span>▦</span>
            Dashboard
          </Link>

          <Link to="/discover">
            <span>⌕</span>
            Discover
          </Link>

          <Link to="/profile">
            <span>♙</span>
            My Profile
          </Link>

          <Link to="/saved">
            <span>♡</span>
            Saved Skills
          </Link>

          <Link to="/messages">
            <span>✉</span>
            Messages
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <Link to="/settings">
            <span>⚙</span>
            Settings
          </Link>

          <div className="sidebar-user">
            <div className="user-avatar">M</div>

            <div>
              <strong>Megersa</strong>
              <small>Student</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="dashboard-main">
        {/* Topbar */}
        <header className="topbar">
          <div className="search-box">
            <span>⌕</span>
            <input type="text" placeholder="Search skills, people..." />
          </div>

          <div className="topbar-right">
            <button className="notification">
              ♢<span></span>
            </button>

            <div className="topbar-user">
              <div className="user-avatar">M</div>

              <div>
                <strong>Megersa Bekele</strong>
                <small>My account</small>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="dashboard-content">
          {/* Welcome */}
          <section className="welcome-section">
            <div>
              <p className="eyebrow">DASHBOARD</p>

              <h1>
                Good morning, Megersa
                <span> 👋</span>
              </h1>

              <p className="welcome-text">
                Keep learning, keep growing, and share what you know.
              </p>
            </div>

            <Link to="/skills/add" className="create-btn">
              + Share a Skill
            </Link>
          </section>

          {/* Stats */}
          <section className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon blue">✦</div>
              <div>
                <span>My Skills</span>
                <strong>12</strong>
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-icon purple">◈</div>
              <div>
                <span>Learning</span>
                <strong>5</strong>
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-icon green">♡</div>
              <div>
                <span>Saved</span>
                <strong>8</strong>
              </div>
            </div>

            <div className="stat-box">
              <div className="stat-icon orange">↗</div>
              <div>
                <span>Connections</span>
                <strong>24</strong>
              </div>
            </div>
          </section>

          {/* Main Grid */}
          <section className="main-grid">
            {/* Continue Learning */}
            <div className="panel learning-panel">
              <div className="panel-header">
                <div>
                  <h2>Continue Learning</h2>
                  <p>Pick up where you left off.</p>
                </div>

                <Link to="/discover">View all</Link>
              </div>

              <div className="learning-card">
                <div className="learning-icon">⚛</div>

                <div className="learning-details">
                  <div className="learning-title">
                    <div>
                      <h3>React Development</h3>
                      <p>Frontend Development</p>
                    </div>

                    <strong>65%</strong>
                  </div>

                  <div className="progress">
                    <div></div>
                  </div>

                  <div className="learning-footer">
                    <span>12 of 18 lessons</span>

                    <button>Continue →</button>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Progress */}
            <div className="panel profile-panel">
              <div className="panel-header">
                <div>
                  <h2>Your Profile</h2>
                  <p>Complete your profile.</p>
                </div>

                <span className="profile-percent">75%</span>
              </div>

              <div className="profile-progress">
                <div></div>
              </div>

              <div className="profile-checklist">
                <div className="completed">✓ Profile photo</div>

                <div className="completed">✓ Add your skills</div>

                <div>○ Add your bio</div>

                <div>○ Add experience</div>
              </div>

              <Link to="/profile" className="profile-btn">
                Complete Profile
              </Link>
            </div>
          </section>

          {/* Recommended */}
          <section className="panel recommended-panel">
            <div className="panel-header">
              <div>
                <h2>Recommended for you</h2>
                <p>Skills you might be interested in.</p>
              </div>

              <Link to="/discover">Explore all</Link>
            </div>

            <div className="recommended-grid">
              <div className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-logo node">JS</div>

                  <button>♡</button>
                </div>

                <h3>Node.js</h3>
                <p>Backend Development</p>

                <div className="skill-card-footer">
                  <span>Intermediate</span>
                  <small>1.2k learners</small>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-logo design">UI</div>

                  <button>♡</button>
                </div>

                <h3>UI / UX Design</h3>
                <p>Design & Creativity</p>

                <div className="skill-card-footer">
                  <span>Beginner</span>
                  <small>850 learners</small>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-card-top">
                  <div className="skill-logo flutter">FL</div>

                  <button>♡</button>
                </div>

                <h3>Flutter</h3>
                <p>Mobile Development</p>

                <div className="skill-card-footer">
                  <span>Intermediate</span>
                  <small>620 learners</small>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
