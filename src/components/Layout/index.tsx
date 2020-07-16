// Libs
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// Components
import Header from "../Header"
import Sidebar from "../Sidebar"

// Styles
import "./styles.css"

type Props = {
  children: React.ReactNode
}

const styles = {
  container: {
    margin: `0 auto`,
    maxHeight: 825,
    display: `flex`,
    flexDirection: `row`,
  } as React.CSSProperties,
}

const Layout = ({ children }: Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={styles.container}>
        <Sidebar />
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built by <b>@kote44</b>
      </footer>
    </>
  )
}

export default Layout
