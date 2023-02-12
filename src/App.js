import React from "react";
import Home from "./pages/Home";
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
    </Route>
  )
);


function App() {
  return (
    <RouterProvider router={App_router}></RouterProvider>
  );
}

export default App;
