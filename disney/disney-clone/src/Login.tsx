import { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState(""); // User ID state
  const [password, setPassword] = useState(""); // Password state
  const [error, setError] = useState(""); // Hold error message, if any

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Sending POST request to the login endpoint
      const response = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          userId: username, // Send username as userId
          password: password,
        }
      );
      console.log(username);
      console.log(password);

      // If login is successful, store JWT token
      const token = response.data.token;
      localStorage.setItem("token", token); // Store token in localStorage or sessionStorage
      alert("Login successful!");
    } catch (error: any) {
      // If there's an error (invalid credentials, server error, etc.), display an error message
      setError("Invalid credentials or server error!!");
      console.error(error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="login-container">
      <h2>ログイン</h2>
      {error && <p className="error-message">{error}</p>}{" "}
      {/* Display error message */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">ユーザーID</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
