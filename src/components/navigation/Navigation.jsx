import React from "react";
import "./navigation.css";

// Create navigation menu to sit above the page
function NavBar() {
  return (
    <div className="menu">
      <div className="menu-container">
        <p id="logo">Logo</p>
        <p id="tier">Tier List</p>
        <p id="top">Top Decks</p>
        <p id="pack">Secret packs</p>
        <p id="leak">Leaks & updates</p>
        <p id="card">Top cards</p>
        <p id="search">Search</p>
        <button id="login">Login</button>
      </div>
    </div>
  );
}

export default NavBar;
