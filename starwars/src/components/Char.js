import React from "react";

function Char(props) {
  return (
    <div className="char">
      <div className="char-text">
        <p className="list-number">{props.listNumber}.&nbsp;</p>
        <p className="char-name">{props.char.name}</p>
      </div>
      {/* By passing an arrow function into the event listener, I can pass up other arguments than just the event (I think the arrow function—with its implicit 'this' binding—might be required, but I'm not sure). In this case, I pass up the "created" attribrute, which is a unique identifier I can use to tell the stateful component (App.js in this case) which character's "More Info" button clicked by the user. */}
      <button onClick={e => props.moreInfo(props.char.created, e)}>
        More Info
      </button>
    </div>
  );
}

export default Char;
