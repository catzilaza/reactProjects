import React, { useState } from "react";
import data from "../../dataMock/dataMock";
import axios from "axios";
//import { Buffer } from "buffer";

function Contentpage() {
  var [datas, setDatas] = useState(null);

  async function getAlldata() {
    await axios
      .get(`http://localhost:3000/product`)
      .then((response) => {
        setDatas(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  React.useEffect(() => {
    getAlldata();
  }, []);

  const contentpage_card = (item) => {
    return (
      <div className="card p-0" key={item.id_data}>
        {/* {item.img.data.data.toString("base64")} */}
        <img src={item.itempic} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">ราคา : {item.price} บาท</p>
          <a href="#3" className="btn btn-primary">
            buy
          </a>
        </div>
      </div>
    );
  };

  console.log("Datas : ", datas);

  // let datass = [...datas.data];
  // for (let i = 0; i < datass.length; i++) {
  //   datass[i].img.data.data = new Buffer.from(datass[i].img.data.data);
  // }
  // const list = (item) => {
  //   return (
  //     <div className="card p-0" key={item.productID}>
  //       {/* {item.img.data.data.toString("base64")} */}
  //       <img src={item.itempic} className="card-img-top img-fluid" alt="..." />
  //       <div className="card-body">
  //         <h5 className="card-title">{item.name}</h5>
  //         <p className="card-text">ราคา : {item.price} บาท</p>
  //         <a href="#3" className="btn btn-primary">
  //           buy
  //         </a>
  //       </div>
  //     </div>
  //   );
  // };
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {data.map((item) => {
        return contentpage_card(item);
      })}
      {/* {datass.map((item) => {
        return contentpage_card(item);
      })} */}

      {/* {datass.map((item) => {
        return (
          <div className="card p-0" key={item.id_data}>            
            <img
              src={`data:image/png;base64,${item.img.data.data.toString("base64")}`}
              className="card-img-top img-fluid"
              alt="..."
              style={{ height: "150px"}}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">ราคา : {item.price} บาท</p>
              <a href="#3" className="btn btn-primary">
                buy
              </a>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Contentpage;
