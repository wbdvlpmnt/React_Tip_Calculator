import "./App.css";

function App() {
  return (
    <div>
      <BillAmount />
      <ReusableTip>How did you like the service? </ReusableTip>
      <ReusableTip>How did your friend like the service? </ReusableTip>
      <h1>You pay $92 ($80+$12 tip)</h1>
      <button>Reset</button>
    </div>
  );
}

function BillAmount() {
  return (
    <div>
      <span>How much was the bill? </span>
      <input />
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
