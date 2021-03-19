import React from "react"
import "./text-input.styles.css"

const TextInputComponent = ({
  handleChange,
  values,
  touched,
  error,
  label,
  id,
  name,
  placeholder,
  htmlFor,
}) => {
  return (
    <div className="lolly-component__text-input">
      <label htmlFor={htmlFor}>{label}</label>
      <br />
      <input
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={values}
      />
      <p className="lolly-component__text-input__error">
        {error && touched ? error : ""}
      </p>
    </div>
  )
}

export default TextInputComponent
