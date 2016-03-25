import React, { Component } from 'react';

export default class PuzzleSolver extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input } = this.props;

    const secretWord = "PEPE";
    if (secretWord.indexOf(input) > -1) {
      console.log('pepe');
    }

    return (
      <h1>{this.props.input}</h1>
    );
  }
}
