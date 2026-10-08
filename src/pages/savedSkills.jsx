import { Link } from "react-router-dom";
import "./saveSkill.css";

function SavedSkills() {
  const savedSkills = [
    {
      id: 1,
      name: "React Development",
      category: "Programming",
      level: "Intermediate",
      user: "Abel",
    },
    {
      id: 2,
      name: "UI/UX Design",
      category: "Design",
      level: "Beginner",
      user: "Sara",
    },
    {
      id: 3,
      name: "Node.js",
      category: "Programming",
      level: "Intermediate",
      user: "Daniel",
    },
  ];

  return (
    <div className="saved-skills">
      <div className="saved-header">
        <div>
          <h1>Saved Skills</h1>
          <p>Skills you saved to learn later.</p>
        </div>
      </div>

      {savedSkills.length === 0 ? (
        <div className="empty-saved">
          <h2>No saved skills</h2>
          <p>Discover a skill and save it here.</p>

          <Link to="/discover" className="discover-btn">
            Discover Skills
          </Link>
        </div>
      ) : (
        <div className="saved-grid">
          {savedSkills.map((skill) => (
            <div className="saved-card" key={skill.id}>
              <div className="saved-card-top">
                <div className="saved-icon">{skill.name.charAt(0)}</div>

                <span>{skill.level}</span>
              </div>

              <h2>{skill.name}</h2>

              <p className="saved-category">{skill.category}</p>

              <p className="saved-user">
                Shared by <strong>{skill.user}</strong>
              </p>

              <div className="saved-actions">
                <Link to={`/skills/${skill.id}`} className="view-btn">
                  View Skill
                </Link>

                <button className="remove-btn">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedSkills;
