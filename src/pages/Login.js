import { React, useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  return (


    <React.Fragment><div className="container_sign_in"><h1 className="heading_login">Welcome</h1><form>

      <input type="email" placeholder="email address" />
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password" />
      <button onClick={handleShowClick}>
        {showPassword ? "Hide" : "Show"}
      </button>
        <button>forgot password?</button>
      <button
        type="submit"
      >
        Login
      </button>

    </form><div className="sing_up">
        New to us?<button href="#">Sign Up</button>
      </div></div></React.Fragment>
  );
};

export default Login;
