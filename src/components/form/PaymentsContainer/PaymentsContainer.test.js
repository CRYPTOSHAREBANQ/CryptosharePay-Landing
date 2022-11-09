import React from "react";
import { shallow } from "enzyme";
import PaymentsContainer from "./PaymentsContainer";

describe("PaymentsContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PaymentsContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
