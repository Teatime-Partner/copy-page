import React from "react";

function Small(props) {
  const divStyle = {
    width: "280px",
    height: "auto",
    padding: "7px 10px",
  };
  const imgStyle = {
    height: "auto",
    width: "290px",
    borderRadius: "3px",
    boxShadow: "0px 5px 5px rgb(17, 46, 84)",
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
