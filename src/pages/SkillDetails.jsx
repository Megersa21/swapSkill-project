import { Link, useParams } from "react-router-dom";
import "./SkillDetails.css";

function SkillDetails() {
  const { id } = useParams();

  return (
    <div className="skill-details">
      <Link to="/discover" className="back-link">
        ← Back to Discover
      </Link>

      <div className="skill-details-card">
        <div className="skill-details-icon">R</div>

        <div className="skill-details-content">
          <span className="skill-level">Intermediate</span>

          <h1>React Development</h1>

          <p className="skill-category">Programming</p>

          <p className="skill-description">
            Learn React development from someone who already has experience with
            it. You can exchange your own skills and learn together.
          </p>

          <div className="skill-owner">
            <div className="owner-avatar">A</div>

            <div>
              <strong>Abel</strong>
              <p>Skill Swap member</p>
            </div>
          </div>

          <div className="skill-actions">
            <button className="swap-btn">Request Skill Swap</button>

            <button className="save-btn">♡ Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillDetails;
