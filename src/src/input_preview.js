import React, { Component } from 'react';

export default class InputPreview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { input } = this.props;

    return (
      <h1>{ input }</h1>
    );
  }
}
