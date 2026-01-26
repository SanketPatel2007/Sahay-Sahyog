import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Sahay Sahyog</h1>
        <div className="nav-buttons">
          <button onClick={() => navigate("/login")}>Login</button>
          <button className="signup" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Report Public Issues Easily</h2>
        <p>
          Upload photos of public problems, track their status, and help improve
          your city.
        </p>

        <div className="hero-buttons">
          <button onClick={() => navigate("/login")}>Report a Problem</button>
          <button className="outline" onClick={() => navigate("/status")}>
            Track Status
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>📸 Upload Photo</h3>
          <p>Capture and upload real issues instantly.</p>
        </div>

        <div className="feature-card">
          <h3>📍 Location Based</h3>
          <p>Report problems with accurate location.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Status Tracking</h3>
          <p>Track complaint progress in real time.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Public Reporting System</p>
      </footer>
    </div>
  );
}

export default Home;
