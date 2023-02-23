import React,  { useState }  from "react";
import Header from "../component/header/Header";
import Contentpage from "../component/section/contentpage";
import Sideleft from "../component/section/sideleft";
import "./Home.css";
import axios from "axios";
//import {Buffer} from 'buffer';
window.Buffer = window.Buffer || require("buffer").Buffer;
function Home() {

  const [dState, setDState] = useState(null);
  const [error, setError] = useState(null);
  //const [newdState, setnewdState] = useState(0);

  async function getdata() {
    await axios
      .get(`http://localhost:3000/product`)
      .then((response) => {
        setDState(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }
  React.useEffect(() => {
    getdata();
  }, []);
  
  if (error) return `Error: ${error.message}`;
  if (!dState) return "No dState!";

  // const data = [
  //   { id: 1, name: "name1" },
  //   { id: 2, name: "name2" },
  //   { id: 3, name: "name3" },
  //   { id: 4, name: "name4" },
  // ];
  
  console.log("dState  from homeApp.js: ", dState);
  
  let data = [...dState.data];
    for (let i = 0; i < data.length; i++) {
    data[i].img.data.data = new Buffer.from(data[i].img.data.data);   
  }   

  return (
    <div className="Home-CSS container-fulied ">
      <div className="row">
        <Header></Header>
      </div>
      <div className="row">
        <div className="row col-sm-2">
          <Sideleft></Sideleft>
        </div>
        <div className="row col-sm-10">
          <Contentpage datas={data}></Contentpage>
        </div>
      </div>
      <div className="row">row3</div>
    </div>
  );
}
export default Home;
