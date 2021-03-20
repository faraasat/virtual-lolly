import React from "react"
import "./lolly-text-undefined.styles.css"
import MeltedLolly from "../../images/melted-lolly"
import LollyButtonComponent from "../lolly-btn/lolly-btn.component"
import { Link } from "gatsby"

const LollyTextUndefinedComponent = () => {
  return (
    <div className="lolly-component__lolly-text-undefined">
      <p className="lolly-component__lolly-text-undefined__para">
        Ummm. We don't know. Maybe it melted?
      </p>
      <div className="lolly-component__lolly-text-undefined__img">
        <MeltedLolly />
      </div>
      <Link to="/create" className="lolly-component__lolly-text-undefined__btn">
        <LollyButtonComponent
          text={"Make a new lollipop to send to a friend"}
          isSubmitting={false}
        />
      </Link>
    </div>
  )
}

export default LollyTextUndefinedComponent
