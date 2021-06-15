import React from 'react';
import ReactDOM from 'react-dom';

// interface User {
//   firstName: string;
//   lastName: string;
// }

// function formatName(user: User) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user: User = {
//   firstName: "윤",
//   lastName: "영채"
// }

// const element = <h1 tabIndex={0}>Hello {formatName(user)}</h1>

// function getGreeting(user?: User) {
//   if(user) {
//     return <h1>Hello, {formatName(user)}</h1>
//   }
//   return <h1>Hello, Stranger.</h1>
// }

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello world</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

interface WelmcomeProps {
  name: string;
}

// 함수 컴포넌트
// function Welcome(props: WelmcomeProps) {
//   return <h1>Hello, {props.name}</h1>
// }

// 클래스 컴포넌트
class Welcome extends React.Component<WelmcomeProps> {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

function App() {
  return (
    <div>
      <Welcome name="dudco1"/>
      <Welcome name="dudco2"/>
      <Welcome name="dudco3"/>
      <Welcome name="dudco4"/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
