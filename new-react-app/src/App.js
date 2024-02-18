import logo from "./logo.svg";
import "./App.css";

const textcenter = {
  textAlign: "center",
};

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h2 style={{ textAlign: "center" }}>My new friend</h2>
      <h2 style={textcenter}>rock mama React mama</h2>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h1>Mintu Sikder</h1>
      <p>Web Developer</p>
    </div>
  );
}

function Friend() {
  return (
    <div className="component">
      <h1>All Friends</h1>
      <p>Sajib</p>
      <p>Rakib</p>
      <p>Sakib</p>
    </div>
  );
}

export default App;
