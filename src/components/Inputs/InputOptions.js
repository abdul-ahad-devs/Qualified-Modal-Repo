import React from "react";
import Button from "components/CustomButtons/Button";
import PropTypes from "prop-types";
import styles from "assets/jss/material-dashboard-pro-react/components/formStyle (temp)";
import { makeStyles } from "@material-ui/core";
import CustomInput from "components/Inputs/CustomInput";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";
import { isEmpty } from "helpers/validations";
import CustomInputLabel from "./CustomInputLabel";
import {
  handleOptions,
  addNewOption,
  removeAllOptions,
  handleRemove,
} from "helpers/surveyFormDynamicInputHandlers";

const useStyles = makeStyles(styles);

const renderOptions = (
  options,
  classes,
  shouldValidateFields,
  disabled,
  fields,
  setFields
) =>
  options &&
  options.map((option, index) => (
    <GridItem
      xs={3}
      md={3}
      sm={3}
      noDefaultPadding
      key={index}
      className={classes.optionsField}
    >
      <CustomInput
        size="small"
        inputType="text"
        required
        disabled={disabled}
        errorText={shouldValidateFields && isEmpty(option[index])}
        label={`Option ${index + 1}`}
        value={option}
        rightIcon={
          !disabled ? (
            <i
              onClick={() => handleRemove(index, fields, setFields)}
              className="fa fa-times fa-sm"
              style={{ color: "#D65746", cursor: "pointer" }}
            />
          ) : null
        }
        onChange={(event) =>
          handleOptions(event.target.value, index, fields, setFields)
        }
      />
    </GridItem>
  ));

const InputOptions = ({
  options,
  errorText,
  shouldValidateFields,
  disabled,
  fields,
  setFields,
}) => {
  const classes = useStyles();
  let OptionsLabel =
    fields.Type.toLowerCase() === "rating"
      ? "Rating Options:"
      : fields.Type.toLowerCase() === "checkbox"
      ? "Checkbox Options:"
      : null;

  return (
    <div>
      {errorText && <div className="invalid-feedback">{errorText}</div>}
      {!disabled ? (
        <div className={classes.optionsButtons}>
          <Button
            color="primary"
            size="sm"
            disabled={
              (options !== null &&
                options &&
                options.length > 0 &&
                options[options.length - 1] === "") ||
              options.length === 6
            }
            round
            className={classes.addOptions}
            onClick={() => addNewOption(fields, setFields)}
          >
            <i className={"fa fa-plus fa-sm " + classes.btnIcon} />
            Add Options
          </Button>
          <Button
            variant="outlined"
            size="sm"
            round
            disabled={options && options.length === 0}
            className={classes.addOptions}
            onClick={() => removeAllOptions(fields, setFields)}
          >
            <i className={"fa fa-times fa-sm " + classes.btnIcon} />
            Remove All
          </Button>
          {/* showing max no of options validation to the user */}
          {options.length === 6 && (
            <CustomInputLabel
              label="You cannot add more than 6 options."
              customClassName={classes.validateOptionsText}
            />
          )}
        </div>
      ) : (
        <CustomInputLabel
          label={OptionsLabel}
          bold
          customClassName={classes.optionsLabel}
        />
      )}
      <GridContainer className={classes.optionsContainer}>
        {options &&
          renderOptions(
            options,
            classes,
            shouldValidateFields,
            disabled,
            fields,
            setFields
          )}
      </GridContainer>
    </div>
  );
};

export default InputOptions;

InputOptions.propTypes = {
  options: PropTypes.array,
  fields: PropTypes.object,
  setFields: PropTypes.func,
  errorText: PropTypes.string,
  shouldValidateFields: PropTypes.bool,
  disabled: PropTypes.bool,
};
