import React from "react";

const CharCard = props => {
  // Stops cards from displaying until a character is chosen:
  if (!props.moreCharInfo.name) {
    return <div className="blank-char-card" />;
  } else {
    return (
      <div className="char-card">
        <div className="card-background" />
        <div className="card-foreground">
          <h2>{props.moreCharInfo.name}</h2>
          <p>Birth Year: {props.moreCharInfo.birth_year}</p>
          <p>Gender: {props.moreCharInfo.gender}</p>
          <p>Eye Color: {props.moreCharInfo.eye_color}</p>
          <p>Hair Color: {props.moreCharInfo.hair_color}</p>
          <p>Mass: {props.moreCharInfo.mass}</p>
          <p>Height: {props.moreCharInfo.height}</p>
        </div>
      </div>
    );
  }
};

export default CharCard;
