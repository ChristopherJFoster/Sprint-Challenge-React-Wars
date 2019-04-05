import React, { Component } from "react";
import CharList from "./components/CharList";
import CharCard from "./components/CharCard";
import "./css/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      moreCharInfo: {} // Get additional information ready to display. Not ideal, since this character's info in stored in state twice.
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  // I passed an arrow function into the event listener for the "More Info" button in the Char.js component. This allowed me to pass the 'created' property of the appropriate character, 'created' being a unique id. Here 'created' is passed into moreInfo as an argument, and I can find the index of the appropriate character by comparing the 'created' property of each item (char) in the starwarsChar array to the passed-in argument 'created.
  moreInfo = (created, e) => {
    e.preventDefault();
    // Changed this from indexOf() to filter, and then, since the filter will only ever return an array with a single item, I take the 'created' attribute of the the 0th item of the returned array. I think storing the chosen character's 'created' attribute in state (the attribute I'm using as an ID) might be the smallest amount of data I can store in state to achieve my desired result.
    const moreCharInfo = this.state.starwarsChars.filter(
      // This e.target.getAttribute("<attribute name>") was key to getting moreInfo to work properly. There seem to be some gotchas regarding which attributes can be accessed by e.target. See update, next comment above.
      char => char.created === created
    )[0].created;
    this.setState({ moreCharInfo: moreCharInfo });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="characters">
          <CharList
            starwarsChars={this.state.starwarsChars}
            moreInfo={this.moreInfo}
          />
          <CharCard
            moreCharInfo={this.state.starwarsChars.filter(
              char => char.created === this.state.moreCharInfo
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
