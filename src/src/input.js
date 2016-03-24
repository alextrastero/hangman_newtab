export default class Input {

  componentDidMount() {
    window.addEventListener('keydown', evt => {
      this.handleKeyPress(evt);
    });
  }

  handleKeyPress(event) {
    const { returnedValue } = this.props;

    const { keyCode } = event;
    let value;

    if (keyCode >= 65 && keyCode <= 90) {
      value = String.fromCharCode(keyCode);
      returnedValue(value);
    }
  }

  render() {
    return null;
  }
}
