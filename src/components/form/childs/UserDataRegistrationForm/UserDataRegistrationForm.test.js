import React from "react";
import { shallow } from "enzyme";
import UserDataRegistrationForm from "./UserDataRegistrationForm";

describe("UserDataRegistrationForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserDataRegistrationForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
