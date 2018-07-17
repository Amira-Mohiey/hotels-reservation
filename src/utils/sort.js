var compare = (a, b) => {
  let comparison = 0;
  if (a.name > b.name) {
    comparison = 1;
  } else if (b.name > a.name) {
    comparison = -1;
  }
  return comparison;
};
export function sortByName(hotels) {
  hotels.hotels.sort(compare);
  return hotels;
}
export function sortByPrice(hotels) {
  hotels.hotels.sort((a, b) => {
    return a.price - b.price;
  });
  return hotels;
}
