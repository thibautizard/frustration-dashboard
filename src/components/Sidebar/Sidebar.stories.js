import React from "react";
import Sidebar2 from "./Sidebar";

export default {
  title: "Sidebar2",
  component: Sidebar2,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Sidebar2 {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {};
