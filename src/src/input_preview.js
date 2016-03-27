import React, { PropTypes } from 'react';

const InputPreview = ({input}) =>
  <h1>{ input }</h1>;

export default InputPreview;

InputPreview.propTypes = {
  input: PropTypes.string
};
