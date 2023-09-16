import { useContext } from "react";
import { CalculatorContext } from "../context/CalculatorProvider";

function useCalculator() {
  return useContext(CalculatorContext);
}

export default useCalculator;
