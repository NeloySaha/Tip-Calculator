import React from "react";

export const Reset = ({
  bill,
  setBill,
  myTip,
  friendTip,
  setMyTip,
  setFriendTip,
}) => {
  const resetFunc = () => {
    setBill(0);
    setMyTip(0);
    setFriendTip(0);
  };

  return (
    <>
      {(bill !== 0 || myTip !== 0 || friendTip !== 0) && (
        <button onClick={resetFunc}>Reset</button>
      )}
    </>
  );
};
