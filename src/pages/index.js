import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider, Layout } from "theme-ui"
import theme from "gatsby-theme-scarlet/src/gatsby-plugin-theme-ui";
import { Global } from "@emotion/core"
import { globalStyles } from "gatsby-theme-scarlet/src/templates/styles"
import { Header } from "gatsby-theme-scarlet/src/components"
import Helmet from "react-helmet"


import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteTitleShort
          author
          siteLogoText
          siteUrl
          language
          description
          siteKeywords
        }
      }
    }
  `); 

  const {
    title,
    siteLogoText,
    description,
    language,
  } = data.site.siteMetadata
  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <html lang={language} />
          <title>{title}</title>
          <meta name="Description" content={description} />
        </Helmet>
        <Global styles={globalStyles} />
        <Header />
        Hi
      </Layout>
    </ThemeProvider>
  );
}

export default IndexPage;
