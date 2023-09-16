import { useState, createContext } from "react";

const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount((a) => a + 1);
  }

  const contextValues = { count, addOne };

  return (
    <CalculatorContext.Provider value={contextValues}>
      {children}
    </CalculatorContext.Provider>
  );
}

export {CalculatorContext, CalculatorProvider};
