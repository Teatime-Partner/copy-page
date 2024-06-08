import React from "react";

function BigThumbnail(props) {
  const divStyle = {
    width: "450px",
    height: "auto",
    padding: "0px",
  };
  const imgStyle = {
    height: "auto",
    width: "440px",
    borderRadius: "3px",
    boxShadow: "0px 5px 5px rgb(17, 46, 84)",
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
