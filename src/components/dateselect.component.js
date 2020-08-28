import React, { Component } from "react";
import Image from "./image.component";

class SelectDateAndRender extends Component {
  state = {
    date: "",
    url: "",
    photos: [],
  };

  selectDateHandler = (event) => {
    this.setState(
      {
        date: event.target.value,
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${event.target.value}&api_key=6ItzpbwnWxj8ZbItja9hE9UbkvqP1HiDSpFFNg2q`,
      },
      () => {
        fetch(this.state.url)
          .then((res) => res.json())
          .then((data) => {
            this.setState({
              photos: data.photos,
            });
          });
      }
    );
  };

  render() {
    let photos = (
      <div id="rover-photos">
        {this.state.photos.map((photo) => {
          return <Image src={photo.img_src} alt={photo.camera.name} />;
        })}
      </div>
    );

    return (
      <div id="main">
        <div className="dateinput">
          <label>Select a date: </label>
          <input
            type="date"
            name="date"
            id="date"
            onChange={this.selectDateHandler}
            value={this.state.date}
            min="2012-08-06"
          />
        </div>
        {photos}
      </div>
    );
  }
}

export default SelectDateAndRender;
