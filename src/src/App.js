import React, { Component } from 'react';
import Input from './input';
import InputPreview from './input_preview';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: ''
    };
  }

  handleKeyPress(value) {
    console.log(value);
    this.setState({
      pressed: value
    });
  }

  render() {
    return (
      <div>
        <Input returnedValue={this.handleKeyPress.bind(this)} />
      </div>
    );
  }
}
