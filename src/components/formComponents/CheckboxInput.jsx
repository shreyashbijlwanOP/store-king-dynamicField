function CheckboxInput({ input, value, onChange, formErrors }) {
  return (
    <div>
      <label>
        {input.placeholder}
        {input.validation.required && <span>*</span>}
      </label>
      <input
        type="checkbox"
        checked={value || false}
        onChange={(e) => onChange(input.key, e.target.checked)}
      />
      {formErrors[input.key] && <div className="error">{formErrors[input.key]}</div>}
    </div>
  );
}
export default CheckboxInput