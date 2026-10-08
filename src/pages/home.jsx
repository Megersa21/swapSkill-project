import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">LEARN • SHARE • GROW</p>

          <h1>
            Learn skills.
            <br />
            <span>Share knowledge.</span>
          </h1>

          <p className="hero-text">
            SwapSkill is a simple platform where people can learn new skills and
            share what they know.
          </p>

          <div className="hero-buttons">
            <Link to="/register" className="primary-btn">
              Get Started
            </Link>

            <Link to="/profile" className="secondary-btn">
              Explore Skills
            </Link>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-icon">💡</div>
          <h3>Learn Web Development</h3>
          <p>Improve your skills with other learners.</p>

          <div className="progress">
            <div></div>
          </div>

          <small>65% completed</small>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="section-title">
          <p>WHY SwapSkill?</p>
          <h2>Everything you need to grow</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>Learn Skills</h3>
            <p>Discover useful skills and improve yourself every day.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Share Knowledge</h3>
            <p>Share your knowledge and help other people learn.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Grow Together</h3>
            <p>Connect with people and grow your skills together.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to start learning?</h2>
        <p>Join SwapSkill and start building your skills today.</p>

        <Link to="/register" className="primary-btn">
          Create Account
        </Link>
      </section>
    </div>
  );
}

export default Home;
