import React from "react";
import "./App.css";

import SelectDateAndRender from "./components/dateselect.component";
import Header from "./components/header.component";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <SelectDateAndRender />
      </div>
    );
  }
}

export default App;
