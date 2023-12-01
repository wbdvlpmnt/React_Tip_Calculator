import "./App.css";

function App() {
  return (
    <div>
      <BillAmount />
      <ReusableTip />
      <ReusableTip />
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

function ReusableTip() {
  return (
    <div>
      <span>How did you like the service? </span>
      <input />
    </div>
  );
}
export default App;
