import React, { useState } from "react";
import "./LoginSignup.css";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const Login = () => {
  const [action] = useState("Login");

  // 가상의 로그인 상태를 나타내는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 이메일과 패스워드 상태
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 이메일 입력 핸들러
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // 패스워드 입력 핸들러
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인 버튼 클릭 핸들러
  const handleLogin = () => {
    // 여기에서 실제 로그인 로직을 구현합니다.
    // 예시: 서버 호출 등

    // 가상의 로그인 성공 조건
    if (email === "example@example.com" && password === "password123") {
      setIsLoggedIn(true);

      // 로그인 성공 시 페이지 이동 (예시: 홈 페이지로 이동)
      window.open("/Dashboard", "_self");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className="forgot-password">
        Lost Password? <span>Click Here!</span>
      </div>
      <div className="submit-container">
        <div
          className={"submit"}
          onClick={() => {
            window.open("/", "Signup");
          }}
        >
          Signup
        </div>
        <div className={"submit"} onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
};

export default Login;
