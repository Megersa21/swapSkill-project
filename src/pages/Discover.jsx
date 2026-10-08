import { Link } from "react-router-dom";
import "./Discover.css";

function Discover() {
  const skills = [
    {
      id: 1,
      name: "UI/UX Design",
      level: "Beginner",
      user: "Abel",
      category: "Design",
    },
    {
      id: 2,
      name: "Node.js",
      level: "Intermediate",
      user: "Sara",
      category: "Programming",
    },
    {
      id: 3,
      name: "Python",
      level: "Advanced",
      user: "Daniel",
      category: "Programming",
    },
    {
      id: 4,
      name: "Graphic Design",
      level: "Intermediate",
      user: "Hana",
      category: "Design",
    },
    {
      id: 5,
      name: "Flutter",
      level: "Intermediate",
      user: "Samuel",
      category: "Mobile",
    },
    {
      id: 6,
      name: "Digital Marketing",
      level: "Beginner",
      user: "Meron",
      category: "Business",
    },
  ];

  return (
    <div className="discover">
      <div className="discover-header">
        <div>
          <h1>Discover Skills</h1>
          <p>Find people and skills you can learn from.</p>
        </div>
      </div>

      <div className="discover-search">
        <input type="text" placeholder="Search for a skill..." />

        <button>Search</button>
      </div>

      <div className="categories">
        <button>All</button>
        <button>Programming</button>
        <button>Design</button>
        <button>Mobile</button>
        <button>Business</button>
      </div>

      <div className="skill-grid">
        {skills.map((skill) => (
          <div className="discover-card" key={skill.id}>
            <div className="card-top">
              <div className="skill-avatar">{skill.name.charAt(0)}</div>

              <span>{skill.level}</span>
            </div>

            <h2>{skill.name}</h2>

            <p className="category">{skill.category}</p>

            <p className="teacher">
              Shared by <strong>{skill.user}</strong>
            </p>

            <Link to={`/skills/${skill.id}`} className="view-skill">
              View Skill →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Discover;
