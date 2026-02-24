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

const StateLogin: React.FC = () => {
  const [selectedState, setSelectedState] = useState("");

  const stateDropdown = (
    <div className="form-group">
      <label className="form-label">Select State</label>
      <select
        className="form-select"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="">-- Select State --</option>
        {states.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <LoginForm title="State Login" role="state" extraFields={stateDropdown} />
  );
};

export default StateLogin;
