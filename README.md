# Only Curious - NASA API Project

_Only Curious_ takes a user-input date and renders all of the photographs taken by NASA's Curiosity Rover on that date.

I used a [NASA Open API](https://api.nasa.gov/) maintained by [Chris Cerami](https://github.com/chrisccerami/mars-photo-api).

The project is deployed with Netlify, take a look [here](https://nostalgic-newton-cbe80a.netlify.app/)!

I'd like to:

1. Offer input to select a different rover
1. ~Have the most recent set of images, or a single random image render before any input is taken~
1. Display tooltip on image-mouse-hover, showing metadata
1. ~~Set a range for the input, so that users cannot pick a date prior to Curiosity's landing on Mars~~
1. ~~Find a neater way to remove one set of images and render another~~ - stored an array of photos in state and created an Image component for each photo pulled from API
