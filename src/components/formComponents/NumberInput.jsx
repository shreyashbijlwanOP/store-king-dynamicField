import { useEffect, useRef, useState } from "react";

const NumberInput = ({ input, value, onChange, formErrors }) => {
  const inputRef = useRef(null);
  let [state,setState] = useState(value ?? "")
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = e => {
    setState(e.target.value)
  };

  useEffect(() => {
    if (formErrors[input.key]) {
      inputRef.current.classList.add("input-error");
    } else {
      inputRef.current.classList.remove("input-error");
    }
  }, [formErrors, input.key]);
  
  useEffect(()=>{
    onChange(input.key, state);
  },[state])

  return (
    <div>
     {input.validation && input.validation.required && <span className="mandatory-field">*</span>}
      <input
        ref={inputRef}
        type="number"
        placeholder={input.placeholder}
        value={state}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {formErrors[input.key] && !isFocused && (
        <div className="error-message">{formErrors[input.key]}</div>
      )}
     
    </div>
  )};
  export default NumberInput