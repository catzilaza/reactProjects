import React from "react";
import Header from "../component/header/Header";
import Contentpage from "../component/section/contentpage";
import Sideleft from "../component/section/sideleft";
import "./Home.css";

function Home() {
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
          <Contentpage></Contentpage>
        </div>
      </div>
      <div className="row">row3</div>
    </div>
  );
}
export default Home;
