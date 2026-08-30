import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <main className="app">
      <section className="counter-card">
        <h1>Counter App</h1>

        <div className="counter-value">{count}</div>

        <div className="button-group">
          <button
            type="button"
            onClick={decreaseCount}
            aria-label="Decrease counter"
          >
            −
          </button>

          <button
            type="button"
            onClick={increaseCount}
            aria-label="Increase counter"
          >
            +
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;