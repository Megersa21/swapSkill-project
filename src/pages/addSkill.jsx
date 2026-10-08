import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddSkill.css";

function AddSkill() {
  const navigate = useNavigate();

  const [skill, setSkill] = useState({
    name: "",
    category: "",
    level: "",
    description: "",
  });

  const handleChange = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(skill);

    navigate("/my-skills");
  };

  return (
    <div className="add-skill-page">
      <div className="add-skill-container">
        <div className="add-skill-header">
          <h1>Share a Skill</h1>
          <p>Add a skill that you can teach or share with others.</p>
        </div>

        <form className="add-skill-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Skill Name</label>

            <input
              type="text"
              name="name"
              value={skill.name}
              onChange={handleChange}
              placeholder="e.g. React Development"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category</label>

              <select
                name="category"
                value={skill.category}
                onChange={handleChange}
                required
              >
                <option value="">Select category</option>
                <option value="Programming">Programming</option>
                <option value="Design">Design</option>
                <option value="Business">Business</option>
                <option value="Mobile">Mobile</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Skill Level</label>

              <select
                name="level"
                value={skill.level}
                onChange={handleChange}
                required
              >
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description</label>

            <textarea
              name="description"
              value={skill.description}
              onChange={handleChange}
              placeholder="Describe what you can teach..."
              rows="5"
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/my-skills")}
            >
              Cancel
            </button>

            <button type="submit" className="submit-btn">
              Add Skill
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddSkill;
