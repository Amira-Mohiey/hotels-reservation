import { sortByName, sortByPrice } from "./sort";
import data from "./__mocks__/hotels.json";

test("test sort by name function", () => {
  expect(sortByName(data).hotels[0].name).toBe("Concorde Hotel");
  expect(sortByName(data).hotels[1].name).toBe("Golden Tulip");
  expect(sortByName(data).hotels[2].name).toBe("Le Meridien");
  expect(sortByName(data).hotels[5].name).toBe("Rotana Hotel");
});
test("test sort by price function", () => {
  expect(sortByPrice(data).hotels[0].price).toBe(79.4);
  expect(sortByPrice(data).hotels[5].price).toBe(111);
});
