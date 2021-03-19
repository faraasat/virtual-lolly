import React, { useState } from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./create.styles.css"
import Lolly from "../images/lolly"

const CreatePage = () => {
  const [topColor, setTopColor] = useState<string>("#ed265b")
  const [midColor, setMidColor] = useState<string>("#f77249")
  const [bottomColor, setBottomColor] = useState<string>("#deaa43")

  return (
    <Layout>
      <SEO title="Virtual Lollipops for all!" />
      <div className="lolly-page__create">
        <div className="lolly-page__create-lolly">
          <Lolly top={topColor} mid={midColor} bottom={bottomColor} />
          <div className="lolly-page__create-lolly__color-input">
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
        </div>
        <div className="lolly-page__create-form">
          <form className="lolly-page__create-form__form">
            <div className="lolly-page__create-form__form-content">
              <div className="lolly-page__create-form__form-content__recipient">
                <label htmlFor="recipient">To</label>
                <br />
                <input
                  type="text"
                  id="recipient"
                  name="recipient"
                  placeholder="A lolly For..."
                />
              </div>
              <div className="lolly-page__create-form__form-content__msg">
                <label htmlFor="msg">Say Something Nice.</label>
                <br />
                <textarea id="msg" name="msg" cols={30} rows={10} />
              </div>
              <div className="lolly-page__create-form__form-content__from">
                <label htmlFor="from">From</label>
                <br />
                <input
                  type="text"
                  id="from"
                  name="from"
                  placeholder="from your friend..."
                />
              </div>
            </div>
            <button className="lolly-page__create-form__form-btn" type="submit">
              Freeze this lolly and get a link
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePage
