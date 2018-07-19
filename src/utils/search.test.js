import {
  getMinPrice,
  getMaxPrice,
  searchByName,
  searchByPrice,
  search
} from "./search";
import data from "./__mocks__/hotels.json";

test("test minimum price in hotels in 2 nights function", () => {
  expect(getMinPrice(data, 1)).toBe(79.4);
  expect(getMinPrice(data, 2)).toBe(158.8); // 79.4 * 2

});
test("test max price in hotels funtion", () => {
  expect(getMaxPrice(data, 2)).toBe(222); // 111 * 2

});
test("test search by name function", () => {
  expect(searchByName("golden", data).hotels[0].name.toLowerCase()).toContain(
    "golden"
  );
  expect(searchByName("me", data).hotels.length).toBe(2);
});
test("test search by price function", () => {
  expect(searchByPrice(222, data, 2).hotels.length).toBe(6); // all hotels all less than or equal 222 in 2nights
  expect(searchByPrice(100, data, 1).hotels.length).toBe(3);
  expect(searchByPrice(50, data, 2).hotels.length).toBe(0);
});
test("test search function", () => {
  var allFilters = { name: "media", price: 500, nights: 3 };
  var nameFilter = { name: "me" };
  var priceFilter = { price: 300, nights: 3 };
  expect(search(allFilters, data).hotels.length).toBe(1);
  expect(search(nameFilter, data).hotels.length).toBe(2);
  expect(search(priceFilter, data).hotels.length).toBe(3);
});
