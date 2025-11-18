import profileImage from "../../assets/images/profile.jpg";
import "./AboutSection.css";

export function AboutSection() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">Hakkımda</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Merhaba! Ben Emre. Web geliştirme yolculuğumda sürekli öğreniyor,
              denedikçe gelişiyor ve üreterek ilerliyorum.
            </p>
            <p>
              Amacım; kullanıcıya değer katan, işlevsel ve modern web
              deneyimleri oluşturmak. Yeni teknolojileri keşfetmek ve bunları
              projelerde hayata geçirmekten keyif alıyorum.
            </p>
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
