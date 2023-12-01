import { useState } from "react";
import "./App.css";

function App() {
  const [billAmount, setBillAmount] = useState(0);

  function onBillAmountChange(billAmount) {
    setBillAmount(billAmount);
  }
  return (
    <div>
      <BillAmount
        billAmount={billAmount}
        onBillAmountChange={onBillAmountChange}
      />
      <ReusableTip>How did you like the service? </ReusableTip>
      <ReusableTip>How did your friend like the service? </ReusableTip>
      <h1>You pay $92 ($80+$12 tip)</h1>
      <button>Reset</button>
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

function ReusableTip({ children }) {
  return (
    <div>
      <span>{children}</span>
      <input />
    </div>
  );
}
export default App;
