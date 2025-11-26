import { useApiStatus } from "../context/customHooks";
import { ApiStatus } from "./ApiStatus";
import "./Header.css";

export function Header() {
  const { state: apiState } = useApiStatus();

  return (
    <header className={apiState === "success" ? "api-state-success" : ""}>
      <div className="logo">
        <a href="#">Emre Ekinci</a>
      </div>
      <nav>
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
      <ApiStatus />
    </header>
  );
}
