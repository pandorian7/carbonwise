import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import "./Tranportation.css";

const Transportation = () => {
  const [formData, setFormData] = useState({
    ownsVehicles: "",
    vehicles: {
      motorcycles: { enabled: false, count: "" },
      cars: { enabled: false, count: "" },
      buses: { enabled: false, count: "" },
      trucks: { enabled: false, count: "" },
      containerTrucks: { enabled: false, count: "" }
    },
    fuelExpenses: "",
    employeesCommute: "",
    commutingDistance: ""

    
  });
  const navigate = useNavigate(); // <-- Add this line

  // ...existing handlers...

  // Replace handlesignup with this function:
  const handleSignup = () => {
    navigate("/signup");
  };



  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleVehicleToggle = (vehicleType, enabled) => {
    setFormData(prev => ({
      ...prev,
      vehicles: {
        ...prev.vehicles,
        [vehicleType]: {
          ...prev.vehicles[vehicleType],
          enabled: enabled
        }
      }
    }));
  };

  const handleVehicleCount = (vehicleType, count) => {
    setFormData(prev => ({
      ...prev,
      vehicles: {
        ...prev.vehicles,
        [vehicleType]: {
          ...prev.vehicles[vehicleType],
          count: count
        }
      }
    }));
  };


  const vehicleTypes = [
    { key: "motorcycles", label: "Motorcycles" },
    { key: "cars", label: "Cars" },
    { key: "buses", label: "Buses" },
    { key: "trucks", label: "Trucks" },
    { key: "containerTrucks", label: "Container Trucks" }
  ];

  return (
    <div className="transportation-profile">
      {/* Header */}
      <header className="transportation-header">
        <div className="header-container">
          <div className="logo-section">
            <div className="logo">
              <svg 
                className="logomark" 
                width="28" 
                height="28" 
                viewBox="0 0 28 28" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M13.9997 2.33334V25.6667M22.2493 5.75042L5.7501 22.2496M25.6663 14H2.33301M22.2493 22.2496L5.7501 5.75042" 
                  stroke="#C1F17E" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="brand-name">CarbonWise</span>
            </div>
          </div>
        </div>
       
      </header>

      {/* Main Content */}
      <main className="transportation-main">
        {/* Progress Bar */}
        <div className="progress-container">
          <Progress value={100} className="progress-bar" />
        </div>

        {/* Form Container */}
        <div className="form-container">
          <div className="step-info">
            <h1 className="step-title">How does your business move?</h1>
            <p className="step-description">
              Transportation can be a significant source of emissions. These details help us provide targeted recommendations.
            </p>
          </div>

          <div className="form-section">
            {/* Does your business own vehicles? */}
            <div className="form-field">
              <label className="field-label">Does your business own vehicles?</label>
              <RadioGroup 
                value={formData.ownsVehicles}
                onValueChange={(value) => handleInputChange("ownsVehicles", value)}
                className="radio-group"
              >
                <div className="radio-item">
                  <RadioGroupItem value="yes" id="vehicles-yes" className="radio-input" />
                  <label htmlFor="vehicles-yes" className="radio-label">Yes</label>
                </div>
                <div className="radio-item">
                  <RadioGroupItem value="no" id="vehicles-no" className="radio-input" />
                  <label htmlFor="vehicles-no" className="radio-label">No</label>
                </div>
              </RadioGroup>
            </div>

            {/* Vehicle Types and Counts */}
            {formData.ownsVehicles === "yes" && (
              <div className="form-field">
                <label className="field-label">If yes: Number and types of vehicles</label>
                <div className="vehicle-info-container">
                  {vehicleTypes.map((vehicle) => (
                    <div key={vehicle.key} className="vehicle-info-row">
                      <div className="switch-container">
                        <Switch
                          checked={formData.vehicles[vehicle.key].enabled}
                          onCheckedChange={(checked) => handleVehicleToggle(vehicle.key, checked)}
                          className="vehicle-switch"
                        />
                        <label className="switch-label">{vehicle.label}</label>
                      </div>
                      <Input
                        type="number"
                        placeholder="0"
                        value={formData.vehicles[vehicle.key].count}
                        onChange={(e) => handleVehicleCount(vehicle.key, e.target.value)}
                        disabled={!formData.vehicles[vehicle.key].enabled}
                        className="vehicle-input"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Average monthly fuel expenses */}
            <div className="form-field">
              <label className="field-label">Average monthly fuel expenses or kilometers traveled</label>
              <Input
                type="text"
                placeholder="Enter amount or distance"
                value={formData.fuelExpenses}
                onChange={(e) => handleInputChange("fuelExpenses", e.target.value)}
                className="text-input"
              />
            </div>

            {/* Do employees commute to work? */}
            <div className="form-field">
              <label className="field-label">Do employees commute to work?</label>
              <RadioGroup 
                value={formData.employeesCommute}
                onValueChange={(value) => handleInputChange("employeesCommute", value)}
                className="radio-group"
              >
                <div className="radio-item">
                  <RadioGroupItem value="yes" id="commute-yes" className="radio-input" />
                  <label htmlFor="commute-yes" className="radio-label">Yes</label>
                </div>
                <div className="radio-item">
                  <RadioGroupItem value="no" id="commute-no" className="radio-input" />
                  <label htmlFor="commute-no" className="radio-label">No</label>
                </div>
              </RadioGroup>
            </div>

            {/* Commuting distance */}
            {formData.employeesCommute === "yes" && (
              <div className="form-field">
                <label className="field-label">If yes: Approximate total commuting distance per week</label>
                <Input
                  type="text"
                  placeholder="Enter distance (e.g., 500 km)"
                  value={formData.commutingDistance}
                  onChange={(e) => handleInputChange("commutingDistance", e.target.value)}
                  className="text-input"
                />
              </div>
            )}

            {/* Action Button */}
            <div className="button-section">
              <Button 
                onClick={handleSignup}
                className="dashboard-button"
              >
                Go To Sign Up 
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transportation;