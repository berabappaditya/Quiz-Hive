import React, { useState } from "react";
import "./userAuth.scss";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//toast configuration
toast.configure();

function Login({ inmodal, inModalClose, setUserName, setUserToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revpas, setRevpas] = useState("password");

  function showPass() {
    if (revpas === "password") {
      setRevpas("text");
    } else {
      setRevpas("password");
    }
  }

  async function loginHandle(e) {
    e.preventDefault();
    try {
      const userLog = await axios.post("http://localhost:8080/userAuth/login", {
        email: email,
        password: password,
      });
      console.log(userLog);
      toast("successfully logged in");
      inModalClose();
      localStorage.setItem("authToken", userLog.data.auth_token);
      localStorage.setItem("userName", userLog.data.user.name);
      setUserName(localStorage.getItem("userName"));
      setUserToken(localStorage.getItem("authToken"));
    } catch (e) {
      alert(e.message);
    }
  }
  return (
    <div className="sign_modal" style={inmodal}>
      <div className="register">
        <h1 className="header_text">Sign In</h1>
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          className="com_input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type={revpas}
          placeholder="Enter Your password"
          name="password"
          className="com_input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="show_pass d-flex align-items-center justify-content-center">
          <input
            type="checkbox"
            onClick={showPass}
            className="show_pass_input"
          />{" "}
          {"  "}show Password
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="userAuth_btns d-flex align-items-center justify-content-center"
            onClick={(e) => {
              loginHandle(e);
            }}
          >
            Login
          </button>
          <button
            className="userAuth_btns d-flex align-items-center justify-content-center"
            onClick={inModalClose}
          >
            Close <IoMdClose />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
