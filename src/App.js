import { useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [friendSatisfaction, setFriendSatisfaction] =
    useState("not satisfied, 10%");
  const [yourSatisfaction, setYourSatisfaction] =
    useState("not satisfied, 10%");

  const lookup = {
    "not satisfied, 10%": 0.1,
    "satisfied, 15%": 0.15,
    "highly satisfied, 20%": 0.2,
  };

  let yourTip = lookup[yourSatisfaction];
  let friendsTip = lookup[friendSatisfaction];
  let totalTip = (yourTip + friendsTip) * billAmount;
  let totalAmount = Number(billAmount) + Number(totalTip);

  function onBillAmountChange(billAmount) {
    setBillAmount(billAmount);
  }

  function handleReset() {
    setFriendSatisfaction("not satisfied, 10%");
    setYourSatisfaction("not satisfied, 10%");
    setBillAmount(0);
  }

  function onChangeSatisfaction(satisfactionValue, prompt) {
    const expr = prompt;
    switch (expr) {
      case "How did you like the service?":
        setYourSatisfaction(satisfactionValue);
        break;
      case "How did your friend like the service?":
        setFriendSatisfaction(satisfactionValue);
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <BillAmount
        billAmount={billAmount}
        onBillAmountChange={onBillAmountChange}
      />
      <ReusableTip
        yourSatisfaction={yourSatisfaction}
        onChangeSatisfaction={onChangeSatisfaction}
      >
        How did you like the service?
      </ReusableTip>
      <ReusableTip
        friendSatisfaction={friendSatisfaction}
        onChangeSatisfaction={onChangeSatisfaction}
      >
        How did your friend like the service?
      </ReusableTip>
      <h1>
        You pay ${totalAmount} (${billAmount}+$
        {totalTip} tip)
      </h1>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

function BillAmount({ billAmount, onBillAmountChange }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        type="number"
        value={billAmount}
        onChange={(e) => onBillAmountChange(e.target.value)}
      />
    </div>
  );
}

function ReusableTip({ satisfaction, onChangeSatisfaction, children }) {
  const tipOptions = [
    "not satisfied, 10%",
    "satisfied, 15%",
    "highly satisfied, 20%",
  ];
  return (
    <div>
      <span>{children}</span>
      <select
        value={satisfaction}
        onChange={(e) => onChangeSatisfaction(e.target.value, children)}
      >
        {tipOptions.map((opt, index) => {
          return (
            <option value={opt} key={index}>
              {opt}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default App;
