import React from "react";

function Char(props) {
  return (
    <div className="char">
      <div className="char-text">
        <p className="list-number">{props.listNumber}.&nbsp;</p>
        <p className="char-name">{props.char.name}</p>
      </div>
      <button created={props.char.created} onClick={props.moreInfo}>
        More Info
      </button>
    </div>
  );
}

export default Char;
