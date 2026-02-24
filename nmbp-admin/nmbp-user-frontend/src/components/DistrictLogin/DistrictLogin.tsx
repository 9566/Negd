import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

const states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const districtsByState: Record<string, string[]> = {
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Allahabad",
    "Amroha",
    "Auraiya",
    "Ayodhya",
    "Azamgarh",
    "Lucknow",
    "Varanasi",
  ],
  Maharashtra: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
  Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain"],
};

const DistrictLogin: React.FC = () => {
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const districts = selectedState
    ? districtsByState[selectedState] || [
        "District 1",
        "District 2",
        "District 3",
      ]
    : [];

  const dropdowns = (
    <>
      <div className="form-group">
        <label className="form-label">Select State</label>
        <select
          className="form-select"
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedDistrict("");
          }}
        >
          <option value="">-- Select State --</option>
          {states.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Select District</label>
        <select
          className="form-select"
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">-- Select District --</option>
          {districts.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </>
  );

  return (
    <LoginForm title="District Login" role="district" extraFields={dropdowns} />
  );
};

export default DistrictLogin;
