import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchByPrice from "./SearchByPrice";

configure({ adapter: new Adapter() });

describe(" test search by price component", () => {
  let wrapper;
  let mockFn;

  beforeAll(() => {
    mockFn = jest.fn();
    wrapper = shallow(
      <SearchByPrice
        reset={mockFn}
        minPrice={mockFn}
        maxPrice={mockFn}
        search={mockFn}
      />
    );
  });

  test("should render properly", () => {
    const priceInput = wrapper.find("#myRange")
    expect(priceInput).toHaveLength(1);
  });
});
