import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DatePick from "./DatePick";

configure({ adapter: new Adapter() });

describe("hotel list component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<DatePick />);
  });
  it("Date picker component test", () => {
    const HOTEl_LIST = wrapper.find(".card-title");
    expect(HOTEl_LIST).toHaveLength(6);
    HOTEl_LIST.forEach((card, i) => {
      expect(card.props().children).toEqual(data.hotels[i].name);
    });
  });
});
