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

  async function getAlldata() {
    await axios
      .get(`https://good-gold-bee-cap.cyclic.app/user`)
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
    <div className="container">
      <table className="table" id="myTable">
        <thead id="myTableThead">
          <tr id="myTableTr">
            <th scope="col" id="myTableTh" data-label="S.no">
              #
            </th>
            <th scope="col" id="myTableTh" data-label="S.no">
              UserID
            </th>
            <th scope="col" id="myTableTh" data-label="S.no">
              Username
            </th>
            <th scope="col" id="myTableTh" data-label="S.no">
              E-mail
            </th>
            <th scope="col" id="myTableTh" data-label="S.no">
              Level
            </th>
            <th scope="col" id="myTableTh" data-label="S.no">
              Date/Time Register{" "}
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider" id="myTableTbody">
          {data.map((item, index) => {
            return (
              <tr key={index} id="myTableTr">
                <th scope="row" id="myTableTh" data-label="S.index.no">
                  {index}
                </th>
                <td id="myTableTd" data-label="userID">
                  {item.userID}
                </td>
                <td id="myTableTd" data-label="username">
                  {item.username}
                </td>
                <td id="myTableTd" data-label="email">
                  {item.email}
                </td>
                <td id="myTableTd" data-label="level">
                  {item.isAdmin ? "Admin" : "User"}
                </td>
                <td id="myTableTd" data-label="Date/Time Register">
                  {moment(item.updatedAt).format("DD/MM/YY :h:mm:ss a")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserPage;
