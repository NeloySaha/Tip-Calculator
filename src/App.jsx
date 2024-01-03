import { useEffect, useState } from "react";
import "./index.css";
import { BillAmount } from "./BillAmount";
import { TipPercent } from "./TipPercent";
import { Total } from "./Total";
import { Reset } from "./Reset";

function App() {
  const [bill, setBill] = useState(0);
  const [myTip, setMyTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);
  const [total, setTotal] = useState(0);

  const props = {
    bill,
    setBill,
    total,
    setTotal,
    myTip,
    friendTip,
    setMyTip,
    setFriendTip,
  };
  return (
    <>
      <BillAmount {...props} />

      <TipPercent tip={myTip} setTip={setMyTip}>
        <h3>How did you like the service?</h3>
      </TipPercent>

      <TipPercent tip={friendTip} setTip={setFriendTip}>
        <h3>How did your friend like the service?</h3>
      </TipPercent>

      <Total {...props} />

      <Reset {...props} />
    </>
  );
}

export default App;
