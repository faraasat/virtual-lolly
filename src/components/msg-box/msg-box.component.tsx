import React from "react"
import "./msg-box.styles.css"

const MsgBoxComponent = ({
  handleChange,
  values,
  touched,
  error,
  label,
  id,
  name,
  htmlFor,
  cols,
  rows,
}) => {
  return (
    <div className="lolly-component__msg-box">
      <label htmlFor={htmlFor}>{label}</label>
      <br />
      <textarea
        id={id}
        name={name}
        cols={cols}
        rows={rows}
        onChange={handleChange}
        value={values}
      />
      <p className="lolly-component__msg-box__error">
        {error && touched ? error : ""}
      </p>
    </div>
  )
}

export default MsgBoxComponent
