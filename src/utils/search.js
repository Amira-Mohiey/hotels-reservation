export function getMinPrice(hotels, nights) {
  return (
    hotels.hotels.reduce(
      (min, hotel) => (hotel.price < min ? hotel.price : min),
      hotels.hotels[0].price
    ) * nights
  );
}
export function getMaxPrice(hotels, nights) {
  return (
    hotels.hotels.reduce(
      (max, hotel) => (hotel.price > max ? hotel.price : max),
      hotels.hotels[0].price
    ) * nights
  );
}

export function searchByName(text, availableHotels) {
  var hotels = [];
  hotels = availableHotels.hotels.filter(hotel => {
    return hotel.name.toLowerCase().includes(text.toLowerCase());
  });
  return { hotels };
}
export function searchByPrice(maxPrice, availableHotels, nights) {
  var price = Math.round(maxPrice / nights);

  var hotels = availableHotels.hotels.filter(hotel => {
    return Math.round(hotel.price) <= price;
  });
  return { hotels };
}
