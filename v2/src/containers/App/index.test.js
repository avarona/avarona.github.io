import React from "react";
import { shallow } from "enzyme";
import App from "./";

describe("App Container", () => {
  it("renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
