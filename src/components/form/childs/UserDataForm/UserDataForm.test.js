import React from "react";
import { shallow } from "enzyme";
import UserDataForm from "./UserDataForm";

describe("UserDataForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserDataForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
