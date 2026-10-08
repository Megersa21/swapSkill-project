import { Link } from "react-router-dom";
import "./MySkills.css";

function MySkills() {
  const skills = [
    {
      id: 1,
      name: "JavaScript",
      level: "Intermediate",
      description: "I can help with JavaScript fundamentals and projects.",
    },
    {
      id: 2,
      name: "React",
      level: "Intermediate",
      description: "I can teach React components, props, and state.",
    },
    {
      id: 3,
      name: "Flutter",
      level: "Intermediate",
      description: "I can share my experience building Flutter apps.",
    },
  ];

  return (
    <div className="my-skills">
      <div className="page-header">
        <div>
          <h1>My Skills</h1>
          <p>Skills you can share with other people.</p>
        </div>

        <Link to="/skills/add" className="add-btn">
          + Add Skill
        </Link>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.id}>
            <h2>{skill.name}</h2>

            <span>{skill.level}</span>

            <p>{skill.description}</p>

            <div className="skill-actions">
              <button>Edit</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkills;
