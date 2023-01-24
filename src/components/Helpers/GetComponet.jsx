import RadioInput from "../formComponents/RadioInput";
import TextInput from "../formComponents/TextInput";
import SelectInput from "../formComponents/SelectInput";
import NumberInput from "../formComponents/NumberInput";
import TextAreaInput from "../formComponents/TextAreaInput";
import CheckboxInput from "../formComponents/CheckboxInput";

const GetComponent = (input, formData, handleInputChange, formErrors) => {
  switch (input.type) {
    case "text":
      return (
        <TextInput
          key={input.key}
          input={input}
          value={formData[input.key]}
          onChange={handleInputChange}
          formErrors={formErrors}
        />
      );
    case "radio":
      return (
        <RadioInput
          key={input.key}
          input={input}
          value={formData[input.key]}
          onChange={handleInputChange}
          formErrors={formErrors}
        />
      );

    case "select":
      return (
        <SelectInput
          key={input.key}
          input={input}
          value={formData[input.key]}
          onChange={handleInputChange}
          formErrors={formErrors}
        />
      );
    case "number":
      return (
        <NumberInput
          key={input.key}
          input={input}
          value={formData[input.key]}
          onChange={handleInputChange}
        />
      );
    case "textarea":
      return (
        <TextAreaInput
          key={input.key}
          input={input}
          value={formData[input.key]}
          formErrors={formErrors}
          onChange={handleInputChange}
        />
      );
    case "checkbox":
      return (
        <CheckboxInput
          key={input.key}
          input={input}
          value={formData[input.key]}
          formErrors={formErrors}
          onChange={handleInputChange}
        />
      );
    default:
      return null;
  }
};

export default GetComponent;
