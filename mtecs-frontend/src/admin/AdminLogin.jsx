import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const login = async () => {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      nav("/admin/dashboard"); // corrected route
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h2 className="login-title">Admin Panel</h2>
        <p className="login-sub">Secure access only</p>

        <div className="login-input-group">
          <input
            type="email"
            placeholder="Email address"
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="login-input-group">
          <input
            type="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={login}>
          Login
        </button>

      </div>
    </div>
  );
}