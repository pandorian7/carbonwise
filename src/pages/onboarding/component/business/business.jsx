import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/Button";
import "./business.css";

const Business = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    industry: "",
    employeeSize: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.industry.trim() !== "" &&
    formData.employeeSize.trim() !== "";

  const handleContinue = () => {
    if (!isFormValid) {
      alert("You should fill all details.");
      return;
    }

    // Save business info to localStorage for use on the facilities page
    localStorage.setItem(
      "businessInfo",
      JSON.stringify({
        name: formData.name,
        industry: formData.industry,
        employeeSize: formData.employeeSize,
      })
    );

    navigate("/facilities");
  };

  return (
    <div className="business-container">
      {/* Navigation Header */}
      <div className="business-nav">
        <div className="nav-content">
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.0002 2.33334V25.6667M22.2497 5.75042L5.75058 22.2496M25.6668 14H2.3335M22.2497 22.2496L5.75058 5.75042"
                  stroke="#C1F17E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="logo-text">CarbonWise</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="business-content">
        <div className="progress-container">
          <div className="business-progress">
            <div className="progress-fill" style={{ width: "25%" }}></div>
          </div>
        </div>

        <div className="form-container">
          <div className="form-header">
            <h1 className="form-title">Tell us about your business</h1>
            <p className="form-subtitle">
              This information helps us compare your carbon footprint with
              similar businesses in your industry.
            </p>
          </div>

          <div className="form-section">
            <div className="field-group">
              <label className="field-label">Business name</label>
              <input
                type="text"
                placeholder="Enter your business name"
                value={formData.name}
                onChange={(e) =>
                  handleInputChange("name", e.target.value)
                }
                className="business-input"
              />
            </div>

            <div className="field-group">
              <label className="field-label">Industry type</label>
              <div className="select-container">
                <select
                  value={formData.industry}
                  onChange={(e) =>
                    handleInputChange("industry", e.target.value)
                  }
                  className="business-select"
                >
                  <option value="" disabled>
                    Select industry type
                  </option>
                  <option value="technology">Technology</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="food-beverage">Food & Beverage</option>
                  <option value="construction">Construction</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="transportation">Transportation</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#696C72"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Number of employees</label>
              <div className="select-container">
                <select
                  value={formData.employeeSize}
                  onChange={(e) =>
                    handleInputChange("employeeSize", e.target.value)
                  }
                  className="business-select"
                >
                  <option value="" disabled>
                    Employee Size
                  </option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 6L8 10L12 6"
                      stroke="#696C72"
                      strokeWidth="1.33"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="button-section">
            <Button onClick={handleContinue} className="continue-button">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
