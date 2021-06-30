import React, { useState } from "react";
import LandingAni from "./LandingAni";
import "./Landing.scss";
import { IoMdClose } from "react-icons/io";
import Register from "./userAuth/Register";
import Login from "./userAuth/Login";
import { useHistory } from "react-router-dom";

function Landing() {
  const [modal, setModal] = useState({});
  const [inmodal, setInModal] = useState({});
  const [upmodal, setUpModal] = useState({});
  const [userName, setUserName] = useState("");
  const [userToken, setUserToken] = useState("");
  const history = useHistory();

  function upModalOpen(e) {
    setUpModal({ display: "block" });
  }
  function upModalClose(e) {
    setUpModal({ display: "none" });
  }

  function inModalOpen(e) {
    setInModal({ display: "block" });
  }
  function inModalClose(e) {
    setInModal({ display: "none" });
  }

  function handlePlay(e) {
    if (userToken) {
      history.push("/quiz");
    } else {
      setModal({ display: "block" });
    }
  }
  function handleClose(e) {
    setModal({ display: "none" });
  }

  function handleSignOpen(e) {
    e.preventDefault();
    handleClose();
    inModalOpen();
  }
  return (
    <div className="landing">
      <div className="sign_modal_landing" style={modal}>
        <h5 className="mb-5">You don't have an account! create one</h5>
        <div className="landing_user_logs super_center">
          <button
            className="landing_btns theme_color"
            onClick={(e) => handleSignOpen(e)}
          >
            Sign In
          </button>
          <button
            className="landing_btns theme_color"
            onClick={(e) => handleClose(e)}
          >
            Close <IoMdClose />
          </button>
        </div>
      </div>
      <Register upmodal={upmodal} upModalClose={upModalClose} />
      <Login
        inmodal={inmodal}
        inModalClose={inModalClose}
        setUserName={setUserName}
        setUserToken={setUserToken}
      />
      <div className="row d-flex justify-content-center">
        <div className="col-6 landing_card">
          <div className="landing_header">
            <LandingAni />
            <h1 className="landing_header_text">Quiz Hive</h1>
            <h3>Online quiz platform</h3>
            <hr className="solid" />
          </div>
          <div className="landing_card_body mt-5">
            <div className="w-100 d-flex align-items-center justify-content-center">
              {userName ? <h5>Hii {userName} now you can start quiz.</h5> : " "}
            </div>

            <div className="landing_user_logs super_center">
              <button
                className="landing_btns theme_color"
                onClick={(e) => inModalOpen(e)}
              >
                Sign In
              </button>
              <button
                className="landing_btns theme_color"
                onClick={(e) => upModalOpen(e)}
              >
                Sign up
              </button>
            </div>
            <div className="super_center mt-3">
              <button
                className="landing_btns anti_theme_color"
                onClick={(e) => handlePlay(e)}
              >
                Play Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
