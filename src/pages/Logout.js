import React from "react";
import "./Logout.css";

function Logout() {
  function handleLogout() {
    alert('Click Logout : localStorage.removeItem(token); and Redirect to Home Page');
    localStorage.removeItem('token');
    window.location = '/';
  }
  return (
    <div className="Logout-App">
      <h1> Logout Page</h1>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
