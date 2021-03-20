import React from "react"
import "./lolly-text.styles.css"
import LollyTextDefinedComponent from "../lolly-text-defined/lolly-text-defined.component"
import LollyTextUndefinedComponent from "../lolly-text-undefined/lolly-text-undefined.component"

const LollyTextComponent = () => {
  return (
    <div>
      <LollyTextDefinedComponent />
      <LollyTextUndefinedComponent />
    </div>
  )
}

export default LollyTextComponent
