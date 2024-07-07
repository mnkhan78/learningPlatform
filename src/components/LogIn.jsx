import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function LogIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      console.log("User signed in:", userCredential.user);
      navigate("/clinicalClasses");
    } catch (error) {
      console.error("Login error:", error.message);
      alert("Error: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {" "}
        <h1>Welcome Back!</h1>
        <p className="login-para">Please sign in to your account.</p>
        <form onSubmit={handleSubmit} className="form">
          {" "}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign In</button>
          <p className="login-para">
            Don't have an account?{" "}
            <Link to="https://rzp.io/l/clinical-classes01">Buy Now</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
