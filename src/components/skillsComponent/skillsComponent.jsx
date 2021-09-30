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
      <div>
        <h3 className="text-white">HABILIDADES</h3>
      </div>
        <div className="d-flex align-content-stretch flex-wrap">
            {skills.map((skill) => {
                return (
                    <div key={skill.name} className="skills-container-content-item">
                        <div className="skills-container-content-item-icon ">
                            <img src={skill.img} alt="icon" />
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  );
}

export default SkillsComponent;
