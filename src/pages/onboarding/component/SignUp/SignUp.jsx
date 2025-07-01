import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Handle input field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get business info from localStorage
   
    const facilitiesInfo = JSON.parse(localStorage.getItem("facilitiesInfo") || "{}");

    // If you have an id, get it here (otherwise remove id)
    

    try {
      console.log(facilitiesInfo)
      await axios.post("https://carbonwise-backend-1.onrender.com/users/addUser", {
        name: formData.name,
        
        email: formData.email,
        password: formData.password,
        business:facilitiesInfo // Assuming you have an id in facilitiesInfo
       // Assuming you have an ownership type in facilitiesInfo
      });
      
      alert("Registered successfully!");
      navigate("/dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data ||
        error.message;

      alert("Error: " + errorMessage);
    }
  };

  // Handle login button click
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

          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
              <p className="helper-text">Minimum 14 characters.</p>
            </div>

            <label className="terms-checkbox">
              <input type="checkbox" required />
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

          <button className="google-buttonl">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="google-icon"
            >
              <g clipPath="url(#clip0_53_34176)">
                <path
                  d="M20.4895 10.1871C20.4895 9.36767 20.4214 8.76973 20.2742 8.14966H10.6992V11.848H16.3195C16.2062 12.7671 15.5943 14.1512 14.2346 15.0813L14.2155 15.2051L17.2429 17.4969L17.4527 17.5174C19.3789 15.7789 20.4895 13.221 20.4895 10.1871Z"
                  fill="#4285F4"
                />
                <path
                  d="M10.6992 19.9314C13.4526 19.9314 15.7642 19.0455 17.4526 17.5175L14.2345 15.0814C13.3733 15.6682 12.2175 16.0779 10.6992 16.0779C8.00233 16.0779 5.71343 14.3395 4.8975 11.9367L4.7779 11.9466L1.62994 14.3273L1.58878 14.4392C3.26579 17.6946 6.71051 19.9314 10.6992 19.9314Z"
                  fill="#34A853"
                />
                <path
                  d="M4.89757 11.9368C4.68228 11.3167 4.55768 10.6523 4.55768 9.96577C4.55768 9.27921 4.68228 8.61486 4.88624 7.99478L4.88054 7.86272L1.69313 5.44379L1.58885 5.49226C0.897668 6.84318 0.501068 8.3602 0.501068 9.96577C0.501068 11.5713 0.897668 13.0883 1.58885 14.4392L4.89757 11.9368Z"
                  fill="#FBBC05"
                />
                <path
                  d="M10.6992 3.85336C12.6141 3.85336 13.9059 4.66168 14.6424 5.33718L17.5206 2.59107C15.7529 0.985496 13.4526 0 10.6992 0C6.71051 0 3.26579 2.23672 1.58878 5.49214L4.88617 7.99466C5.71343 5.59183 8.00233 3.85336 10.6992 3.85336Z"
                  fill="#EB4335"
                />
              </g>
              <defs>
                <clipPath id="clip0_53_34176">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            <span className="google-text">Google</span>
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
