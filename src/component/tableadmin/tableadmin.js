import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TableAdmin(props) {


  const [datas] = useState(props.datas);

  //const [error, setError] = useState(null);

  const [productID, setProductID] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [desc, setDesc] = useState(null);
  const [title, setTitle] = useState(null);
  const [image, setImg] = useState(null);

  const [deleteProductID, setdeleteProductID] = useState(null);

  async function handleSubmitDeleteProductForm(event) {
    event.preventDefault();

    console.log("async function handleDelete(e) : ", deleteProductID);

    console.log("deleteProductID : ", deleteProductID);

    await axios
      .delete(`http://localhost:3000/product/${deleteProductID}`)
      .then((response) => {
        console.log("Response Delete Product : ", response);
      })
      .catch((error) => {
        console.log("Error Delete Product : ", error);
      });
  }

  async function handleSubmitUpdateProductForm(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log("data : ", data.get("productID"));
    console.log("data : ", data.get("name"));
    console.log("data : ", data.get("price"));
    console.log("data : ", data.get("quantity"));
    console.log("data : ", data.get("desc"));
    console.log("data : ", data.get("title"));
    console.log("data : ", data.get("image"));

    const jsondata = {
      productID: data.get("productID"),
      name: data.get("name"),
      price: data.get("price"),
      quantity: data.get("quantity"),
      desc: data.get("desc"),
      title: data.get("title"),
      image: data.get("image"),
    };

    let formData = new FormData();

    formData.append("productID", productID);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("title", desc);
    formData.append("desc", title);
    formData.append("image", image);

    console.log("handleSubmitUpdateProductForm", jsondata);

    await axios
      .put(`http://localhost:3000/product`, jsondata)
      .then((response) => {
        console.log("Insert Product Success : ", response);
      })
      .catch((error) => {
        console.log("Error Insert Product : ", error);
      });
  }

  return (
    <div className="container-fluid text-center">
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
          {datas.map((item) => {
            return (
              <tr key={item.productID}>
                <td>{item.productID}</td>
                <td>
                  <img
                    // {item.itempic}
                    src={`data:image/png;base64, ${item.img.data.data.toString(
                      "base64"
                    )}`}                    
                    className="card-img-top img-fluid"
                    alt="Error Not Show"
                    style={{ height: 150, width: 350 }}
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
                    data-bs-target="#adminUpdateModal"
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
              <form
                className="row g-3"
                id="deleteForm"
                method="delete"
                encType="multipart/form-data"
                onSubmit={(e) => {
                  handleSubmitDeleteProductForm(e);
                }}
              >
                <div className="col-auto">
                  <label
                    htmlFor="labeldeleteProductID"
                    className="visually-hidden"
                  >
                    Product ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="deleteProductID"
                    name="deleteProductID"
                    onChange={(e) => {
                      setdeleteProductID(e.target.value);
                    }}
                  />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn btn-primary mb-3">
                    Confirm Delete
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

      {/* Modal Update Product*/}
      <div
        className="modal fade"
        id="adminUpdateModal"
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
                id="dataUpdateForm"
                method="put"
                encType="multipart/form-data/application/x-www-form-urlencoded"
                onSubmit={(e) => {
                  handleSubmitUpdateProductForm(e);
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

export default TableAdmin;
