import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Simple element
// const name = 'Clément Peyrat';
// const element = <h1>Hi {name}</h1>;
// root.render (
//   element
// )

// Element with use of a function
// const user = {
//   firstName: "Clément",
//   lastName: "Peyrat"
// };
// function formatName(user) {
//   return user.firstName + " " + user.lastName
// }
// const username = <h1>
//   Hello {formatName(user)}
// </h1>
// root.render (
//   username
// )

// Element in if-else statement
// const user = {
//   firstName: "Clément",
//   lastName: "Peyrat"
// };
// function formatName(user) {
//   return user.firstName + " " + user.lastName
// }
// const username = formatName(user)
// function greetUser() {
//   if(user) {
//     return <h1>Hello {username}</h1>;
//   } else {
//     return <h1>Hi stranger</h1>;
//   }
// }
// root.render(greetUser())


// Element with childrens and attributes
// const user = {
//   image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
// }
// const element = (
//   <div>
//     <h1>Here's the user image :</h1>
//     <img src={user.image} alt="" />
//   </div>
// )
// root.render(element)

// Ways to write an element
// const element = (
//   <h1 className="greeting">
//     Bonjour, monde !
//   </h1>
// );
// is the same thing as
// const element = React.createElement(
//   'h1',
//   { className: 'greeting' },
//   'Bonjour, monde !'
// );
// which is in reality that
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Bonjour, monde !'
//   }
// };

// Little exercice, displaying a yellow div with a text inside
// const element = (
//   <div className="yellow">
//     <h1>Hello World !</h1>
//   </div>
// )
// root.render(element)

// Function to get the time
// function tick() {
//   const element = (
//     <div>
//       <h1>Bonjour</h1>
//       <h2>Il est {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root.render(element)
// }
// setInterval(() => {
//   tick()
// }, 1000);

// These are components, different syntax but same result for React
// function Welcome(props) {
//   return <h1>Bonjour, {props.name}</h1>;
// }
// class Bob extends React.Component {
//   render() {
//     return <h1>Bonjour, {this.props.name}</h1>;
//   }
// }

// Component with props given by the element
// function Welcome(props) {
//   return <h1>Welcome {props.name} !</h1>
// };
// const element = <Welcome name="Sara"/>
// root.render(element)

// A function is pure when it does not change its props (the arguments).

// Clock separated from tick function
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello world !</h1>
//       <h2>It is {props.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// }

// function tick() {
//   root.render(
//     <Clock date={new Date()}/>
//   );
// }

// setInterval(() => {
//   tick()
// }, 1000);

// Convert a function into a class. render > return > what we want to render.
// class Clock extends React.Component {
//   render() {
//     return(
//       <div>
//         <h1>Hello world !</h1>
//         <h2>It is {this.props.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// Add a local state to a class. Add lifecycle methods (didmount and unmount) and tick.
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()}
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return(
//       <div>
//         <h1>Hello world !</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }
// root.render(<Clock />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
