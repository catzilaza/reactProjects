import React, { useState } from "react";
import Header from "../component/header/Header";
import Contentpage from "../component/section/contentpage";
import Sideleft from "../component/section/sideleft";
import "./Home.css";
import axios from "axios";
//import data from "../dataMock/dataMock";
import { Buffer } from "buffer";

window.Buffer = window.Buffer || require("buffer").Buffer;

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  async function getdata() {
    await axios
      .get(`http://localhost:3000/product`)
      .then((response) => {
        setData(response.data);
        //console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }
  React.useEffect(() => {
    getdata();
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!data) return (
    <>
      "Loading data!"
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </>
  );

  // const data = [
  //   { id: 1, name: "name1" },
  //   { id: 2, name: "name2" },
  //   { id: 3, name: "name3" },
  //   { id: 4, name: "name4" },
  // ];

  //console.log("dState  from homeApp.js: ", dState);
  
  let dataTransform = [...data.data];
  for (let i = 0; i < dataTransform.length; i++) {
    dataTransform[i].img.data.data = new Buffer.from(dataTransform[i].img.data.data);
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
          <Contentpage data={dataTransform}></Contentpage>
        </div>
      </div>
      <div className="row">row3</div>
    </div>
  );
}
export default Home;

/*
  function useFetch() {
    console.log("useEffectOnce");
    const loadData = async () => {
      const response = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify(jsondata),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Product fetch Success", data);
          setDState(data);
        })
        .catch((error) => {
          console.log("Product fetch Error:", error);
          setError(error);
        });
      console.log("response", response);
    };
  }

  function useEffectOnce(useFetch) {
    const effect = useRef(useFetch);
    const destory = useRef();
    const effectCalled = useRef(false);
    const rendered = useRef(false);
    if (effectCalled.current) {
      rendered.current = true;
    }
    useEffect(() => {
      if (!effectCalled.current) {
        destory.current = effect.current;
        effectCalled.current = true;
      }
      return () => {
        if (rendered.current === false) return;
        if (destory.current) destory.current();
      };
    }, []);
  }

  useEffectOnce(useFetch());


 */