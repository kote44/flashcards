// Libs
import React from "react"

// Components
import EditorComponent from "../components/Editor"
import Layout from "../components/Layout"

type DataProps = {
  site: {
    buildTime: string
  }
}

const Editor: React.FC = () => (
  <Layout>
    <EditorComponent />
  </Layout>
)

export default Editor
