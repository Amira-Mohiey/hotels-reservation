export function calculateNights(from, to) {
  const DAY = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(from);
  var secondDate = new Date(to);
  if (secondDate > firstDate) {
    var nights = Math.round(Math.abs((firstDate - secondDate) / DAY));
    return {
      nights,
      error: false
    };
  } else {
    return { error: true };
  }
}

export function getAvailableHotels(from, to, hotels) {
  var fromDate = new Date(from);
  var toDate = new Date(to);
  var availableHotels = [];
  hotels.map(hotel => {
    return hotel.availability.map(availability => {
      var fromArr = availability.from.split("-");
      var toParts = availability.to.split("-");
      var hotelAvailableFrom = new Date(fromArr[2], fromArr[1] - 1, fromArr[0]);
      var hotelAvailableTo = new Date(toParts[2], toParts[1] - 1, toParts[0]);
      if (hotelAvailableFrom <= fromDate && hotelAvailableTo >= toDate) {
        availableHotels.push(hotel);
      }
     return availableHotels });
  });
  return { hotels: availableHotels };
}
