import React from "react";

interface ClockProps {
}

interface ClockState {
  date: Date;
}

class Clock extends React.Component<ClockProps, ClockState> {
  private timerID?: NodeJS.Timeout;
  constructor(props: ClockProps) {
    super(props);

    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    // 컴포넌트 생성될 때 호출됨
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    )
  }

  componentWillUnmount() {
    // 컴포넌트가 없어질 때 호출됨
    if(this.timerID) {
      clearInterval(this.timerID);
    }
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }
  
  render() {
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;