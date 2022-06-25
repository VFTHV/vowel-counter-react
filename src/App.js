import React from "react";
import Announcement from "./components/announcement";

class App extends React.Component {
  constructor() {
    super();

    this.state = { letters: null, vowels: '' };
  }

  onVowelCount = (event) => {
    if (this.state.letters.length === 0) {
      return;
    }
    event.preventDefault();
    const allVowels = "aeiouyAEIOUY".split("");
    let counter = 0;
    this.state.letters.split("").forEach((letter) => {
      if (allVowels.includes(letter)) {
        counter++;
      }
    });

    this.setState({ letters: '', vowels: counter });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row text-center">
          <h1>Vowel Counter</h1>
        </div>
        <form>
          <input
            type="text"
            id="myInput"
            className="form-control"
            aria-describedby="vowel-counter"
            onChange={(e) => this.setState({ letters: e.target.value })}
            value={this.state.letters}
            required
          />
          <div className="row text-center">
            <div className="col">
              <button
                type="submit"
                className="btn btn-success mt-3"
                onClick={this.onVowelCount}
              >
                Check
              </button>
            </div>
          </div>
        </form>
        {this.state.vowels === null ? null : (
          <Announcement vowels={this.state.vowels} />
        )}
      </div>
    );
  }
}

export default App;
