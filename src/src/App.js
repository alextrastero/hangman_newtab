import React, { Component } from 'react';
import Input from './input';
import InputPreview from './input_preview';
import PuzzleSolver from './puzzle_solver';
import reqwest from 'reqwest';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      word: ''
    };
  }

  componentDidMount() {
    reqwest({
      url: 'http://randomword.setgetgo.com/get.php',
      type: 'jsonp',
      method: 'post',
      success: function (resp) {
        this.setState({
          word: resp.Word
        });
      }.bind(this)
    });
  }

  handleKeyPress(value) {
    this.setState({
      input: value
    });
  }

  render() {
    const { input, word } = this.state;

    return (
      <div>
        <Input returnedValue={this.handleKeyPress.bind(this)} />
        <PuzzleSolver lives={6} input={input} word={word} />
        <InputPreview input={input} />
      </div>
    );
  }
}
