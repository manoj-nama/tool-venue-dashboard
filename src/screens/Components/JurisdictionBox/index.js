import React from "react";
import "./index.scss";

const JurisdictionSelector = ({ value, onChange }) => (
  <div className="jur-box jur-selector">
    <select value={value} onChange={onChange}>
      <option value="all">All</option>
      <option value="ACT">ACT</option>
      <option value="NSW">NSW</option>
      <option value="NT">NT</option>
      <option value="QLD">QLD</option>
      <option value="SA">SA</option>
      <option value="TAS">TAS</option>
      <option value="VIC">VIC</option>
    </select>
  </div>
);

export default JurisdictionSelector;
