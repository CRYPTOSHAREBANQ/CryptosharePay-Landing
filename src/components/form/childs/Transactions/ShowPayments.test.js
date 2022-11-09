import React from "react";
import { shallow } from "enzyme";
import ShowPayments from "./ShowPayments";

describe("ShowPayments", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ShowPayments />);
    expect(wrapper).toMatchSnapshot();
  });
});
