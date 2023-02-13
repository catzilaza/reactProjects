import React from "react";
import { Link } from "react-router-dom";


function Sideleft() {
  return (
    <ul className="list-group mt-5">
      <li className="list-group-item" aria-current="true">
        <Link to="/admin">Admin Dashboard</Link>
      </li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>
    </ul>
  );
}

export default Sideleft;
