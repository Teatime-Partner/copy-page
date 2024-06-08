import React from "react";
import discord from "../Assets/discord.jpg";
import "./footbar.css";

function Footbar() {
  return (
    <div className="footbar">
      <div className="discord">
        <img id="banner" src={discord} alt="Join us on discord!" />
      </div>
      <span className="socials">
        <a href="https://www.masterduelmeta.com/">Webpage reference for the project</a>
      </span>
      <span className="terms">
        <p>Terms of Service</p> <hr />
        <p>Contact</p> <hr />
        <p>Server status</p>
      </span>
    </div>
  );
}

export default Footbar;
