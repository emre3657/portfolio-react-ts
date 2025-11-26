import { Link } from "react-router";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <div className="nf-wrapper">
      <div className="nf-orbit" />

      <div className="nf-card">
        <div className="nf-404-back">404</div>
        <div className="nf-404-front">404</div>

        <p className="nf-message">Kaybolmuş gibisin...</p>
        <p className="nf-sub">
          Aradığın sayfayı bulamadık. Belki de en iyi yol, ana sayfaya
          dönmektir.
        </p>

        <Link to="/" className="nf-button">
          <i className="fa-solid fa-arrow-left" style={{ marginRight: 8 }} />
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
}
