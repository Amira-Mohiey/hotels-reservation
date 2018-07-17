export function getHotels() {
  var url = "https://api.myjson.com/bins/tl0bp";
  return fetch(url, {
    method: "GET"
  }).then(response => {
    return response.json();
  });
}
