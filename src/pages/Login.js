import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {

  function handleSubmitLoginForm(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    console.log("data : ", data.get("email"));
    console.log("data : ", data.get("password"));

    const jsondata = {      
      email: data.get("email"),
      password: data.get("password"),
    };

    fetch("http://localhost:3000/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // window.location("/admin");
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }

  return (
    <div className="Login-App">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <NavLink
            to="/"
            type="button"
            className="btn btn-primary btn-lg mt-4 mb-4"
          >
            Home button
          </NavLink>
        </div>
        <div className="row">
          <div
            className="card text-center bg-info"
            style={{
              width: "600px"
            }}
          >
            <div className="container d-flex justify-content-center">
              <img
                src="logo192.png"
                className="card-img-top"
                alt="..."
                style={{ width: "100px" }}
              />
            </div>

            <div className="card-body container d-flex justify-content-center">
              <form className="row text-center" onSubmit={handleSubmitLoginForm}>
                <div className="row mb-2">
                  <label htmlFor="labelemail" className="visually-hidden">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    
                  />
                </div>
                <div className="row mb-2">
                  <label htmlFor="labelpassword" className="visually-hidden">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Password"
                  />
                </div>
                <div className="row mb-2">
                  <button type="submit" className="btn btn-primary mb-3">
                    Confirm identity
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
