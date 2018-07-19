import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchByName from "./SearchByName";

configure({ adapter: new Adapter() });

describe(" test search by name component", () => {
  let wrapper;
  let mockFn;

  beforeAll(() => {
    mockFn = jest.fn();
    wrapper = shallow(<SearchByName search={mockFn} reset={mockFn} />);
  });

  test("should render properly", () => {
    const searchInput = wrapper.find("#search-input");
    const searchButton = wrapper.find(".search_button");
    expect(searchInput).toHaveLength(1);
    expect(searchButton).toHaveLength(1);
  });
  test("test setstate Name", () => {
    wrapper.instance().setName({ target: { value: "Concorde" } });
    expect(wrapper.state("name")).toEqual("Concorde");
  });
  test("search button ", () => {
    wrapper.find(".search_button").simulate("click");
  });
});
