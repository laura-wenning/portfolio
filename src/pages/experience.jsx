import React from "react";
import { Section } from "gatsby-theme-scarlet/src/components"

import Page from "../components/Page";
import WorkExperiences from "../components/resume/WorkExperiences"
import Education from "../components/resume/Education"


function Resume() {
  return (
    <Page>
      <Section>
        <h1># Work Experience</h1>
        <WorkExperiences/>
      </Section>

      <Section>
        <h1># Education</h1>
        <Education/>
      </Section>
    </Page>
  )
}

export default Resume;