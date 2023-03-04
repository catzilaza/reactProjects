import React from "react";
import "./TableReact.css";
import dataItem from "../dataMock/dataMock";
import { useTable } from "react-table";

function TableReact() {
  const data = React.useMemo(() => dataItem, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID_data",
        accessor: "id_data",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Quantity",
        accessor: "quantity",
      },
      {
        Header: "Itempic",
        accessor: "itempic",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="TableReact">
      <div className="container">
        <table
          className="table table-bordered"
          {...getTableProps()}
          style={{ color: "white" }}
         
        >
          <thead >
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr  {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td  {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="container">
        <table className="table" id="myTable" >
          <thead id="myTableThead">
            <tr id="myTableTr" >
              <th scope="col"  id="myTableTh" data-label="S.no">#</th>
              <th scope="col"  id="myTableTh" data-label="S.no">First</th>
              <th scope="col"  id="myTableTh" data-label="S.no">Last</th>
              <th scope="col"  id="myTableTh" data-label="S.no">Handle</th>
            </tr>
          </thead>
          <tbody className="table-group-divider" id="myTableTbody"  >
            <tr id="myTableTr"  >
              <th scope="row"  id="myTableTh" data-label="S.no">1</th>
              <td id="myTableTd" data-label="S.no">Mark</td>
              <td id="myTableTd" data-label="S.no">Otto</td>
              <td id="myTableTd" data-label="S.no">@mdo</td>
            </tr>
            <tr id="myTableTr" >
              <th scope="row" id="myTableTh" data-label="S.no">2</th>
              <td id="myTableTd" data-label="S.no">Jacob</td>
              <td id="myTableTd" data-label="S.no" >Thornton</td>
              <td id="myTableTd" data-label="S.no" >@fat</td>
            </tr>
            <tr id="myTableTr" >
              <th scope="row"  id="myTableTh" data-label="S.no">3</th>
              <td colSpan="2" id="myTableTd" data-label="S.no">Larry the Bird</td>
              <td id="myTableTd" data-label="S.no">@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableReact;
