import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isLoggedInState, userDataState } from "../Atoms/recoilAtoms";
import '../components/style.css';
export default function Home() {
  
  const [userData, setUserData] = useRecoilState(userDataState);
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLoggedInState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {

      navigate("/");
    }
  }, []);

  console.log(isLoggedIn);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedInState")
    localStorage.removeItem("userDataState")
    navigate("/");
  };
  return (
    <div className="login">
      <h1 style={{ textAlign: "center" }}>Hello! <span style={{ color: "green"}}>{userData?.username}</span></h1>
      <span >
        <p style={{ color: "green", fontWeight: "600" }}>Login Successful</p>
      </span>
      <button onClick={handleLogout} className="logout">Logout</button>
    </div>
  );
}
