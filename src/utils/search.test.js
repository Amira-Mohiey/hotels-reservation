import {
  getMinPrice,
  getMaxPrice,
  searchByName,
  searchByPrice
} from "./search";
import data from "./__mocks__/hotels.json";

test("test minimum price in hotels in 2 nights function", () => {
  expect(getMinPrice(data, 2)).toBe(158.8); // 79.4 * 2
});
test("test max price in hotels funtion", () => {
  expect(getMaxPrice(data, 2)).toBe(222); // 111 * 2
});
test("test search by name function", () => {
  expect(searchByName("golden", data).hotels[0].name.toLowerCase()).toContain(
    "golden"
  );
});
test("test search by price function", () => {
  expect(searchByPrice(222, data, 2).hotels.length).toBe(6);   // all hotels all less than or equal 222 in 2nights
});
