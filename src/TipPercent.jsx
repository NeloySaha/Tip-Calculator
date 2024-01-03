import React from "react";

export const TipPercent = ({ children, tip, setTip }) => {
  return (
    <div className="category">
      {children}
      <select onChange={(e) => setTip(+e.target.value)} value={tip}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>It was good (10%)</option>
        <option value={0.2}>Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
};
