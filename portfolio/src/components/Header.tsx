import "./Header.css";

export function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">Emre Ekinci</div>
          <ul className="nav-links">
            <li>
              <a href="#about">Hakkımda</a>
            </li>
            <li>
              <a href="#skills">Yetenekler</a>
            </li>
            <li>
              <a href="#projects">Projeler</a>
            </li>
            <li>
              <a href="#experience">Deneyim</a>
            </li>
            <li>
              <a href="#contact">İletişim</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
