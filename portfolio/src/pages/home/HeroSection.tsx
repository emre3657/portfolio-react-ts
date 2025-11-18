import "./HeroSection.css";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Merhaba, Ben{" "}
            <span style={{ color: "var(--accent-color)" }}>Emre</span>
          </h1>
          <p>
            Modern web dünyasında kendi yolumu inşa ediyorum. <br />
            Karmaşık sorunları yazılımla basitleştirmeyi seviyorum.
          </p>
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
