import React from "react"
import { Link } from "gatsby"
import "./lolly-text-defined.styles.css"

const LollyTextDefinedComponent = ({ recipient, msg, from }) => {
  return (
    <div className="lolly-component__lolly-text">
      <div className="lolly-component__lolly-text__content">
        <h1 className="lolly-component__lolly-text__content-recipient">
          {recipient}
        </h1>
        <p className="lolly-component__lolly-text__content-msg">{msg}</p>
        <h1 className="lolly-component__lolly-text__content-from">
          —&nbsp;{from}
        </h1>
      </div>
      <p className="lolly-component__lolly-text__para">
        {from} made this virtual lolly for you. You can{" "}
        <Link to="/create">make your own</Link> to send to a friend who deserve
        some sugary treat which won't rot their teeth
      </p>
    </div>
  )
}

export default LollyTextDefinedComponent
