import React, { useState } from "react";
//import data from "../../dataMock/dataMock";

function Contentpage(props) {

  const [datas] = useState(props.datas);

  const contentpage_card = (item) => {
    return (
      <div className="card p-0" key={item.productID}>
        {/* {item.img.data.data.toString("base64")} */}
        <img
          src={`data:image/png;base64, ${item.img.data.data.toString("base64")}`}
          className="card-img-top img-fluid"
          alt="error"
          style={{ height: "150px"}}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ overflow: "auto"}}>{item.name}</h5>
          <p className="card-text">ราคา : {item.price} บาท</p>
          <a href="#3" className="btn btn-primary">
            buy
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {datas.map((item) => {
        return contentpage_card(item);
      })}
    </div>
  );
}

export default Contentpage;
