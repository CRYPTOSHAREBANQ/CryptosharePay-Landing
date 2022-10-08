import React from "react";
import { shallow } from "enzyme";
import UserPaymentForm from "./UserPaymentForm";

describe("UserPaymentForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserPaymentForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
