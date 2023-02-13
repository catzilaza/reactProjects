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
      <div className="container">
        <div className="card text-center">
          <div className="d-flex justify-content-center">
            <img
              src="logo192.png"
              style={{ width: "100px", height: "100px" }}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <form className="row g-3 d-flex flex-column text-center">
              <div className="col-auto">
                <label forname="email" className="visually-hidden">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email@example.com"
                />
                <div className="invalid-feedback">กรอกอีเมลไม่ถูกต้อง</div>
              </div>

              <div className="col-auto">
                <label forname="password" className="visually-hidden">
                  Password
                </label>
                <input type="password" placeholder="Password" />
                <div className="invalid-feedback">
                  กรอกรหัสอย่างน้อย5ตัวอักษร
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">
                  Confirm identity
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
