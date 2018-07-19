import { calculateNights, getAvailableHotels } from "./date";
import data from "./__mocks__/hotels.json";

test("calculate nights between checkin and checkout", () => {
  expect(calculateNights("2020-10-10", "2020-10-12").nights).toBe(2);
  expect(calculateNights("2020-10-10", "2020-10-15").nights).toBe(5);
});

test("test invalid date entry ", () => {
  expect(calculateNights("2020-10-12", "2020-10-10").error).toBe(true);
});

test("get available hotels in certain data ", () => {
  expect(
    getAvailableHotels("2020-10-10", "2020-10-15", data.hotels).hotels.length
  ).toEqual(4);
  expect(
    getAvailableHotels("2020-10-10", "2020-10-12", data.hotels).hotels.length
  ).toEqual(5);
  expect(
    getAvailableHotels("2018-10-10", "2018-10-15", data.hotels).hotels.length
  ).toEqual(0);
});
