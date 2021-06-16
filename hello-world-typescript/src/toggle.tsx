import React from "react";

interface ToggleProps {}
interface ToggleState {
  isToggleOn: boolean;
}

class Toggle extends React.Component<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props);
    this.state = {
      isToggleOn: false,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState(state => ({
  //     isToggleOn: !state.isToggleOn,
  //   }));
  // }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  render() {
    return (
      <button /* onClick={() => this.handleClick()}*/ onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    )
  }
}

export default Toggle;