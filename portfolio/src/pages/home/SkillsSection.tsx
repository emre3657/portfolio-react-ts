import { SKILLS } from "../../data/skills";
import "./SkillsSection.css";

export function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Yetenekler</h2>
        <div className="skills-container">
          {SKILLS.map((skill) => (
            <div key={skill.category} className="skill-category">
              <h3>{skill.category}</h3>
              <ul className="skill-list">
                {skill.experience.map((experience) => (
                  <li key={skill.category + "/" + experience}>{experience}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
