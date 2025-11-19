import "./SkillsSection.css";

export function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Yetenekler</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Front-end</h3>
            <ul className="skill-list">
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>TypeScript</li>
              <li>Responsive Tasarım</li>
              <li>React</li>
              <li>Redux Tool Kit - RTK Query</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Back-end</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python (Django/Flask)</li>
              <li>RESTful API'ler</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Veritabanı</h3>
            <ul className="skill-list">
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Microsoft SQL Server</li>
              <li>Veritabanı Tasarımı & Yönetimi</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Diğer Araçlar</h3>
            <ul className="skill-list">
              <li>Git & GitHub</li>
              <li>Jest & Testing Library</li>
              <li>Nginx</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
