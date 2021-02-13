import React from "react"
import Helmet from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider, Layout } from "theme-ui"
import theme from "gatsby-theme-scarlet/src/gatsby-plugin-theme-ui";
import { Global } from "@emotion/core"
import { globalStyles } from "gatsby-theme-scarlet/src/templates/styles"
import Header from "./Header";
import { SectionWrap } from "gatsby-theme-scarlet/src/components/styles"
import Footer from "./Footer";

import "../styles/index.scss"

function Page({ children, pageTitle }) {
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
    description,
    language,
  } = data.site.siteMetadata

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Helmet>
          <html lang={language} />
          <title>{pageTitle | title}</title>
          <meta name="Description" content={description} />
        </Helmet>
        <Global styles={globalStyles} />
        <Header />
        <SectionWrap>
          {children}
        </SectionWrap>
        <Footer/>
      </Layout>
    </ThemeProvider>
  )
}

export default Page;