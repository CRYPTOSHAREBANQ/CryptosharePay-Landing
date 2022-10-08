import React from "react";
import { shallow } from "enzyme";
import FormContainer from "./FormContainer";

describe("FormContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
