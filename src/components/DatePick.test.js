import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DatePick from "./DatePick";

configure({ adapter: new Adapter() });

describe(" test Date picker component", () => {
  var wrapper;
  var mockFn;

  beforeAll(() => {
    mockFn = jest.fn();
    wrapper = shallow(<DatePick displayHotels={mockFn} error={false} />);
  });

  test("should render properly", () => {
    const buttons = wrapper.find(".date_pick_button");
    const fromDateInputs = wrapper.find("#from");
    const toDateInputs = wrapper.find("#to");
    expect(buttons).toHaveLength(1);
    expect(fromDateInputs).toHaveLength(1);
    expect(toDateInputs).toHaveLength(1);
  });

  test("test error msgs", () => {
    wrapper.setProps({ error: "invalid date " });
    const error = wrapper.find(".error");
    expect(error).toHaveLength(1);
  });
});
