import { useEffect, useRef, useState } from "react";

const SelectInput = ({ input, value, onChange, formErrors }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = e => {
    onChange(input.key, e.target.value);
  };

  useEffect(() => {
    if (formErrors[input.key]) {
      inputRef.current.classList.add("input-error");
    } else {
      inputRef.current.classList.remove("input-error");
    }
  }, [formErrors, input.key]);

  return (
    <div>
      <select
        ref={inputRef}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {input.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.lbl}
          </option>
        ))}
      </select>
      {formErrors[input.key] && !isFocused && (
        <div className="error-message">{formErrors[input.key]}</div>
      )}
      {input.validation && input.validation.required && <span className="mandatory-field">*</span>}
    </div>
  );
};
export default SelectInput;