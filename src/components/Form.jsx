import { useState, useEffect } from "react";
import NumberInput from "./formComponents/NumberInput";
import GetComponent from "./Helpers/GetComponet";

const Form = ({ inputs }) => {
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let errors = {};
    inputs.forEach((input) => {
      if (input.validation) {
        if (input.validation.required && !formData[input.key]) {
          errors[input.key] = "This field is required";
        }
        if (
          input.validation.onlyAlpha &&
          formData[input.key] &&
          !/^[a-zA-Z]*$/.test(formData[input.key])
        ) {
          errors[input.key] = "This field should contain only alphabets";
        }
      }
    });
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h1>Form Information</h1>
      {inputs.map((input) =>
        GetComponent(input, formData, handleInputChange, formErrors)
      )}
     
      <button type="submit" className="mb-5 btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
