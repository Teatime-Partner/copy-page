import React from "react";

function Small(props) {
  const divStyle = {
    width: "280px",
    height: "188px",
    padding: "10px",
  };
  const imgStyle = {
    height: "auto",
    width: "290px",
  };

  return (
    <div className="thumbnail-small" style={divStyle}>
      <a href={props.url}>
        <img src={props.photo} alt={props.desc} style={imgStyle}></img>
      </a>
    </div>
  );
}

export default Small;
