import React from "react"
import "./lollies.css"
import { Redirect } from "@reach/router"
import SEO from "../../components/seo"
import Layout from "../../components/layout/layout.component"
import Lolly from "../../images/lolly"

const LolliesPage = props => {
  if (props["*"] === "") {
    return <Redirect noThrow to="/404" />
  }

  return (
    <>
      <SEO title={`Your Lolly Here! - ${props["*"]}`} />
      <Layout>
        <div className="lolly-page__create">
          <div className="lolly-page__create-lolly">
            <Lolly top={"#ed265b"} mid={"#f77249"} bottom={"#bb1161"} />
          </div>
          <div className="lolly-page__create-form"></div>
        </div>
      </Layout>
    </>
  )
}

export default LolliesPage
