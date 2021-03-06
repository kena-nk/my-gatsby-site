import * as React from "react"
import Layout from '../components/Leyout/layout'
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="わんこの写真"
        src="../images/cat_kotatsu_neko.png"
      />
    </Layout>
  )
}

export default IndexPage
