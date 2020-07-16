// Libs
import React from "react"

// Components
import { Link } from "gatsby"

const styles = {
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    width: 200,
    background: `#dfbdff`,
  } as React.CSSProperties,
}

const Sidebar = () => {
  return (
    <div style={styles.container}>
      <Link to="/">{"Cards"}</Link>
      <Link to="/editor">{"Editor"}</Link>
    </div>
  )
}

export default Sidebar
