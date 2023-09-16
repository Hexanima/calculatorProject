import "./App.css";
import { CalculatorProvider } from "./context/CalculatorProvider";
import Home from "./pages/Home";

function App() {
  return (
    <CalculatorProvider>
      <Home />
    </CalculatorProvider>
  );
}

export default App;
