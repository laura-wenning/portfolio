import React from "react";

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
          <title>{pageTitle}</title>
          <meta name="Description" content={description} />
          {/* Load Bootstrap via CDN, since this breaks with SSR */}
          {/* Replace with something else here: https://www.gatsbyjs.com/docs/using-client-side-only-packages/ */}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
        </Helmet>
        <Global styles={globalStyles} />
        <Header />
        <SectionWrap className="body">
          {children}
        </SectionWrap>
        <Footer/>
      </Layout>
    </ThemeProvider>
  )
}

export default Page;