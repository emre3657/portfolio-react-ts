import { HERO } from "../../data/hero";
import "./HeroSection.css";

export function HeroSection() {
  const { name, heading } = HERO;
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Merhaba, Ben{" "}
            <span style={{ color: "var(--accent-color)" }}>{name}</span>
          </h1>
          {heading.map((head, i) => (
            <span key={i} className="heading">
              {head}
              {i < heading.length - 1 && <br />}
            </span>
          ))}
          <div className="hero-buttons">
            <a href="#projects" className="btn">
              Projelerimi Gör
            </a>
            <a
              href="#contact"
              className="btn"
              style={{
                backgroundColor: "transparent",
                color: "var(--primary-color)",
                border: "2px solid var(--primary-color)",
              }}
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
