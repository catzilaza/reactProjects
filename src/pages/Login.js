import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="Login-App">
      <div>
        <NavLink
          to="/"
          type="button"
          className="btn btn-primary btn-lg mx-1 mt-1"
        >
          Home button
        </NavLink>
      </div>

      <div
        className="card text-center"
        style={{
          width: "800px",
          position: "relative",
          top: "0px",
          left: "700px",
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
          <form class="row text-center">
            <div class="row mb-2">
              <label for="staticEmail2" class="visually-hidden">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                id="staticEmail2"
                value="email@example.com"
              />
            </div>
            <div class="row mb-2">
              <label for="inputPassword2" class="visually-hidden">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <div class="row mb-2">
              <button type="submit" class="btn btn-primary mb-3">
                Confirm identity
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
