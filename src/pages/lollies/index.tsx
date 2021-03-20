import React from "react"
import "./lollies.css"
import { Redirect } from "@reach/router"
import SEO from "../../components/seo"
import Layout from "../../components/layout/layout.component"
import LollyTextComponent from "../../components/lolly-text/lolly-text.component"

const LolliesPage = props => {
  if (props["*"] === "") {
    return <Redirect noThrow to="/404" />
  }

  return (
    <>
      <SEO title={`Your Lolly Here! - ${props["*"]}`} />
      <Layout>
        <LollyTextComponent
          defined={false}
          recipient={"Ali"}
          msg={"Hi There"}
          from={"Farasat"}
        />
      </Layout>
    </>
  )
}

export default LolliesPage
