import { RouterProvider } from "react-router-dom";
import "./App.css";
import ProductProvider from "./context/ProductProvider";
import { router } from "./Route/route";
function App() {
  
  return (
    <>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </>
  );
}

export default App;
