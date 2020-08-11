// To Do:
// 1) Add a button with event listener (click) OR add change/input listener to date-form
// 2) Call function on event (click/change/input) that sets selectedDate variable
//    - See examples: https://www.w3schools.com/jsref/prop_date_value.asp
// 3) Add links - Github, About, API link
// 4) Push to GitHub and deploy on Netlify
// 5) Add extra features
//    - camera name on mouse-hover (following cursor)
//    - colour overlay buttons
//    - load images only, NOT whole page on new date

const apiKey = "6ItzpbwnWxj8ZbItja9hE9UbkvqP1HiDSpFFNg2q";
let dateForm = document.getElementById("selected-date");
let submit = document.getElementById("submit");
let selectedDate = "2015-06-03";
let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${selectedDate}&api_key=${apiKey}`;
submit.addEventListener("click", changeDate);

function changeDate() {
  selectedDate = dateForm.value;
}

function getImages() {
  fetch(url)
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
}

getImages();
