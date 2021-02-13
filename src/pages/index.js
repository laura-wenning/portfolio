import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ThemeProvider, Layout } from "theme-ui"
import theme from "gatsby-theme-scarlet/src/gatsby-plugin-theme-ui";
import { Global } from "@emotion/core"
import { globalStyles } from "gatsby-theme-scarlet/src/templates/styles"
import Header from "../components/header";
import Hero from "../components/hero";
import Helmet from "react-helmet"
import { SectionWrap } from "gatsby-theme-scarlet/src/components/styles"
import { Section } from "gatsby-theme-scarlet/src/components"

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
  // console.log(theme)

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
        <SectionWrap>
          <Hero imageAlt={"hero.imageAlt"} id="hero" />
          <Section>
            Hi!
          </Section>
        </SectionWrap>
      </Layout>
    </ThemeProvider>
  );
}

export default IndexPage;
