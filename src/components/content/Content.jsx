import React from "react";
import "./content.css";
import Small from "../buttons/Thumbnail.jsx";
import tier from "../Assets/tier.jpg";
import decks from "../Assets/decks.jpg";
import packs from "../Assets/packs.jpg";

function Content() {
  return (
    <div className="container">
      <></>
      <Small photo={tier} url="https://www.masterduelmeta.com/tier-list" alt="New Tier List" />
      <Small photo={decks} url="https://www.masterduelmeta.com/top-decks" alt="Top Decks" />
      <Small photo={packs} url="https://www.masterduelmeta.com/secret-packs" alt="Secret Packs" />
      <></>
    </div>
  );
}

export default Content;
