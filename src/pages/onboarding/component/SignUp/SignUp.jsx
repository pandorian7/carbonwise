import React from "react";
import { useNavigate } from "react-router";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/');
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <nav className="web-app-nav-bar">
          <div className="containerSIGNUP">
            <div className="logo">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52985f26cd23a63983c8c81aa160928d676b1f5a?placeholderIfAbsent=true&apiKey=b5a1461333dd454fa1f3e2da578f4fb7"
                alt="CarbonWise Logo"
                className="img"
              />
              <span className="eco-track">CarbonWise</span>
            </div>
          </div>
        </nav>
        
        <div className="signup-content">
        <header className="signup-header">
          <h1>Welcome to CarbonWise</h1>
          <p>Join CarbonWise to start tracking your business's carbon footprint.</p>
        </header>

        <form className="signup-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <p className="helper-text">Minimum 14 characters.</p>
          </div>

          <label className="terms-checkbox">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1667 2H3.83333C3.09695 2 2.5 2.59695 2.5 3.33333V12.6667C2.5 13.403 3.09695 14 3.83333 14H13.1667C13.903 14 14.5 13.403 14.5 12.6667V3.33333C14.5 2.59695 13.903 2 13.1667 2Z"
                stroke="#D6DDE6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>
              Agree to <button type="button" className="text-underline">terms and conditions</button>
            </span>
          </label>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>

        <div className="divider">
          <div className="divider-line"></div>
          <span>or continue with</span>
          <div className="divider-line"></div>
        </div>

        <button className="google-button">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_93_249)">
              <path d="M20.4895 10.1871C20.4895 9.36767 20.4214 8.76973 20.2742 8.14966H10.6992V11.848H16.3195C16.2062 12.7671 15.5943 14.1512 14.2346 15.0813L14.2155 15.2051L17.2429 17.4969L17.4527 17.5174C19.3789 15.7789 20.4895 13.221 20.4895 10.1871Z" fill="#4285F4"/>
              <path d="M10.6993 19.9314C13.4527 19.9314 15.7643 19.0455 17.4527 17.5175L14.2346 15.0814C13.3734 15.6682 12.2176 16.0779 10.6993 16.0779C8.00242 16.0779 5.71352 14.3395 4.89759 11.9367L4.77799 11.9466L1.63003 14.3273L1.58887 14.4392C3.26588 17.6946 6.7106 19.9314 10.6993 19.9314Z" fill="#34A853"/>
              <path d="M4.89748 11.9368C4.68219 11.3167 4.55759 10.6523 4.55759 9.96577C4.55759 9.27921 4.68219 8.61486 4.88615 7.99478L4.88045 7.86272L1.69304 5.44379L1.58876 5.49226C0.897576 6.84318 0.500977 8.3602 0.500977 9.96577C0.500977 11.5713 0.897576 13.0883 1.58876 14.4392L4.89748 11.9368Z" fill="#FBBC05"/>
              <path d="M10.6993 3.85336C12.6142 3.85336 13.906 4.66168 14.6425 5.33718L17.5207 2.59107C15.753 0.985496 13.4527 0 10.6993 0C6.7106 0 3.26588 2.23672 1.58887 5.49214L4.88626 7.99466C5.71352 5.59183 8.00242 3.85336 10.6993 3.85336Z" fill="#EB4335"/>
            </g>
            <defs>
              <clipPath id="clip0_93_249">
                <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
              </clipPath>
            </defs>
          </svg>
          <span>Google</span>
        </button>

        <p className="login-text">
          Already have an account? Log in <button type="button" className="text-underline" onClick={handleLoginClick}>here</button>.
        </p>
      </div>
    </div>
  </div>
  );
};

export default SignUp;