import React from "react";
import { Section } from "gatsby-theme-scarlet/src/components"

import Page from "../components/Page";
import WorkExperiences from "../components/resume/WorkExperiences"
import Technologies from "../components/resume/Technologies"
import Education from "../components/resume/Education"


function Resume() {
  return (
    <Page>
      <Section id="experience">
        <h1># Work Experience</h1>
        <WorkExperiences/>
      </Section>

      <Section id="technologies">
        <h1># Technologies</h1>
        <Technologies/>
      </Section>

      <Section id="education">
        <h1># Education</h1>
        <Education/>
      </Section>
    </Page>
  )
}

export default Resume;