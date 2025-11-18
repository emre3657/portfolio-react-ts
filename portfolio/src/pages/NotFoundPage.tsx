import { Link } from "react-router";
import { Header } from "../components/Header";
import "./NotFoundPage.css";

export function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="text">Page Not Found</div>
        <Link className="home-link" to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
}
