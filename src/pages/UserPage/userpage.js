import React, { useState } from "react";
//import { loaddata } from "../../function/loaddata";
import axios from "axios";
import moment from "moment";
//moment(item.updatedAt).format('DD/MM/YY :h:mm:ss a')
//import momentTH from "moment/min/moment-with-locales";
//momentTH(item.updatedAt).locale('th').format('LLL')

function UserPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  //const uri = "user";

  //   function getUserAll() {
  //     try {
  //       loaddata(uri)
  //         .then((response) => {
  //           console.log("response ok getUser : ", response.data);
  //           setData(response.data);
  //         })
  //         .catch((error) => {
  //           console.log("response error");
  //         });
  //     } catch (error) {
  //       console.log("error UserPage : ", error);
  //     }
  //   }

  //   React.useEffect(() => {
  //     getUserAll();
  //   }, []);

  async function getAlldata() {
    await axios
      .get(`http://localhost:3000/user`)
      .then((response) => {
        //console.log("response : ", response.data.user);
        setData(response.data.user);
      })
      .catch((error) => {
        console.log("error", error);
        setError(error);
      });
  }
  React.useEffect(() => {
    getAlldata();
  }, []);
  
  if (error) return `Error: ${error.message}`;
  if (!data) return "No data!";

  console.log("data : ", data);

  return (
    // <div>
    //   <h1>User Page</h1>
    //   {data.map((item)=>{
    //     return (<div key={item._id}>{item.username}</div>)
    //   })}
    // </div>
    <div className="container">
    <table className="table" id="myTable" >
      <thead id="myTableThead">
        <tr id="myTableTr" >
          <th scope="col"  id="myTableTh" data-label="S.no">#</th>
          <th scope="col"  id="myTableTh" data-label="S.no">UserID</th>
          <th scope="col"  id="myTableTh" data-label="S.no">Username</th>
          <th scope="col"  id="myTableTh" data-label="S.no">E-mail</th>
          <th scope="col"  id="myTableTh" data-label="S.no">Level</th>
          <th scope="col"  id="myTableTh" data-label="S.no">Date/Time Register </th>
        </tr>
      </thead>
      <tbody className="table-group-divider" id="myTableTbody"  >
      {data.map((item, index)=>{
        return (
            <tr key={index} id="myTableTr"  >
            <th scope="row"  id="myTableTh" data-label="S.index.no">{index}</th>
            <td id="myTableTd" data-label="S.userID">{item.userID}</td>
            <td id="myTableTd" data-label="S.username">{item.username}</td>
            <td id="myTableTd" data-label="S.email">{item.email}</td>
            <td id="myTableTd" data-label="S.level">{item.isAdmin?"Admin":"User"}</td>
            <td id="myTableTd" data-label="S.Date/Time Register">{moment(item.updatedAt).format('DD/MM/YY :h:mm:ss a')}</td>
          </tr> 
        )
      })}
        {/* <tr key={item._id} id="myTableTr"  >
          <th scope="row"  id="myTableTh" data-label="S.no">1</th>
          <td id="myTableTd" data-label="S.no">{item.username}</td>
          <td id="myTableTd" data-label="S.no">{item.username}</td>
          <td id="myTableTd" data-label="S.no">{item.username}</td>
        </tr>  */}
      </tbody>
    </table>
  </div>
    
  );
}

export default UserPage;
