import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState("0");

  const handleClick = (value) => {
    if (display === "0") {
      if (/[0-9]/.test(value)) {
        setDisplay(value);
      } else {
        setDisplay("0" + value);
      }
      return;
    }

    setDisplay((prev) => prev + value);
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch (err) {
      setDisplay("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0","E" ,"C", "+"
  ];

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input
        type="text"
        value={display}
        readOnly
        data-cy="display"
        className="display"
      />

      <div className="button-grid">
        {buttons.map((btn) =>
          btn === "C" ? (
            <button
              key={btn}
              onClick={handleClear}
              data-cy={`btn-${btn}`}
              className="btn clear"
            >
              {btn}
            </button>
          ) : (
            <button
              key={btn}
              onClick={() => handleClick(btn)}
              data-cy={`btn-${btn}`}
              className="btn"
            >
              {btn}
            </button>
          )
        )}

        <button
          onClick={handleEquals}
          data-cy="btn-="
          className="btn equals"
        >
          =
        </button>
      </div>
    </div>
  );
}