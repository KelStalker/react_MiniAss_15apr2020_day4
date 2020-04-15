import React from "react";
import ReactDOM from "react-dom";
import ChangeText from "./components/ChangeText";

class App extends React.Component {
  componentWillUnmount() {
    console.log('"componentWillUnmount()" ran.');
  }
  render() {
    return (
      <div className="App">
        <h1>React Day 4 Mini-Assignment</h1>
        <ChangeText />
      </div>
    );
  }
}

export default App;
