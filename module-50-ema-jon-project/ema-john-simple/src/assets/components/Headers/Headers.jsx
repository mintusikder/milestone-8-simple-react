// import React from 'react';
import "./Header.css";
import logo from "../../images/Logo.svg";
const Headers = () => {
  return (
    <nav className="header">
     
        <img src={logo} alt="" />
        <div>
          <a href="/order">Order</a>
          <a href="/review">Order Review</a>
          <a href="/manage">Manage Inventory</a>
          <a href="/login">Login</a>
        </div>
     
    </nav>
  );
};

export default Headers;
