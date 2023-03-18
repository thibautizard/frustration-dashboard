import React from "react";
import Sidebar from "./Sidebar";

export default {
  title: "Sidebar",
  component: Sidebar,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Sidebar {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { title: "Test" };
