import React from "react"
import "./lollies.css"
import { Redirect } from "@reach/router"
import SEO from "../../components/seo"
import Layout from "../../components/layout/layout.component"
import LollyTextComponent from "../../components/lolly-text/lolly-text.component"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import Lolly from "../../images/lolly"

const GET_LOLLY = gql`
  query GetLolly($id: String!) {
    getLolly(id: $id) {
      refId
      id
      top
      mid
      bottom
      recipient
      from
      msg
    }
  }
`

const LolliesPage = props => {
  if (props["*"] === "") {
    return <Redirect noThrow to="/404" />
  }

  const { loading, error, data } = useQuery(GET_LOLLY, {
    variables: {
      id: props["*"],
    },
  })

  if (error) console.log(error)

  return (
    <div>
      <SEO
        title={`Your Lolly Here! - ${
          loading
            ? "Loading..."
            : data.getLolly === null
            ? "Lolly Not Found"
            : data?.getLolly.recipient
        }`}
      />
      <Layout>
        {loading ? (
          <div className="lolly-page__loading">
            <div className="lolly-page__loading-upper">
              Loading Your Lolly...
            </div>
            <div className="lolly-page__loading-img">
              <Lolly top="#ed265b" mid="#f77249" bottom="#deaa43" />
            </div>
            <div className="lolly-page__loading-lower">
              It will be here Before it Melts!
            </div>
          </div>
        ) : (
          <LollyTextComponent
            defined={data?.getLolly === null ? false : true}
            recipient={data?.getLolly?.recipient}
            msg={data?.getLolly?.msg}
            from={data?.getLolly?.from}
            top={data?.getLolly?.top}
            mid={data?.getLolly?.mid}
            bottom={data?.getLolly?.bottom}
            {...props}
          />
        )}
      </Layout>
    </div>
  )
}

export default LolliesPage
