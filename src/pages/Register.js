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
                <label htmlFor="fname" className="visually-hidden">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="First Name"
                />
                <div className="invalid-feedback">
                  กรอกชื่อผู้ใช้อย่างน้อย 5 ตัวอักษร
                </div>
              </div>
              <div className="col-auto">
                <label htmlFor="lname" className="visually-hidden">
                  Last Name
                </label>
                <input
                  type="text"
                  id="laname"
                  name="lname"
                  placeholder="Last Name"
                />
                <div className="invalid-feedback">
                  กรอกนามสกุลผู้ใช้อย่างน้อย 5 ตัวอักษร
                </div>
              </div>
              <div className="col-auto">
                <label htmlFor="address" className="visually-hidden">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
                <div className="invalid-feedback">
                  กรอกที่อยู่ผู้ใช้อย่างน้อย 5 ตัวอักษร
                </div>
              </div>
              <div className="col-auto">
                <label htmlFor="email" className="visually-hidden">
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
                <label htmlFor="password" className="visually-hidden">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
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

export default Register;
