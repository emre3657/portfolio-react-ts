import "./FooterSection.css";
import { FOOTER } from "../../../data/footer";

export function FooterSection() {
  const { author } = FOOTER;
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div>
            <div className="footer-logo">{author.name}</div>
            <p>{author.title}</p>
          </div>
          <div className="social-links">
            <a
              href={`https://${author.links.gitHub}`}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href={`https://${author.links.linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2025 Emre Ekinci. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
