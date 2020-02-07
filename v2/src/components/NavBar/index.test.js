import React from "react";
import { shallow } from "enzyme";
import NavBar from "./";

describe("NavBar Component", () => {
  it("renders", () => {
    const wrapper = shallow(<NavBar />);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
