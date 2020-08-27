import React from "react";
import "./App.css";

import SelectDateAndRender from "./components/dateselect.component";
import Header from "./components/header.component";

class App extends React.Component {
  // state = {
  //   date: "",
  // };

  // selectDateHandler = (event) => {
  //   this.setState({
  //     date: event.target.value,
  //   });
  // };

  render() {
    // const apiKey = "DEMO_KEY"; // CHANGE TO ENV VARIABLE
    return (
      <div className="container">
        <Header />
        <br />
        <SelectDateAndRender
        // change={this.selectDateHandler}
        // date={this.state.date}
        // url={`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.state.date}&api_key=${apiKey}`}
        />
      </div>
    );
  }
}

export default App;
