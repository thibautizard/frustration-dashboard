import React from "react";
import Popup from "./Popup";

export default {
  title: "Popup",
  component: Popup,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Popup {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { title: "Titre", children: <p>Lorem ipsum</p> };
