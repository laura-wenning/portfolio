import React from "react";
import Page from "../components/Page";
import { Section } from "gatsby-theme-scarlet/src/components"

function LanternDemo() {
  return (
    <Page>
      <Section>
        <p>
          Lantern Tabletop is a shared passion project of myself and Lucy Awrey. 
          It's an in-development web application with the goal of being a platform for
          playing tabletop roleplaying games with their friends in a way that is simple
          and user-friendly. I've been working on it for the past couple years off and on,
          but only in since May 2022 have I been able to put in the time to really start
          putting the pieces together. It's still a long ways off--we are a team of two, after
          all, and Lucy is working full time--but I'm excited with the progress we've made, and
          if nothing else it's been a fantastic learning experience. 
        </p>

        <p>
          The embed below is a work-in-progress version of our characters and character sheets.
          None of the layout is hard-coded; all of it is generated dynamically from a little
          under six hundred lines of XML supplied by the user with default styling to give it a
          base coherent appearance. The goal of this is to create tools for both us the developers
          and users of our app to quickly create the character sheets that they need. The character
          sheets additionally support both custom CSS and Javascript, the latter of which is run
          safely within a web worker. 
        </p>

        <p>
          Feel free to play around!
        </p>

        <div style={{ display: "flex", height: "85vh" }}>
          <iframe src="https://deploy-preview-309--lanterntt.netlify.app/embed/character-sheet" style={{width: "786px"}}/>
        </div>

        <p>
          Lantern Tabletop is developed in tandem with <a href="https://lucyawrey.com">Lucy Awrey</a>.
          You can check out the source code and watch for any developments on <a href="https://github.com/owl-factory/lantern">Github</a>.
        </p>

      </Section>
    </Page>
  )
}

export default LanternDemo;
