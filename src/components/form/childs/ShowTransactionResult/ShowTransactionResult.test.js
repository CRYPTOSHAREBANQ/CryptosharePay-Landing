import React from "react";
import { shallow } from "enzyme";
import ShowTransactionResult from "./ShowTransactionResult";

describe("ShowTransactionResult", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ShowTransactionResult />);
    expect(wrapper).toMatchSnapshot();
  });
});
