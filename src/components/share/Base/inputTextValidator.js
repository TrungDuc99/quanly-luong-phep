/**
 * /* eslint-disable
 *
 * @format
 */

import React from "react";
import TextField from "@material-ui/core/TextField";
/* eslint-enable */
import {ValidatorComponent} from "react-form-validator-core";
import {withStyles} from "@material-ui/styles";

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
export default class TextValidator extends ValidatorComponent {
  renderValidatorComponent() {
    /* eslint-disable no-unused-vars */
    const {
      error,
      errorMessages,
      validators,
      requiredError,
      helperText,
      validatorListener,
      withRequiredValidator,
      containerProps,
      ...rest
    } = this.props;
    const {isValid} = this.state;
    return (
      <BaseTextField
        {...rest}
        error={!isValid || error}
        helperText={(!isValid && this.getErrorMessage()) || helperText}
      />
    );
  }
}
