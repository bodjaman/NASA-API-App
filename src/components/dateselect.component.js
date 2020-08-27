import React, { Component } from "react";

class SelectDateAndRender extends Component {
  state = {
    date: "",
    url: "",
  };

  selectDateHandler = (event) => {
    this.setState({
      date: event.target.value,
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${event.target.value}&api_key=DEMO_KEY`,
    });
  };

  submitDateHandler = (e) => {
    console.log(this.state.url);
    document.getElementById("rover-photos").innerHTML = "";
    fetch(this.state.url)
      .then((res) => res.json())
      .then((data) => {
        let photos = data.photos;
        for (let i = 0; i < photos.length; i++) {
          let element = document.createElement("img");
          element.src = photos[i].img_src;
          element.className = "photo";
          document.getElementById("rover-photos").appendChild(element);
        }
      });
  };

  render() {
    return (
      <div>
        <label>Select a date! </label>
        <input
          type="date"
          name="date"
          id="date"
          onChange={this.selectDateHandler}
          value={this.state.date}
        />
        <button onClick={this.submitDateHandler}>Go</button>
        <div id="rover-photos">
          {/* <p>{this.state.date}</p>
          <p>{this.state.url}</p> */}
        </div>
      </div>
    );
  }
}

export default SelectDateAndRender;
