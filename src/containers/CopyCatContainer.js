import React from "react";
import CopyCat from "../components/Copycat";

const images = {
  copycat:
    "https://content.codecademy.com/courses/React/react_photo_copycat.png",
  quietcat:
    "https://content.codecademy.com/courses/React/react_photo_quietcat.png",
};

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      userInput: "",
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ userInput: e.target.value });
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  render() {
    const copying = this.state.copying;
    const toggleTape = this.toggleTape;

    return (
      <CopyCat
        copying={copying}
        toggleTape={toggleTape}
        input={this.state.userInput}
        handleChange={this.handleChange}
      />
    );
  }
}

export default CopyCatContainer;
