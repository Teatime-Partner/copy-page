import React from "react";
import "./content.css";
//import components
import Small from "../buttons/Thumbnail.jsx";
import ContentButton from "../buttons/Button-content.jsx";
import NewsList from "./news.jsx";
import BigThumbnail from "../buttons/Thumbnail-big.jsx";
//import images
import tournament from "../Assets/tournament.jpg";
import competetive from "../Assets/competetive.jpg";
import tier from "../Assets/tier.jpg";
import decks from "../Assets/decks.jpg";
import packs from "../Assets/packs.jpg";
import leaks from "../Assets/leaks.jpg";
import top from "../Assets/top.jpg";
import guide from "../Assets/guide.jpg";
import update from "../Assets/update.jpg";
import release from "../Assets/release.jpg";
import newleaks from "../Assets/newleaks.jpg";
import selection from "../Assets/selection.jpg";
import selection2 from "../Assets/selection2.jpg";
import secret from "../Assets/secret.jpg";

//return components with props
function Content() {
  return (
    <div className="container">
      <Small photo={tier} url="https://www.masterduelmeta.com/tier-list" desc="New Tier List" />
      <Small photo={decks} url="https://www.masterduelmeta.com/top-decks" desc="Top Decks" />
      <Small photo={packs} url="https://www.masterduelmeta.com/secret-packs" desc="Secret Packs" />
      <Small
        photo={leaks}
        url="https://www.masterduelmeta.com/leaks-and-updates/"
        desc="Leaks and updates"
      />
      <Small photo={top} url="https://www.masterduelmeta.com/top-cards/" desc="Top cards" />
      <Small photo={guide} url="https://www.masterduelmeta.com/guides/" desc="Guides" />
      <ContentButton type="tournament" content="Tournaments" />
      <ContentButton type="shop" content="Shop" />
      <ContentButton type="deck" content="Deck Builder" />
      <ContentButton type="meta" content="Yu-Gi-Oh! Meta" />
      <NewsList />

      <div className="big">
        <BigThumbnail photo={tournament} url="" desc="Weekly Tournament" />
        <BigThumbnail photo={competetive} url="" desc="Competetive decks" />
        <BigThumbnail photo={update} url="" desc="Legacy pack update" />
        <BigThumbnail photo={release} url="" desc="New Structure release" />
        <BigThumbnail photo={newleaks} url="" desc="Leaks for new season, trials and shop" />
        <BigThumbnail photo={selection} url="" desc="New selection pack" />
        <BigThumbnail photo={selection2} url="" desc="New selection pack" />
        <BigThumbnail photo={secret} url="" desc="New secret pack" />
      </div>
      <ContentButton type="more" content="Load more..." />
    </div>
  );
}

export default Content;
