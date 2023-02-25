import React from "react";
import "./TableReact.css";
import dataItem from "../dataMock/dataMock";
import { useTable } from "react-table";

function TableReact() {
  const data = React.useMemo(() => dataItem, []);
  const columns = React.useMemo(() => [
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
  ],[]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="TableReact">
      <div className="container">
        <table className="table table-bordered" {...getTableProps()} style={{color:"white"}}>
          <thead>
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
                <tr {...row.getRowProps()}>{row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}</tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    
  );
}

export default TableReact;
