import React from "react"
import Hero from "../components/Hero";
import Page from "../components/Page";
import Wiggle from "../components/animations/Wiggle";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SplashImageObj } from "gatsby-theme-scarlet/src/components/styles"

import { Section } from "gatsby-theme-scarlet/src/components"
import resume from "../data/laurawenning_resume_2021-02-15.pdf"

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
    <Page pageTitle="Laura Wenning">
      <Hero imageAlt={"hero.imageAlt"} id="hero" />

      <Section>
        <div className="row" style={{marginBottom: "3em"}}>
          <div className="col-12 col-md-8">
            <h1 id="about"># About Me</h1>
            <p>
              Hey there, I'm <Wiggle text="Laura!"/> I'm a software developer who likes to make cool things in her free time. 
              I've got a dozen things I like to do. I code, I write, and occassionally I even go outside. 
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
        <h1 id="projects"># My Projects</h1>
        <p>
          I love making things, be it writing fiction, creating spanning campaigns with friends in Dungeons &amp; Dragons, 
          or learning how to sew to create cosplays of my favorite characters for conventions. 
          My focus almost always comes back to coding projects, be it small scripts to solve a niche problem or sprawling webapps. 
          It's just an easy and accessible way to build fantastic creations. 
        </p>

        <p>
          My big project right now is Lantern Tabletop, a web app designed to function in a similar capacity
          to <a href="https://roll20.net">Roll20</a>. Together with <a href="https://lucyawrey.com">Lucy Awrey</a>,
          we've been building a virtual tabletop toolchain for handling all of the disjointed aspects of our D&amp;D games,
          from easily modifying character sheet structures to creating sprites or maps. It's a big project, but both
          of us would love to see a comprehensive tool like it exist out in the world, and so we've been working on it
          on and off for the past year. 
        </p>

        <p>That's just one of my projects, though. Check out the others on my <a href="/projects">Projects</a> page.</p>

        <h1 id="experience"># My Experience</h1>
        <p>
          I'm currently taking a break from a professional career to develop a personal project called Lantern Tabletop.
          Our goal is to create a service that is as light-weight on server usage as possible to create a user-friendly environment for playing Dungeons &amp; Dragons or other tabletop games without the need to heavily monetize or disrupt the experience with advertisements.
          You can read more about it on the <a href="/projects">Projects page</a>, check out our <a href="/lantern">character sheet demo</a>, or watch our progress on <a href="https://github.com/owl-factory/lantern">Github</a>.
        </p>

        <p>
          Prior to developing Lantern Tabletop, I worked at the Ford Motor Company. 
          I developed an application for streamlining the process of requesting data from vehicles, allowing orders to be quickly placed and approved.
          This involved the use of Java, Spring Boot, and Angular to create a frontend system for placing orders and various microservices to handle the
          large quantities of data retrieved before packaging them up for consumption. 
        </p>

        <p>
          You can check out my other experience <a href="/experience">here</a>!
        </p>

        <p>
          You can also check out my <a href={resume} download>resume!</a>
        </p>
      </Section>
    </Page>
  );
}

export default Index;
