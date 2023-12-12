import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Signup = () => {
  const [action] = useState("Signup");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field, value) => {
    setLoginData({ ...loginData, [field]: value });
  };

  const handleLogin = () => {
    // 간단한 유효성 검사
    if (!loginData.email || !loginData.password) {
      alert("Please enter both email and password.");
      return;
    }

    // 여기에서 실제 로그인 로직을 구현합니다.
    console.log("Logging in with:", loginData);
    // 로그인 로직 추가: 서버 호출 등

    // 예시: 로그인 성공 시 페이지 이동
    window.open("/Login", "Login");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email ID"
            value={loginData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </div>
      </div>

      <div className="submit-container">
        <div className={"submit"} onClick={() => handleLogin()}>
          Sign Up
        </div>
        <div
          className={"submit"}
          onClick={() => {
            window.open("/Login", "Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default Signup;
