import { calculateNights, getAvailableHotels } from "./date";
import data from "./__mocks__/hotels.json";

test("calculate nights between checkin and checkout", () => {
  expect(calculateNights("2020-10-10", "2020-10-12").nights).toBe(2);
});
test("test invalid date entry ", () => {
  expect(calculateNights("2020-10-12", "2020-10-10").error).toBe(true);
});

test("get available hotels in certain data ", () => {
  var hotels = data.hotels;
  expect(
    getAvailableHotels("2020-10-10", "2020-10-15", hotels).hotels.length
  ).toEqual(4);
});

