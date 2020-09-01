import React, { Component } from "react";
import Image from "./image.component";
import { getLatestDate } from "../functions/functions";

class SelectDateAndRender extends Component {
  state = {
    date: getLatestDate(),
    url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${getLatestDate()}&api_key=6ItzpbwnWxj8ZbItja9hE9UbkvqP1HiDSpFFNg2q`,
    photos: [],
    input: false,
  };

  fetchImages = () => {
    fetch(this.state.url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          photos: data.photos,
        });
      });
  };

  componentDidMount() {
    this.fetchImages();
  }

  selectDateHandler = (event) => {
    this.setState(
      {
        date: event.target.value,
        url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${event.target.value}&api_key=6ItzpbwnWxj8ZbItja9hE9UbkvqP1HiDSpFFNg2q`,
        input: true,
      },
      this.fetchImages()
    );
  };

  render() {
    let photos = (
      <div id="rover-photos">
        {this.state.photos.map((photo) => {
          return (
            <Image src={photo.img_src} alt={photo.camera.name} key={photo.id} />
          );
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
            max={getLatestDate()}
          />
        </div>
        {photos}
      </div>
    );
  }
}

export default SelectDateAndRender;
