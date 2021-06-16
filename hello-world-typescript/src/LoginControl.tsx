import React from "react";

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Greeting(props: {isLoggedIn: boolean}) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LogoutButton(props: {handleLogout: () => void}) {
  return <button onClick={props.handleLogout}>Logout</button>
}

function LogInButton(props: {handleLogin: () => void}) {
  return <button onClick={props.handleLogin}>LogIn</button>
}

interface LoginControlProps {}
interface LoginControlState {
  isLogged: boolean;
}

export default class LoginControl extends React.Component<LoginControlProps, LoginControlState> {
  constructor(props: LoginControlProps) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }

  handleLogout = () => {
    this.setState({
      isLogged: false,
    })
  }

  handleLogin = () => {
    this.setState({
      isLogged: true,
    })
  }

  render() {
    const isLoggedIn = this.state.isLogged;
    let button;
    if(isLoggedIn) {
      button = <LogoutButton handleLogout={this.handleLogout}/>
    } else {
      button = <LogInButton handleLogin={this.handleLogin} />
    }
    
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}