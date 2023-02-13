import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  createRoutesFromElements,  
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';

const App_router = createBrowserRouter(
  createRoutesFromElements(
    <Route> 
      <Route path="/" element={<Home/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={App_router}></RouterProvider>
  );
}

export default App;
