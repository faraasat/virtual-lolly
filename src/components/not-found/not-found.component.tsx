import { Link } from "gatsby"
import React from "react"
import "./not-found.styles.css"

const NotFoundComponent = () => {
  return (
    <section className="bookmark-component__not-found">
      <div className="bookmark-component__not-found__container">
        <div className="bookmark-component__not-found__bg">
          <h1>404</h1>
        </div>

        <div className="bookmark-component__not-found__instructions">
          <h3>Look like you're lost 🤔</h3>
          <p>The page you are looking for not available!</p>
          <Link to="/" className="bookmark-component__not-found__404">
            Go To Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundComponent
