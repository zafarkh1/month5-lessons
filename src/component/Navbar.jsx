import React from "react";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/keyboards">KeyBoards</NavLink>
    </>
  );
}

export default Navbar;
