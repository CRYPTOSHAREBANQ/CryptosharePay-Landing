import React from "react";
import { shallow } from "enzyme";
import SignUpForm from "./SignUpForm";

describe("SignUpForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SignUpForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
