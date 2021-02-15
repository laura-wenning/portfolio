import React from "react"
import Hero from "../components/Hero";
import Page from "../components/Page";
import Wiggle from "../components/animations/Wiggle";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { StyledHero, SplashImageObj } from "gatsby-theme-scarlet/src/components/styles"

import { Section } from "gatsby-theme-scarlet/src/components"

import "../styles/home.scss";

function Index() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Page>
      <Hero imageAlt={"hero.imageAlt"} id="hero" />
      <Section>
        <h1># Under Construction</h1>
        <p>
          Hey there, and welcome to my <Wiggle text="portfolio site"/>! 
          Sorry, but there's not really a lot here at the
          moment. Our construction owls are hard at work building me
          an awesome homepage for posting about the cool stuff I do. 
          Check back later!
        </p>
      </Section>

      <Section>
        <h1># About Me</h1>
        <div className="row" style={{marginBottom: "3em"}}>
          <div className="col-12 col-md-8">
            <p>
              Hey there, I'm Laura! I'm a software developer who likes to make cool things in her free time. 
              I've got a dozen things I like to do. I code, I write, and occassionally I even go outside. 
            </p>

            <p>
              I'm an avid fan of D&amp;D and tabletop games in general and have been working with
              my partner <a href="https://lucyawrey.com">Lucy</a> to 
              make a virtual tabletop webapp to solve the various issues we've had playing 
              and running games over the Internet. You can read more about that over on 
              my <a href="/projects#reroll">Projects page</a>.
            </p>
          </div>

          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-left">
            <Img
              id="portfolio-image"
              fixed={data.file.childImageSharp.fixed}
              alt={"imageAlt"}
              style={{ margin: "0 auto", height: "100%", minHeight: "200px" }}
              imgStyle={SplashImageObj}
            />
          </div>
        </div>
        <h1># My Experience</h1>
        <p>
          I'm currently working at a cool company called Clinc. 
          We do cool stuff with artificial intelligence that lets people control their finances through
          voice command, similar to how Google Home or Siri work. 
          I work with the Engineering Operations team for all of the dev ops aspects of our platform, 
          working with Docker, Kubernetes, and AWS to get the job done. 
        </p>

        <p>
          You can check out my other experience <a href="/experience">here</a>!
        </p>
      </Section>
    </Page>
  );
}

export default Index;
