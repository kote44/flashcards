// Components
import { Link } from "gatsby"
import React from "react"

type Props = {
  siteTitle: string
}

const styles = {
  container: {
    background: `rebeccapurple`,
  },
  content: {
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  },
  title: {
    color: `white`,
    textDecoration: `none`,
  },
}

const Header = ({ siteTitle = "" }: Props) => (
  <header style={styles.container}>
    <div style={styles.content}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={styles.title}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
