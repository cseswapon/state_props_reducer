import { createContext } from "react";
import "./App.css";
import SingUpFrom from "./Pages/SingUpFrom/SingUpFrom";
// import Counter from "./Pages/Counter/Counter";
export const CREATE_CONTEXT = createContext();
function App() {
  return (
    <>
      {/* <Counter /> */}
      <SingUpFrom />
    </>
  );
}

export default App;
