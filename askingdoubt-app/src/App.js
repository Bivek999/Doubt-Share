import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./Register";
const router=createBrowserRouter([{path:"/", element:<Login/>},{path:"/Register", element:<Register/>}])
function App() {
  return <RouterProvider router={router} />
    
  
}

export default App;
