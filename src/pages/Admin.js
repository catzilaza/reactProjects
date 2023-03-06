import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Admin.css";
//import data from "../dataMock/dataMock";
import axios from "axios";
import TableAdmin from "../component/tableadmin/tableadmin";

function Admin() {
  
  var dataTransform = [];
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const [productID, setProductID] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [desc, setDesc] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImg] = useState(null);

  async function getAlldata() {
    await axios
      .get(`http://localhost:3000/product`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        setError(error);
      });
  }
  React.useEffect(() => {
    getAlldata();
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!data) {
    return (
      <>
        "No data!"
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </>
    );
  } else {
    dataTransform = [...data];
    for (let i = 0; i < dataTransform.length; i++) {
      dataTransform[i].img.data.data = new Buffer.from(
        dataTransform[i].img.data.data
      );
    }
  }

  //console.log("data : ", data);

  async function handleSubmitInsertProductForm(event) {
    event.preventDefault();

    let formData = new FormData();

    formData.append("productID", productID);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("title", desc);
    formData.append("desc", title);
    formData.append("image", image);

    //console.log("handleSubmitInsertProductForm", formData);    

    await axios
      .post(`http://localhost:3000/product`, formData)
      .then((response) => {
        console.log("Insert Product Success : ", response);        
        window.location.replace('http://localhost:3001/admin');
      })
      .catch((error) => {
        console.log("Error Insert Product : ", error);
      });
  }

  return (
    <div className="Admin-App ">
      <div className="row ">
        <nav
          className="navbar navbar-expand-lg navbar-light 
                             py-4 px-4"
          id="Admin-App-NAVBAR"
        >
          <i
            className="fas fa-align-left primary-text fs-4 me-3"
            id="menu-toggle"
          ></i>
          <h2 className="navbar-brand fs-2 m-0">Dashboard</h2>

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
                <i className="fas fa-user me-2 "></i>Ariya
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
      </div>
      <div className="row" id="Admin-App-Row2">
        <div className="col col-sm-2">
          <div className="Admin-App-UL" id="Admin-App-UL">
            <ul className="list-group">
              <li className="list-group-item">
                <i className="fas fa-user-secret primary-text fs-2 me-2"></i>
                An item
              </li>
              <li className="list-group-item">
                <Link to="/">
                  <i className="fas fa-tachometer-alt fs-2 me-2"></i>Home
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/landing">
                  <i className="fas fa-project-diagram primary-text fs-2 me-2"></i>
                  A Landing Page
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/user">
                  <i className="fas fa-chart-line primary-text fs-2 me-2"></i>A
                  User Page
                </Link>
              </li>
              <li className="list-group-item">
                <i className="fas fa-paperclip primary-text fs-2 me-2"></i>
                Reports
              </li>
              <li className="list-group-item">
                <i className="fas fa-shopping-cart primary-text fs-2 me-2"></i>
                Store Mng
              </li>
              <li className="list-group-item">
                <i className="fas fa-comment-dots primary-text fs-2 me-2"></i>
                Chat
              </li>
              <li className="list-group-item">
                <Link to="/tablereact">
                  <i className="fas fa-map-marker-alt primary-text fs-2 me-2"></i>
                  Outlet/TableReact
                </Link>
              </li>
              <li className="list-group-item">
                <Link to="/learncss">
                  <i className="fas fa-project-diagram primary-text fs-2 me-2"></i>
                  Logout/LearnCSS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col col-sm-10">
          <div className="row">
            <div className="container text-center bg-primary">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="fs-2">720</h3>
                      <p className="fs-5">Products</p>
                      <i className="fas fa-gift fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="fs-2">420</h3>
                      <p className="fs-5">Sales</p>
                      <i className="fas fa-hand-holding fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="fs-2">3899</h3>
                      <p className="fs-5">Delivery</p>
                      <i className="fas fa-truck fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <h3 className="fs-2">25%</h3>
                      <p className="fs-5">Increase</p>
                      <i className="fas fa-chart-line fs-1 primary-text border rounded-full secondary-bg p-3"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="container-fulied d-flex justify-content-center align-self-center mt-4 mb-4 bg-danger">
                <div>
                  <h3 className="fs-4 m-3">Recent Orders เพิ่มสินค้า</h3>
                </div>
                <Link
                  to="#5"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#adminInsertModal"
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
          </div>
          <div className="row">
            <TableAdmin datas={data}></TableAdmin>
          </div>
        </div>
      </div>

      {/* Modal  Insert Product */}
      <div
        className="modal fade"
        id="adminInsertModal"
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
                onSubmit={(e) => {
                  handleSubmitInsertProductForm(e);
                }}
              >
                <div className="col-auto">
                  <label htmlFor="labelproductID" className="visually-hidden">
                    ID Product
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="productID"
                    name="productID"
                    placeholder="productID"
                    onChange={(e) => {
                      setProductID(e.target.value);                      
                    }}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="labelprocuct" className="visually-hidden">
                    Name Procuct
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name Procuct"
                    onChange={(e) => {
                      setName(e.target.value);                      
                    }}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="labelprice" className="visually-hidden">
                    Price
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    placeholder="Price Product"
                    onChange={(e) => {
                      setPrice(e.target.value);                      
                    }}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="labelquantity" className="visually-hidden">
                    Quantity
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="quantity"
                    name="quantity"
                    placeholder="Quantity of Product"
                    onChange={(e) => {
                      setQuantity(e.target.value);                      
                    }}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="labeldescription" className="visually-hidden">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    name="desc"
                    placeholder="Product Description"
                    onChange={(e) => {
                      setDesc(e.target.value);                      
                    }}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="labeltitle" className="visually-hidden">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    placeholder="Product Title"
                    onChange={(e) => {
                      setTitle(e.target.value);                      
                    }}
                  />
                </div>
                <div className="col-auto">
                  <label htmlFor="labelimage" className="visually-hidden">
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
                    onChange={(e) => {
                      setImg(e.target.files[0]);                      
                    }}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">
                    Sumbit
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
    </div>
  );
}
export default Admin;
