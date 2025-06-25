"use client";
import React from 'react';
import { useNavigate } from 'react-router';
import './Logged.css';

const NavigationBar = () => {
  return (
    <nav className="web-app-nav-bar">
      <div className="container">
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
  );
};

const ActionButtons = () => {
  const navigate = useNavigate();
  
  const handleContinueClick = () => {
    navigate('/busness');
  };
  
  return (
    <div className="buttons" style={{ display: 'flex', flexDirection: 'column' }}>
      <button className="button-filled-standard" onClick={handleContinueClick}>
        Continue
      </button>
      
    </div>
  );
};

const OnboardingContent = () => {
  return (
    <section className="onboarding-short-text-response">
      <div className="container-2">
        <div className="step-info">
          <h1 className="welcome-to-carbon-wise">
            Let's set up your business profile to get started.
          </h1>
          <p className="profile-description">
            CarbonWise helps small businesses like yours track and reduce
            carbon emissions. Your profile helps us provide accurate
            calculations and recommendations tailored to your needs.
          </p>
        </div>
        <ActionButtons />
      </div>
    </section>
  );
};

export default function Logged() {
  return (
    <main className="login">
      <NavigationBar />
      <OnboardingContent />
    </main>
  );
}