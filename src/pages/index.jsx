import React from "react"
import Hero from "../components/Hero";
import Page from "../components/Page";

import { Section } from "gatsby-theme-scarlet/src/components"

import "../styles/home.scss";

function Index() {
  return (
    <Page>
      <Hero imageAlt={"hero.imageAlt"} id="hero" />
      <Section>
        Hey there, and welcome to my portfolio site! 
        Sorry, but there's not really a lot here at the
        moment. Our construction owls are hard at work building me
        an awesome homepage for posting about the cool stuff I do. 
        Check back later!
      </Section>
    </Page>
  );
}

export default Index;
