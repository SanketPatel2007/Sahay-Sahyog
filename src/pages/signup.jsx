import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created successfully (demo)");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Create Account</h1>
        <p className="subtitle">Sign up to get started</p>

        <form onSubmit={handleSubmit}>
          <div className="field">
            <input type="text" required />
            <label>Full Name</label>
          </div>

          <div className="field">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="field">
            <input
              type={showPassword ? "text" : "password"}
              required
            />
            <label>Password</label>
            <span
              className="toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button className="login-btn">Sign Up</button>
        </form>

        <div className="footer-text">
          <p>
            Already have an account{" "} <Link to="/"> <strong>Login</strong> </Link> 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
