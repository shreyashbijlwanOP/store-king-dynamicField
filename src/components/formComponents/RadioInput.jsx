import { useState } from "react";

const RadioInput = ({ input, value, onChange, formErrors }) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleChange = e => {
    onChange(input.key, Boolean(e.target.value));
  };

  return (
    <div>
      {input.validation && input.validation.required && <span className="mandatory-field">*</span>}
        <label className="m-3">{input.key} :</label>
      {input.options.map(option => (
        <label key={option.value}  className="m-3" >
          <input
            type="radio"
            name={input.key}
            className="m-3 mb-5"
            value={option.value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {option.lbl}
         
        </label>
      ))}
      {formErrors[input.key] && !isFocused && (
        <div className="error-message mb-5">{formErrors[input.key]}</div>
      )}
    
    </div>
  );
};

export default RadioInput