import { useEffect, useRef, useState } from "react";

const TextInput = ({ input, value, onChange, formErrors }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  let [name,setName] = useState( value ?? "")

  const handleChange = e => {
    setName(e.target.value)
  };

  useEffect(() => {
    if (formErrors[input.key]) {
      inputRef.current.classList.add("input-error");
    } else {
      inputRef.current.classList.remove("input-error");
    }
  }, [formErrors, input.key]);

  useEffect(()=>{
    onChange(input.key, name);
  },[name])

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        className=" mb-5"
        placeholder={input.placeholder}
        value={name}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
         {input.validation && input.validation.required && <span className="mandatory-field">*</span>}
      {formErrors[input.key] && !isFocused && (
        <div className="error-message">{formErrors[input.key]}</div>
      )}
   
    </div>
  );
};
export default TextInput