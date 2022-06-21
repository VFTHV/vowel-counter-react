import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = { letters: "" };
  }

  onVowelCount = (event) => {
    if (this.state.letters.length === 0) {
      return;
    }
    event.preventDefault();
    const allVowels = "aeiouy".split("");
    let counter = 0;
    this.state.letters.split("").forEach((letter) => {
      if (allVowels.includes(letter)) {
        counter++;
      }
    });

    const hasVowels = `Number of vowels in your phrase: ${counter}`;
    const noVowels = "There were no vowels in your phrase";
    counter !== 0 ? alert(hasVowels) : alert(noVowels);
    this.setState({ letters: "" });
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
      </div>
    );
  }
}

export default App;
