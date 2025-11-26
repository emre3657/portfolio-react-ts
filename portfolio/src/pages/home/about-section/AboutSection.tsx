import { Fragment } from "react";
import { ABOUT } from "../../../data/about";
import profileImage from "../../../assets/images/profile.jpg";
import "./AboutSection.css";

export function AboutSection() {
  const { title, payload } = ABOUT;

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="about-content">
          <div className="about-text">
            {payload.map((info, i) => (
              <Fragment key={i}>
                <p>{info}</p>
                {i !== payload.length - 1 && <br />}
              </Fragment>
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
