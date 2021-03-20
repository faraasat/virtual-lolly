import React from "react"
import "./lolly-text.styles.css"
import LollyTextDefinedComponent from "../lolly-text-defined/lolly-text-defined.component"
import LollyTextUndefinedComponent from "../lolly-text-undefined/lolly-text-undefined.component"
import Lolly from "../../images/lolly"

const LollyTextComponent = ({ defined, recipient, msg, from }) => {
  return (
    <>
      {defined ? (
        <div className="lolly-page__lolly-text">
          <div className="lolly-page__lolly-text__lolly">
            <Lolly top={"#ed265b"} mid={"#f77249"} bottom={"#bb1161"} />
          </div>
          <div className="lolly-page__lolly-text__form">
            <LollyTextDefinedComponent
              recipient={recipient}
              msg={msg}
              from={from}
            />
          </div>
        </div>
      ) : (
        <LollyTextUndefinedComponent />
      )}
    </>
  )
}

export default LollyTextComponent
