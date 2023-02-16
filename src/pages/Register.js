import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";

function Register() {
  return (
    <div className="Header-App-Register">
      <div>
        <NavLink type="button" className="btn btn-primary btn-lg mt-1" to="/">
          Home
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
            <div class="row mb-3">
              <label for="staticEmail2" class="visually-hidden">
                First Name
              </label>
              <input
                type="text"
                class="form-control"
                id="staticEmail2"
                value="First Name"
              />
            </div>
            <div class="row mb-3">
              <label for="staticEmail2" class="visually-hidden">
                Last Name
              </label>
              <input
                type="text"
                class="form-control"
                id="staticEmail2"
                value="Last Name"
              />
            </div>
            <div class="row mb-3">
              <label for="staticEmail2" class="visually-hidden">
                Telephone
              </label>
              <input
                type="text"
                class="form-control"
                id="staticEmail2"
                value="Telephone"
              />
            </div>
            <div class="row mb-3">
              <label for="staticEmail2" class="visually-hidden">
                Address
              </label>
              <input
                type="text"
                class="form-control"
                id="staticEmail2"
                value="Address"
              />
            </div>
            <div class="row mb-3">
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
            <div class="row mb-3">
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
            <div class="row mt-4 mb-2">
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

export default Register;
