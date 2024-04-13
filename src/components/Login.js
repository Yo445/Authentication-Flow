import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { useRecoilState } from "recoil";
import { isLoggedInState, userDataState } from "../Atoms/recoilAtoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faFingerprint,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Login() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const [userData, setUserData] = useRecoilState(userDataState);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(isLoggedIn);
  const handleLogin = async () => {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        localStorage.setItem("userDataState", JSON.stringify(data));
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedInState", true);
        console.log(data);

        navigate("/home"); // Navigate to the Home page after successful login
      } else {
        console.error("Login failed");
        // Handle error, e.g., display error message to the user
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error, e.g., display error message to the user
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>
          Hello!
          <br />
          <span>Welcome Back!</span>
        </h2>
        <div className="inputBox">
          <div>
            <input
              type="text"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <FontAwesomeIcon icon={faUser} className="i" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon icon={faLock} className="i" />
          </div>
          <div className="fingerprint">
        <div className="fingerprintBox">
          <FontAwesomeIcon icon={faFingerprint} className="identity" />
          <input type="submit" value="Login" />
        </div>
      </div>


        </div>
      </form>
    </div>
  );
}
