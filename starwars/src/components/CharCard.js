import React from "react";

// Stops cards from displaying until a character is chosen:
const CharCard = ({ moreCharInfo }) => {
  // The incoming prop { moreCharInfo } is an array with a single object in it. The easiest way (I know of) for the UI to know whether to display info is to check length of the moreCharInfo. However, to get the character values out of moreCharInfo, the index ([0]) must references each time, which is inelegant. Assigning a variable (chosenChar) to moreCharInfo[0]—thus only referencing the array once) seems slightly more elegant. However, I worry that overall, the code is less readable.
  const chosenChar = moreCharInfo[0];
  return (
    <div className="char-card">
      <div className="card-background" />
      <div className="card-foreground">
        {moreCharInfo.length === 0 && (
          <h3>
            Click a character's More Info button to find out...more information
            about that character.
          </h3>
        )}
        {moreCharInfo.length === 1 && (
          <React.Fragment>
            <h2>{chosenChar.name}</h2>
            <p>Birth Year: {chosenChar.birth_year}</p>
            <p>Gender: {chosenChar.gender}</p>
            <p>Eye Color: {chosenChar.eye_color}</p>
            <p>Hair Color: {chosenChar.hair_color}</p>
            <p>Mass: {chosenChar.mass}</p>
            <p>Height: {chosenChar.height}</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default CharCard;
