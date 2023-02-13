import React from "react";
import data from "../../dataMock/dataMock";



function Contentpage() {

  const contentpage_card = (item) => {
    return (
      <div className="card p-0" key={item.id_data}>
        <img src={item.itempic} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">
            ราคา : {item.price}  บาท
          </p>
          <a href="#3" className="btn btn-primary">
            buy
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
        { data.map((item)=>{return contentpage_card(item)})}
    </div>
  );
}

export default Contentpage;
