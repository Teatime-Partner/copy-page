import React from "react";

function ContentButton(prop) {
  return (
    <button className="content-button" id={prop.type}>
      {prop.content}
    </button>
  );
}

export default ContentButton;
