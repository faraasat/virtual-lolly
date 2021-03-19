import React from "react"
import "./lolly-btn.styles.css"

const LollyBtnComponent = ({ isSubmitting, text }) => {
  return (
    <button
      className="lolly-component__lolly-btn"
      type="submit"
      disabled={isSubmitting}
    >
      {text}
    </button>
  )
}

export default LollyBtnComponent
