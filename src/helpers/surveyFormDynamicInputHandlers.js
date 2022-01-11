export const addNewOption = (fields, setFields) => {
  handleInputFields(fields, setFields);
};

export const removeAllOptions = (fields, setFields) => {
  if (fields.Type.toLowerCase() === "rating") {
    setFields({ ...fields, RadioButtonOptions: [] });
  } else if (fields.Type.toLowerCase() === "checkbox") {
    setFields({ ...fields, CheckBoxOptions: [] });
  }
};

export const handleInputFields = (fields, setFields) => {
  let newOptions = "";
  if (fields.Type.toLowerCase() === "rating") {
    newOptions = [...fields.RadioButtonOptions];
    for (
      let i = fields.RadioButtonOptions.length;
      i < fields.RadioButtonOptions.length + 1;
      i++
    ) {
      newOptions.push("");
    }
    setFields({ ...fields, RadioButtonOptions: newOptions });
  } else if (fields.Type.toLowerCase() === "checkbox") {
    newOptions = [...fields.CheckBoxOptions];
    for (
      let i = fields.CheckBoxOptions.length;
      i < fields.CheckBoxOptions.length + 1;
      i++
    ) {
      newOptions.push("");
    }
    setFields({ ...fields, CheckBoxOptions: newOptions });
  }
};

export const handleOptions = (value, index, fields, setFields) => {
  let newOptions = "";
  if (fields.Type.toLowerCase() === "rating") {
    newOptions = [...fields.RadioButtonOptions];
    newOptions[index] = value;
    setFields({ ...fields, RadioButtonOptions: newOptions });
  } else if (fields.Type.toLowerCase() === "checkbox") {
    newOptions = [...fields.CheckBoxOptions];
    newOptions[index] = value;
    setFields({ ...fields, CheckBoxOptions: newOptions });
  }
};

export const handleRemove = (index, fields, setFields) => {
  let newOptions = "";
  if (fields.Type.toLowerCase() === "rating") {
    newOptions = fields.RadioButtonOptions.filter(
      (option) => option !== fields.RadioButtonOptions[index]
    );
    setFields({ ...fields, RadioButtonOptions: newOptions });
  } else if (fields.Type.toLowerCase() === "checkbox") {
    newOptions = fields.CheckBoxOptions.filter(
      (option) => option !== fields.CheckBoxOptions[index]
    );
    setFields({ ...fields, CheckBoxOptions: newOptions });
  }
};
