import { createContext, useState } from 'react';
import Parent from './Pages/Parent/Parent';
import './App.css';
export const CREATE_CONTEXT = createContext()
function App() {
  const [counter, setCounter] = useState(0);
  const value = {
    counter,setCounter
  }
  return (
    <CREATE_CONTEXT.Provider value={value}>
      <div className="App">
        <Parent />
      </div>
    </CREATE_CONTEXT.Provider>
  );
}

export default App;
