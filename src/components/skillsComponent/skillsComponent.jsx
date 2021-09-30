import { React, useState, useEffect } from "react";
import "./skillsComponent.css";

function SkillsComponent() {
  const url =
    "https://portfolio-back-heroku.herokuapp.com/api/skills/getSkills";
  const [skills, setSkills] = useState([]);
  const getSkills = async () => {
    const response = await fetch(url);
    const skillsData = await response.json();
    setSkills(skillsData);
  };
  useEffect(() => {
    getSkills();
  });
  return (
    <section className="skills-container">
      <div className="skills-container--text">
        <h3 className="text-white">HABILIDADES</h3>
      </div>
      <div className="d-flex align-content-stretch flex-wrap skills-container-content">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="skills-container-content-item">
              <div></div>
              <img
                src={skill.img}
                alt="icon"
                className="skills-container-content-item-icon--image"
              />
              <div>
                <p className="text-white skills-container-content-item--text">{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SkillsComponent;
