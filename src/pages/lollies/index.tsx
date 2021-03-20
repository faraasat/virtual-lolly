import React from "react"
import "./lollies.css"
import { navigate, redirectTo, Redirect } from "@reach/router"
import SEO from "../../components/seo"
import Layout from "../../components/layout/layout.component"

const LolliesPage = props => {
  if (props["*"] === "") {
    return <Redirect noThrow to="/404" />
  }

  return (
    <>
      <SEO title={`Your Lolly Here! - ${props["*"]}`} />
      <Layout>
        <h1>{props["*"]}</h1>
        <h1>Lollies</h1>
      </Layout>
    </>
  )
}

export default LolliesPage
