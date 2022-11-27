import { createContext } from "react";
import "./App.css";
import Counter from "./Pages/Counter/Counter";
export const CREATE_CONTEXT = createContext();
function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
