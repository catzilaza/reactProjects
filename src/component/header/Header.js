import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#3">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#3">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#3">
                    Link
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#3"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#3">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#3">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#3">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#3">
                    Disabled
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success mx-1" type="submit">
                  Search
                </button>
              </form>
              <Link
                to="/login"
                className="btn btn-outline-success mx-1"
                type="button"
              >
                Login
              </Link>
              <Link
                to="/logout"
                className="btn btn-outline-success mx-1"
                type="button"
              >
                Logout
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-success mx-1"
                type="submit"
              >
                Register
              </Link>
            </div>
          </div>
        </nav>
      </div>
      <div
        id="carouselHome-CSSAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="asset/pictures/picview1.jpg"
              className="d-block w-100"
              alt="not found"
            />
          </div>
          <div className="carousel-item">
            <img
              src="asset/pictures/picview2.jpg"
              className="d-block w-100"
              alt="not foun"
            />
          </div>
          <div className="carousel-item">
            <img
              src="asset/pictures/picview3.jpg"
              className="d-block w-100"
              alt="not foun"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselHome-CSSAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselHome-CSSAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Header;
