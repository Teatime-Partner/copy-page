import React from "react";

function BigThumbnail(props) {
  const divStyle = {
    width: "450px",
    height: "auto",
    padding: "5px 0px",
  };
  const imgStyle = {
    height: "auto",
    width: "440px",
    borderRadius: "3px",
    border: "1px solid rgb(75, 102, 129)",
    boxShadow: "0px 10px 5px rgb(17, 39, 61)",
  };

  return (
    <div className="thumbnail-big" style={divStyle}>
      <a href={props.url}>
        <img src={props.photo} alt={props.desc} style={imgStyle}></img>
      </a>
    </div>
  );
}

export default BigThumbnail;
