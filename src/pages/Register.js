import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";

function Register() {
  function handleSubmitRegisterForm(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log("data : ", data.get("firstname"));
    console.log("data : ", data.get("lastname"));
    console.log("data : ", data.get("telephone"));
    console.log("data : ", data.get("address"));
    console.log("data : ", data.get("email"));
    console.log("data : ", data.get("password"));

    const jsondata = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      telephone: data.get("telephone"),
      address: data.get("address"),
      email: data.get("email"),
      password: data.get("password"),
    };

    fetch("http://localhost:3000/register", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="Header-App-Register">
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="row">
          <div>
            <NavLink
              type="button"
              className="btn btn-primary btn-lg mt-4 mb-4"
              to="/"
            >
              Home
            </NavLink>
          </div>
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
              <form
                className="row text-center"
                onSubmit={handleSubmitRegisterForm}
              >
                <div className="row mb-3">
                  <label htmlFor="labelfirstname" className="visually-hidden">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    // onChange={}
                  />
                </div>
                <div className="row mb-3">
                  <label htmlFor="labellastname" className="visually-hidden">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="row mb-3">
                  <label htmlFor="labeltelephone" className="visually-hidden">
                    Telephone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="telephone"
                    name="telephone"
                    placeholder="Telephone"
                  />
                </div>
                <div className="row mb-3">
                  <label htmlFor="labeladdress" className="visually-hidden">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    placeholder="address"
                  />
                </div>
                <div className="row mb-3">
                  <label htmlFor="labelemail" className="visually-hidden">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email"
                  />
                </div>
                <div className="row mb-3">
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
                <div className="row mt-4 mb-2">
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

export default Register;
