import React, { useState, useEffect } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
//import {makelogin} from "../function/login";, getUserStore
import { storeUser, login } from "../store/userSlice";
import axios from "axios";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [statusResponse, setStatusResponse] = useState({
    email: "",
    username: "",
    userID: "",
    isAdmin: "",
    token: "",
    status: "",
    message: "",
  });

  storeUser.subscribe(() => {
    console.log(
      "Login storeUser.subscribe storeUser.getState(): ",
      storeUser.getState()
    );
  });

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log("handleOnSubmit");
    //console.log("handleOnSubmit", storeUser.dispatch(getUserStore()));

    await axios
      .post(process.env.REACT_APP_API + "users/login", data)
      .then((response) => {
        console.log(response);
        console.log("STATUS : ", response.data.status);
        console.log("MESSAGE : ", response.data.message);
        setStatusResponse({
          email: response.data.email,
          userID: response.data.userID,
          username: response.data.username,
          isAdmin: response.data.isAdmin,
          token: response.data.token,
          status: response.data.status,
          message: response.data.message,
        });
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("StatusResponse xxx", statusResponse);
    storeUser.dispatch(login(statusResponse));
    console.log(
      "StatusResponse xxx --> storeUser.getState() : ",
      storeUser.getState()
    );
    
  };

  useEffect(() => {
    console.log(
      "useEffect Login() --> store.subscribe : ",
      storeUser.getState()
    );
    // storeUser.subscribe(()=>{
    //   console.log("useEffect Login() --> store.subscribe : ", storeUser.getState().name);
    // });
  }, []);

  // async function handleSubmitLoginForm(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   console.log("data : ", data.get("email"));
  //   console.log("data : ", data.get("password"));

  //   const jsondata = {
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   };

  //   await fetch("http://localhost:3000/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(jsondata),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.status === "ok") {
  //         console.log("Login Success  Redirect to Home Page: ", data);
  //         alert("Login Success");
  //         localStorage.setItem("token", data.token);
  //         window.location = "/";
  //       } else {
  //         console.log("Login Failed : ", data);
  //         localStorage.removeItem("token");
  //         alert("Login Failed : Register Please Redirect to Register Page");
  //         window.location = "/register";
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error:", error);
  //     });
  // }

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
              width: "600px",
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
                //onSubmit={handleSubmitLoginForm}
                onSubmit={handleOnSubmit}
              >
                <div className="row mb-2">
                  <label htmlFor="labelemail" className="visually-hidden">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email@example.com"
                    onChange={handleChange}
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
                    onChange={handleChange}
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

/* 
        const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(jsondata),
    }
    const url = "http://localhost:3000/login";
    const response = await fetch(url,fetchOptions);

    if (!response.ok) {
      const errorMessage = await response.text();
      // throw new Error(errorMessage);
      console.log("errorMessage Response : ", errorMessage);
    }else {
      console.log("Response : ", response);
    }
    */
