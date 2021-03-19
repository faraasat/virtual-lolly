import * as React from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./index.styles.css"
import Lolly from "../images/lolly"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Index Page" />
      <div className="lolly-page__index">
        <h1>virtual lollypop</h1>
        <p>because we all know someone who deserves some sugar.</p>
        <div className="lolly-page__index-lollies">
          <Lolly top="#e97393" mid="#d23a62" bottom="#bb1161" />
          <Lolly top="#ed265b" mid="#f77249" bottom="#deaa43" />
          <Lolly top="#97e665" mid="#8ccb4c" bottom="#a8d838" />
          <Lolly top="#feefd6" mid="#b65ae4" bottom="#c116c1" />
          <Lolly top="#cd2753" mid="#d5cfd1" bottom="#5ba3da" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
