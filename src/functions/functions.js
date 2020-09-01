// GENERATES STRING DATE FOR 2 DAYS AGO
// can move this to component as a new method
// fetch (manifest url = https://api.nasa.gov/mars-photos/api/v1/manifests/Curiosity?api_key=DEMO_KEY)
// manifesturl.photo_manifest.max_date will access latest date with photographs

export function getLatestDate() {
  let date = new Date();
  date.setDate(date.getDate() - 2);
  let dd = String(date.getDate()).padStart(2, "0");
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let yyyy = date.getFullYear();

  date = `${yyyy}-${mm}-${dd}`;
  return date;
}
