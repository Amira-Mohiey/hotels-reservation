import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./Sort";

configure({ adapter: new Adapter() });

describe(" test sort component", () => {
  let wrapper;
  let mockFn;

  beforeAll(() => {
    mockFn = jest.fn();
    wrapper = shallow(
      <Sort nights={10} sortByName={mockFn} sortByPrice={mockFn} />
    );
  });

  test("should render properly", () => {
    const nameSortButton = wrapper.find("#name-sort");
    const priceSortButton = wrapper.find("#price-sort");
    const buttonPrice = wrapper.find("sort-price");
    const nights = wrapper.find(".nights_span");
    expect(nameSortButton).toHaveLength(1);
    expect(priceSortButton).toHaveLength(1);
    expect(nights.props().children).toContain(10);
  });
});
