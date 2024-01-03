import React from "react";

export const Total = ({ bill, myTip, friendTip }) => {
  const tip = Math.round(((myTip + friendTip) / 2) * bill);
  const amount = bill + tip;

  return (
    <h1>
      You pay ${amount} (${bill} + ${tip})
    </h1>
  );
};
