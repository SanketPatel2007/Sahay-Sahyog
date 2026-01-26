import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in successfully (demo)");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Welcome Back</h1>
        <p className="subtitle">Login to your account</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="field">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button className="login-btn">Login</button>
        </form>

        <div className="footer-text">
          <span>Forgot password?</span>
            <p>
                Don’t have an account?{" "}
                <Link to="/signup">
                <strong>Sign up</strong>
                </Link>
            </p>

        </div>
      </div>
    </div>
  );
};

export default Login;
