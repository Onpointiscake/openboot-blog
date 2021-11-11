import { React, useState } from "react";
import { ReactComponent as LoginImage } from "../assets/images/LoginImage.svg";
import { ReactComponent as Thunder } from "../assets/icons/bolt-thunder-svgrepo-com.svg";
import { ReactComponent as EyeClosed } from "../assets/icons/eye-closed.svg";
import { ReactComponent as EyeOpen } from "../assets/icons/eye-open.svg";

import "../styles/login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <div className="container_sign_in">
      <div className="image_container">
        <LoginImage width="100%" height="100%" />
      </div>

      <div className="form_container">
        <h1 className="heading_login">
          Welcome <Thunder width="40px" height="40px" />
        </h1>
        <form className="login_form">
          <input className="email_input" type="email" placeholder="Email" />
          <div className="password_container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password_input"
            />{" "}
            <button className="show_password" onClick={handleShowClick}>
              {showPassword ? (
                <EyeClosed width="20px" height="20px" />
              ) : (
                <EyeOpen width="20px" height="20px" />
              )}
            </button>
          </div>
          <div className="button_container">
            <button className="submit_login" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
