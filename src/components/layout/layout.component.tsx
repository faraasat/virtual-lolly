import * as React from "react"
import "./layout.styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="bookmark-component__layout-main">{children}</main>
    </>
  )
}

export default Layout
