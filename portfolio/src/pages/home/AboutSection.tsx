import { ABOUT } from "../../data/about";
import profileImage from "../../assets/images/profile.jpg";
import "./AboutSection.css";

export function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <div className="about-text">
            {ABOUT.map((info) => (
              <p>{info}</p>
            ))}
            <a href="#contact" className="btn" style={{ marginTop: 20 }}>
              İletişime Geç
            </a>
          </div>

          <div className="about-image">
            <img src={profileImage} alt="Profil Fotoğrafı" />
          </div>
        </div>
      </div>
    </section>
  );
}
