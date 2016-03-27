import React, { Component, PropTypes } from 'react';

class PuzzleSolver extends Component {
  constructor(props) {
    super(props);

    this.secretWord = props.word;
    // this.word = this.secretWord.toUpperCase().split('');
    // this.output = Array(this.word.length).fill('_');
    this.errors = 0;
  }

  parseOutput(input) {
    if (!input) { return; }

    this.found = false;
    for (var i = 0; i < this.word.length; i++) {
      if (this.word[i] === input) {
        this.output[i] = this.word[i];
        this.found = true;
      }
    }
    if(!this.found) {
      this.errors++;
    }
  }

  componentWillUpdate(nextProps) {
    if (!this.word) {
      this.word = nextProps.word.toUpperCase().split('');
      this.output = Array(this.word.length).fill('_');
    }
    // console.log(this.word);
    // console.log(this.output);

    this.parseOutput(nextProps.input);
  }

  shouldComponentUpdate() {
    return this.errors < this.props.lives + 1;
  }

  renderOutput() {
    if(this.output) {
      return this.output.map((letter, i) => <span key={letter+i}>{letter}</span>);
    }
  }

  renderHangman() {
    const val = this.errors * 275;
    const left = `-${val}px`;

    return (
      <div
        style={{
          backgroundImage: 'url("hanged.jpg")',
          backgroundPosition: left + ' top',
          width: '275px',
          height: '326px'
        }}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderOutput()}
        {this.renderHangman()}
      </div>
    );
  }
}

export default PuzzleSolver;

PuzzleSolver.propTypes = {
  input: PropTypes.string,
  word: PropTypes.string.isRequired,
  lives: PropTypes.number
};
