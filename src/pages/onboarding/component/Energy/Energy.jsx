import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/Button";
import "./Energy.css";
import { toast } from "react-toastify";

const Energy = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    energyProvider: "",
    electricityBill: "",
    renewableEnergy: "",
    naturalGas: ""
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSkip = () => {
    navigate('/transportation');
  };

  // Validation: check if all fields are filled
  const isFormValid =
    formData.energyProvider.trim() !== "" &&
    formData.electricityBill.trim() !== "" &&
    formData.renewableEnergy.trim() !== "" &&
    formData.naturalGas.trim() !== "";

  const handleContinue = () => {
    if (isFormValid) {
      navigate("/transportation");
    } else {
      toast.dismiss("You should fill all details.");
    }
  };

 

  return (
    <div className="energy-container">
      {/* Navigation Header */}
      <div className="energy-nav">
        <div className="nav-content">
          <div className="logo-container">
            <div className="logo-icon">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="energy-content">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="energy-progress">
            <div className="progress-fill" style={{width: '75%'}}></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="form-container">
          {/* Header */}
          <div className="form-header">
            <h1 className="form-title">Let's understand your energy usage</h1>
            <p className="form-subtitle">
              Don't worry if you don't have exact figures. You can provide estimates now and update them later.
            </p>
          </div>

          {/* Form Fields */}
          <div className="form-section">
            {/* Energy Provider */}
            <div className="field-group">
              <label className="field-label">Primary energy provider</label>
              <div className="select-container">
                <select
                  value={formData.energyProvider}
                  onChange={(e) => handleInputChange("energyProvider", e.target.value)}
                  className="energy-select"
                >
                  <option value="" disabled>Select provider</option>
                  <option value="local-electric">Local Electric Company</option>
                  <option value="green-energy">Green Energy Co.</option>
                  <option value="power-grid">PowerGrid Inc.</option>
                  <option value="other">Other</option>
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#696C72" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Electricity Bill */}
            <div className="field-group">
              <label className="field-label">Average monthly electricity bill</label>
              <div className="select-container">
                <select
                  value={formData.electricityBill}
                  onChange={(e) => handleInputChange("electricityBill", e.target.value)}
                  className="energy-select"
                >
                  <option value="" disabled>Select range</option>
                  <option value="0-50">$0 - $50</option>
                  <option value="51-100">$51 - $100</option>
                  <option value="101-200">$101 - $200</option>
                  <option value="201-300">$201 - $300</option>
                  <option value="301-500">$301 - $500</option>
                  <option value="500+">$500+</option>
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#696C72" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Renewable Energy */}
            <div className="field-group">
              <label className="field-label">Do you use renewable energy?</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="renewable-yes"
                    name="renewableEnergy"
                    value="yes"
                    checked={formData.renewableEnergy === 'yes'}
                    onChange={(e) => handleInputChange('renewableEnergy', e.target.value)}
                    className="radio-input"
                  />
                  <label htmlFor="renewable-yes" className="radio-label">Yes</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="renewable-no"
                    name="renewableEnergy"
                    value="no"
                    checked={formData.renewableEnergy === 'no'}
                    onChange={(e) => handleInputChange('renewableEnergy', e.target.value)}
                    className="radio-input"
                  />
                  <label htmlFor="renewable-no" className="radio-label">No</label>
                </div>
              </div>
            </div>

            {/* Natural Gas */}
            <div className="field-group">
              <label className="field-label">Do you use natural gas?</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="gas-yes"
                    name="naturalGas"
                    value="yes"
                    checked={formData.naturalGas === 'yes'}
                    onChange={(e) => handleInputChange('naturalGas', e.target.value)}
                    className="radio-input"
                  />
                  <label htmlFor="gas-yes" className="radio-label">Yes</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="gas-no"
                    name="naturalGas"
                    value="no"
                    checked={formData.naturalGas === 'no'}
                    onChange={(e) => handleInputChange('naturalGas', e.target.value)}
                    className="radio-input"
                  />
                  <label htmlFor="gas-no" className="radio-label">No</label>
                </div>
              </div>
            </div>
          </div>

           <div className="field-group">
              <label className="field-label">If yes: Average monthly gas usage</label>
              <div className="select-container">
                <select
                  value={formData.electricityBill}
                  onChange={(e) => handleInputChange("electricityBill", e.target.value)}
                  className="energy-select"
                >
                  <option value="" disabled>Select range</option>
                  <option value="0-50">Less than Rs. 5000</option>
                  <option value="51-100">Rs. 5000 - 20,000</option>
                  <option value="101-200">Rs. 20,000 - 100,000</option>
                  <option value="201-300">More than Rs. 100,000</option>
            
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#696C72" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>


          {/* Buttons */}
          <div className="button-section">
           <Button
  onClick={handleContinue}
  className="continue-button"
>
  Continue
</Button>
            <button 
              onClick={handleSkip}
              className="skip-button"
            >
              Skip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;