import * as React from "react"
import "./layout.styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="lolly-component__layout-main">
        <h1 className="lolly-page__index-heading">virtual lollypop</h1>
        <p className="lolly-page__index-subheading">
          because we all know someone who deserves some sugar.
        </p>
        {children}
      </main>
    </>
  )
}

export default Layout
