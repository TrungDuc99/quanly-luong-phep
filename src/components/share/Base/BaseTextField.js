/** @format */

import {withStyles} from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";

const BaseTextField = withStyles({
  root: {
    "& .MuiInputLabel-root": {
      fontSize: "14px"
    },
    "& label.Mui-focused": {
      color: "#1854a5"
    },
    "& .MuiInputBase-input": {
      fontSize: "14px",
      height: "20px"
    },
    "& .Mui-disabled": {
      color: "#000"
    }
  }
})(TextField);
export default BaseTextField;
