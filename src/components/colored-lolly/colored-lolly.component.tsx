import React from "react"
import Lolly from "../../images/lolly"
import "./colored-lolly.styles.css"

const ColoredLollyComponent = ({
  topColor,
  midColor,
  bottomColor,
  setTopColor,
  setMidColor,
  setBottomColor,
}) => {
  return (
    <>
      <Lolly top={topColor} mid={midColor} bottom={bottomColor} />
      <div className="lolly-component__colored-lolly">
        <span>
          <input
            type="color"
            onChange={e => setTopColor(e.target.value)}
            value={topColor}
          />
        </span>
        <span>
          <input
            type="color"
            onChange={e => setMidColor(e.target.value)}
            value={midColor}
          />
        </span>
        <span>
          <input
            type="color"
            onChange={e => setBottomColor(e.target.value)}
            value={bottomColor}
          />
        </span>
      </div>
    </>
  )
}

export default ColoredLollyComponent
