import { Link } from "react-router-dom";
import "../styles/login.css";
import { BiArrowBack } from "react-icons/bi";

type Props = {};

const LoginScreen = ({}: Props) => {
  return (
    <div className="login-container">
      <form className="login-form">
        <Link to='/'>
          <div className="login-go-to-home">
            <BiArrowBack />
            <p>Go to Home</p>
          </div>
        </Link>
        <h1 className="login-title">Login</h1>
        <div className="login-input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="login-input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <p className="login-forget-pr-text">Forget Password</p>
        <p className="login-to-register">
          Don't have an account?{" "}
          <Link to="/register">
            <span>Sign Up</span>
          </Link>
        </p>
        <button className="login-btn">Sign In</button>
      </form>
    </div>
  );
};

export default LoginScreen;
