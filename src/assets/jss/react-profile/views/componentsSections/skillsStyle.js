import { container, title } from "assets/jss/react-profile.js";
import customCheckboxRadioSwitch from "assets/jss/react-profile/customCheckboxRadioSwitch.js";

const basicsStyle = {
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  head: {
    padding: "5px 0px",
    margin: "10px 0px 5px"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
