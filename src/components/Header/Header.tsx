import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header box flex_center">
      <ul className="list flex_center flex_row">
        <li>
          <Link to={"/"}>خونه</Link>
        </li>
        <li>
          <Link to={"/shop"}>مغازه</Link>
        </li>
        <li>
          <Link to={"/cart"}>سبد خریدت</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
