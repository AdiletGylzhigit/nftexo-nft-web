import { Link } from "react-router-dom";
import "../styles/register.css";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const RegisterScreen = ({}: Props) => {
  return (
    <div className="register-container">
      <form className="register-form">
        <Link to="/">
          <div className="register-go-to-home">
            <BiArrowBack />
            <p>Go to Home</p>
          </div>
        </Link>
        <h1 className="register-title">Sign Up</h1>
        <div className="register-input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="username" id="username" />
        </div>
        <div className="register-input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="register-input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="register-input-wrapper">
          <label htmlFor="c-password">Confirm Password</label>
          <input type="c-password" id="c-password" />
        </div>
        <p className="register-forget-pr-text">Forget Password</p>
        <p className="register-to-register">
          Have an account?{" "}
          <Link to="/login">
            <span>Sign In</span>
          </Link>
        </p>
        <button className="register-btn">Sign In</button>
      </form>
    </div>
  );
};

export default RegisterScreen;
