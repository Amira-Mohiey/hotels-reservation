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

export function search(filters, allHotels) {
  var hotels = {};
  if (filters.name && filters.price) {
    var nameHotelsArr = searchByName(filters.name, allHotels).hotels;
    var priceHotelsArr = searchByPrice(filters.price, allHotels, filters.nights)
      .hotels;
    hotels = nameHotelsArr.filter(
      value => -1 !== priceHotelsArr.indexOf(value)
    );
    return { hotels };
  } else {
    if (filters.name) {
      hotels = searchByName(filters.name, allHotels);
    }
    if (filters.price) {
      hotels = searchByPrice(filters.price, allHotels, filters.nights);
    }
  }
  return hotels;
}
