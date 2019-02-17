import React from "react";

const CharCard = props => {
  // Stops cards from displaying until a character is chosen:
  return (
    <React.Fragment>
      {!props.moreCharInfo.name && (
        <div className="char-card">
          <div className="card-background" />
          <div className="card-foreground">
            <h3>
              Click a character's More Info button to find out...more
              information about that character.
            </h3>
          </div>
        </div>
      )}
      {props.moreCharInfo.name && (
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
      )}
    </React.Fragment>
  );
};

export default CharCard;
