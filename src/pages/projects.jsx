import React from "react";
import { Section } from "gatsby-theme-scarlet/src/components"

import Page from "../components/Page";
import CodeProjects from "../components/projects/CodeProjects";

import projects from "../data/projects.json";

function Projects() {
  return (
    <Page>
      <Section>
        <h1># Coding Projects</h1>
        <CodeProjects data={projects.coding}/>
      </Section>
    </Page>
  );
}

export default Projects;