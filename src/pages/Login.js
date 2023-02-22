import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
async  function handleSubmitLoginForm(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    console.log("data : ", data.get("email"));
    console.log("data : ", data.get("password"));

    const jsondata = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // const fetchOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: JSON.stringify(jsondata),
    // }   
    // const url = "http://localhost:3000/login";
    // const response = await fetch(url,fetchOptions);

    // if (!response.ok) {
    //   const errorMessage = await response.text();
    //   // throw new Error(errorMessage);
    //   console.log("errorMessage Response : ", errorMessage);
    // }else {
    //   console.log("Response : ", response);
    // }

   await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsondata),
    })
      .then((response) => response.json())
      .then((data) => {            
        if(data.status === 'ok') {
          console.log('Login Success  Redirect to Home Page: ', data);
          alert('Login Success');
          localStorage.setItem('token', data.token);          
          window.location = '/';
        }else {
          console.log('Login Failed : ', data);
          localStorage.removeItem('token');
          alert('Login Failed : Register Please Redirect to Register Page');
          window.location = '/register';
        }
        
      })
      .catch((error) => {
        console.log('Error:', error);
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
                onSubmit={handleSubmitLoginForm}
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
