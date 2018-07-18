import { sortByName, sortByPrice } from "./sort";
import data from "./__mocks__/hotels.json";

test("test sort by name function", () => {
    expect(sortByName(data).hotels[0].name).toBe("Concorde Hotel"); 
  });
  test("test sort by price function", () => {
    expect(sortByPrice(data).hotels[0].price).toBe(79.4); 
  });