import * as React from "react"
import "./layout.styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="lolly-component__layout-main">{children}</main>
    </>
  )
}

export default Layout
