import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HotelList from "./HotelsList";
import data from "../utils/__mocks__/hotels.json";

configure({ adapter: new Adapter() });

describe("hotel list component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<HotelList hotels={data} nights="2" />);
  });
  it("card render with data", () => {
    const HOTEl_LIST = wrapper.find(".card-title");
    expect(HOTEl_LIST).toHaveLength(6);
    HOTEl_LIST.forEach((card, i) => {
      expect(card.props().children[0]).toEqual(data.hotels[i].name);
    });
  });
});
