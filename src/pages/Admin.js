import React from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
import data from "../dataMock/dataMock";

function Admin() {
  return (
    <div className="Admin-App container-fulied">
      <div className="row">
        <div className="col col-sm-2">
          <ul
            className="list-group list-group-flush"
            style={{ position: "relative", top: "150px", left: "0px" }}
          >
            <li className="list-group-item">
              <i className="fas fa-user-secret primary-text fs-2 me-2"></i>An
              item
            </li>
            <li className="list-group-item">
              <Link to="/">
                <i className="fas fa-tachometer-alt fs-2 me-2"></i>Home
              </Link>
            </li>
            <li className="list-group-item">
              <i className="fas fa-project-diagram primary-text fs-2 me-2"></i>A
              third item
            </li>
            <li className="list-group-item">
              <i className="fas fa-chart-line primary-text fs-2 me-2"></i>A
              fourth item
            </li>
            <li className="list-group-item">
              <i className="fas fa-paperclip primary-text fs-2 me-2"></i>Reports
            </li>
            <li className="list-group-item">
              <i className="fas fa-shopping-cart primary-text fs-2 me-2"></i>
              Store Mng
            </li>
            <li className="list-group-item">
              <i className="fas fa-comment-dots primary-text fs-2 me-2"></i>Chat
            </li>
            <li className="list-group-item">
              <i className="fas fa-map-marker-alt primary-text fs-2 me-2"></i>
              Outlet
            </li>
            <li className="list-group-item">
              <i className="fas fa-project-diagram primary-text fs-2 me-2"></i>
              Logout
            </li>
          </ul>
        </div>
        <div className="col col-sm-10">
          <nav
            className="navbar navbar-expand-lg navbar-light bg-transparent
             py-4 px-4"
          >
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
              ></i>
              <h2 className="navbar-brand fs-2 m-0">Dashboard</h2>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="navbar-nav ms-auto mb-2 mb-lg-0 dropdown
               collapse navbar-collapse justify-content-end"
              id="offcanvasDarkNavbar"
            >
              <div className="btn-group">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user me-2"></i>Ariya
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#3">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#3">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#3">
                      Loguot
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid px-4">
            <div className="row g-3 my-2">
              <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">720</h3>
                    <p className="fs-5">Products</p>
                  </div>
                  <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">420</h3>
                    <p className="fs-5">Sales</p>
                  </div>
                  <i className="fas fa-hand-holding fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">3899</h3>
                    <p className="fs-5">Delivery</p>
                  </div>
                  <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <div>
                    <h3 className="fs-2">25%</h3>
                    <p className="fs-5">Increase</p>
                  </div>
                  <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="container d-flex justify-content-around align-items-center mb-4">
              <h3 className="fs-4 mb-3">Recent Orders</h3>
              <div className="container d-flex align-items-center">
                <h3 className="fs-4 mb-3"> เพิ่มสินค้า </h3>
                <Link
                  to="#5"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#adminModal"
                  className="btn btn-success btn-sm mx-4"
                >
                  <img
                    src="logo512.png"
                    alt="Logo"
                    width="90"
                    height="72"
                    className="d-inline-block align-text-top"
                  />
                </Link>
              </div>
            </div>
            <div className="col">
              <table className="table bg-white rounded shadow-sm table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">รูปขนม</th>
                    <th scope="col">ชื่อขนม</th>
                    <th scope="col">ราคาต่อหน่วย</th>
                    <th scope="col">จำนวนสินค้า</th>
                    <th scope="col">ลบสินค้า</th>
                    <th scope="col">แก้ไขรายการ</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item) => {
                    return (
                      <tr key={item.id_data}>
                        <td>{item.id_data}</td>
                        <td>
                          <img
                            src={item.itempic}
                            className="card-img-top img-fluid"
                            alt="Error Not Show"
                            style={{ height: 120, width: 150 }}
                          />
                          {}
                        </td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <Link
                            to="#5"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            className="btn btn-success btn-sm mx-1"
                          >
                            <img
                              src="logo512.png"
                              alt="Logo"
                              width="90"
                              height="72"
                              className="d-inline-block align-text-top"
                            />
                          </Link>
                        </td>
                        <td>
                          <Link
                            to="#5"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteModal"
                            className="btn btn-success btn-sm mx-1"
                          >
                            <img
                              src="logo512.png"
                              alt="Logo"
                              width="90"
                              height="72"
                              className="d-inline-block align-text-top"
                            />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal  Create Product */}
      <div
        className="modal fade"
        id="adminModal"
        tabIndex="-1"
        aria-labelledby="adminModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="adminModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="row g-3 container d-flex flex-column"
                id="dataForm"
                method="post"
                encType="multipart/form-data"
              >
                <div className="col-auto">
                  <label htmlFor="productID" className="visually-hidden">
                    ID Product
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productID"
                    name="productID"
                    placeholder="productID"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="Name Procuct" className="visually-hidden">
                    Name Procuct
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name Procuct"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="Price" className="visually-hidden">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Price Product"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="Quantity" className="visually-hidden">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity of Product"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="Description" className="visually-hidden">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    name="desc"
                    placeholder="Product Description"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="Title" className="visually-hidden">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Product Title"
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="Image of Product" className="visually-hidden">
                    Image of Product
                  </label>
                  <input
                    type="file"
                    src="logo192.png"
                    alt=""
                    width="48"
                    height="48"
                    className="form-control"
                    id="image"
                    name="image"
                    placeholder="Image of Product"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">
                    Confirm identity
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="submit" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal  Delete Product  */}
      <div className="modal" tabIndex="-1" id="deleteModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3">
                <div className="col-auto">
                  <label htmlFor="staticEmail2" className="visually-hidden">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="deleteProductID"
                    name="deleteProductID"
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">
                    Confirm identity
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Admin;
