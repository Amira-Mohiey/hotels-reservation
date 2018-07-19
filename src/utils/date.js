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
  var fromDate = new Date(from).setHours(0,0,0,0);
  var toDate = new Date(to).setHours(0,0,0,0);
  var availableHotels = [];
  hotels.map(hotel => {
    return hotel.availability.map(availability => {
      var fromArr = availability.from.split("-");
      var toParts = availability.to.split("-");
      var hotelAvailableFrom = new Date(fromArr[2], fromArr[1] - 1, fromArr[0]).setHours(0,0,0,0);
      var hotelAvailableTo = new Date(toParts[2], toParts[1] - 1, toParts[0]).setHours(0,0,0,0);
      if (hotelAvailableFrom <= fromDate && hotelAvailableTo >= toDate) {
        console.log(hotel.name)
        if(availableHotels.indexOf(hotel)===-1)
       { availableHotels.push(hotel)}}
      
     return availableHotels });
  });
  console.log(availableHotels)
  return { hotels: availableHotels };
}
