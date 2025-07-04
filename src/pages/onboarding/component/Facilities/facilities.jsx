import { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios'; // Make sure axios is imported
import { Button } from '@/components/ui/Button';
import './facilities.css';
import { toast } from 'react-toastify';

const Facilities = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: '',
    country: '',
    additionalLocations: '',
    ownershipType: '',
    buildingType: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid =
    formData.location.trim() !== "" &&
    formData.country.trim() !== "" &&
    formData.additionalLocations.trim() !== "" &&
    formData.ownershipType.trim() !== "" &&
    formData.buildingType.trim() !== "";

  const handleContinue = async () => {
    if (!isFormValid) {
      alert("You should fill all details.");
      return;
    }
     
    // Get data from localStorage
    const businessInfo = JSON.parse(localStorage.getItem('businessInfo') || '{}');

    try {
      const res = await axios.post("https://carbonwise-backend-1.onrender.com/businesses/addBusiness", {
        name: businessInfo.name,
        industry: businessInfo.industry,
        location: formData.location,
        country: formData.country,
        additionalLocations: formData.additionalLocations,
        ownershipType: formData.ownershipType,
        buildingType: formData.buildingType
      });

   localStorage.setItem(
      "facilitiesInfo",
      JSON.stringify(res.data)
    );


      toast.success("Facilities data saved successfully!");
      navigate("/energy");
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        error.response?.data?.error ||
        JSON.stringify(error.response?.data) ||
        error.message;

      toast.error("Error saving facility data: " + errorMsg);
    }
  };



  return (
    <div className="facilities-container">
      {/* Navigation Header */}
      <div className="facilities-nav">
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
      <div className="facilities-content">
        {/* Progress Bar */}
        <div className="progress-container">
          <div className="facilities-progress">
            <div className="progress-fill" style={{ width: '50%' }}></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="form-container">
          {/* Header */}
          <div className="form-header">
            <h1 className="form-title">Where do you operate?</h1>
            <p className="form-subtitle">
              Your facility details help us calculate more accurate emissions from heating, cooling, and electricity usage.
            </p>
          </div>

          {/* Form Fields */}
          <div className="form-section">
            {/* Primary Location */}
            <div className="field-group">
              <label className="field-label">Primary location</label>
              <input
                type="text"
                placeholder="Location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)} required
                className="facilities-input"
              />
            </div>



            {/* Additional Locations */}
            <div className="field-group">
              <label className="field-label">Number of additional locations</label>
              <input
                type="number"
                placeholder="Label"
                value={formData.additionalLocations}
                onChange={(e) => handleInputChange('additionalLocations', e.target.value)} required
                className="facilities-input"
              />
            </div>

            {/* Location Size */}
            <div className="field-group">
              <label className="field-label">Country</label>
              <div className="select-container">
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)} required
                  className="facilities-select"
                > <option value="" disabled>Select your country</option>
                  <option value="australia">Australia</option>
                  <option value="austria">Austria</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="belgium">Belgium</option>
                  <option value="bhutan">Bhutan</option>
                  <option value="brunei">Brunei</option>
                  <option value="bulgaria">Bulgaria</option>
                  <option value="cambodia">Cambodia</option>
                  <option value="canada">Canada</option>
                  <option value="china">China</option>
                  <option value="croatia">Croatia</option>
                  <option value="cyprus">Cyprus</option>
                  <option value="czechia">Czechia</option>
                  <option value="denmark">Denmark</option>
                  <option value="estonia">Estonia</option>
                  <option value="eu-27">EU-27</option>
                  <option value="finland">Finland</option>
                  <option value="france">France</option>
                  <option value="germany">Germany</option>
                  <option value="greece">Greece</option>
                  <option value="hong-kong">Hong Kong</option>
                  <option value="hungary">Hungary</option>
                  <option value="iceland">Iceland</option>
                  <option value="india">India</option>
                  <option value="indonesia">Indonesia</option>
                  <option value="ireland">Ireland</option>
                  <option value="italy">Italy</option>
                  <option value="japan">Japan</option>
                  <option value="laos">Laos</option>
                  <option value="latvia">Latvia</option>
                  <option value="lithuania">Lithuania</option>
                  <option value="luxembourg">Luxembourg</option>
                  <option value="macao">Macao</option>
                  <option value="malaysia">Malaysia</option>
                  <option value="maldives">Maldives</option>
                  <option value="malta">Malta</option>
                  <option value="mongolia">Mongolia</option>
                  <option value="myanmar">Myanmar</option>
                  <option value="nepal">Nepal</option>
                  <option value="netherlands">Netherlands</option>
                  <option value="new-zealand">New Zealand</option>
                  <option value="north-korea">North Korea</option>
                  <option value="norway">Norway</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="papua-new-guinea">Papua New Guinea</option>
                  <option value="philippines">Philippines</option>
                  <option value="poland">Poland</option>
                  <option value="portugal">Portugal</option>
                  <option value="qatar">Qatar</option>
                  <option value="romania">Romania</option>
                  <option value="singapore">Singapore</option>
                  <option value="slovakia">Slovakia</option>
                  <option value="slovenia">Slovenia</option>
                  <option value="south-korea">South Korea</option>
                  <option value="spain">Spain</option>
                  <option value="sri-lanka">Sri Lanka</option>
                  <option value="sweden">Sweden</option>
                  <option value="taiwan">Taiwan</option>
                  <option value="thailand">Thailand</option>
                  <option value="turkey">Turkey</option>
                  <option value="uk">UK</option>
                  <option value="usa">USA</option>
                  <option value="vietnam">Vietnam</option>
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#696C72" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Ownership Type */}
            <div className="field-group">
              <label className="field-label">Do you own or rent your facilities?</label>
              <div className="radio-group">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="own"
                    name="ownershipType"
                    value="own"
                    checked={formData.ownershipType === 'own'}
                    onChange={(e) => handleInputChange('ownershipType', e.target.value)} required
                    className="radio-input"
                  />
                  <label htmlFor="own" className="radio-label">Own</label>
                </div>
                <div className="radio-item">
                  <input
                    type="radio"
                    id="rent"
                    name="ownershipType"
                    value="rent"
                    checked={formData.ownershipType === 'rent'}
                    onChange={(e) => handleInputChange('ownershipType', e.target.value)} required
                    className="radio-input"
                  />
                  <label htmlFor="rent" className="radio-label">Rent</label>
                </div>
              </div>
            </div>

            {/* Building Type */}
            <div className="field-group">
              <label className="field-label">Type of building</label>
              <div className="select-container">
                <select
                  value={formData.buildingType}
                  onChange={(e) => handleInputChange('buildingType', e.target.value)} required
                  className="facilities-select"
                > <option value="" disabled>Select building type</option>
                  <option value="office">Office</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                  <option value="school">School</option>
                  <option value="hospital">Hospital</option>
                  <option value="other">Other</option>
                </select>
                <div className="select-arrow">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="#696C72" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
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

          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;