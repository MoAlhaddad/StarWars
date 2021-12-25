import React, { PureComponent } from "react";
import PersonList from "./PersonList";
//import styles
import "../styles/App.css";

export default class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <h2 className="app-title">Star Wars App</h2>
        <div className="content"></div>
      </div>
    );
  }
}
