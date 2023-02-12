import React from "react";

function Contentpage() {
  var urlpic = ["asset/pic_dessert/pic1.jpg",
                "asset/pic_dessert/pic1.jpg",
                "asset/pic_dessert/pic1.jpg",
                "asset/pic_dessert/pic1.jpg",
                "asset/pic_dessert/pic1.jpg",
                "asset/pic_dessert/pic1.jpg",
                "asset/pic_dessert/pic1.jpg",
                "asset/pic_dessert/pic1.jpg"];

  const contentpage_card = (url) => {
    return (
      <div className="card p-0">
        <img src={url} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#3" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
        { urlpic.map((item)=>{return contentpage_card(item)})}
    </div>
  );
}

export default Contentpage;
