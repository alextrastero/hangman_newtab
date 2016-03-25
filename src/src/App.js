import React, { Component } from 'react';
import Input from './input';
import InputPreview from './input_preview';
import PuzzleSolver from './puzzle_solver';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  handleKeyPress(value) {
    this.setState({
      input: value
    });
  }

  render() {
    return (
      <div>
        <Input returnedValue={this.handleKeyPress.bind(this)} />
        <InputPreview input={this.state.input} />
        <PuzzleSolver input={this.state.input} />
      </div>
    );
  }
}
