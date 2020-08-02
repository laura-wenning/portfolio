import React from "react";
import { Card } from "react-bootstrap";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <>
      <h1 className="text-center">Personal Projects</h1>

      <ProjectCard 
        title="Reroll" 
        github="https://github.com/lucyawrey/reroll"
        align="left"
      >
        <p>
          Reroll a webapp for playing tabletop roleplaying games. Not just as a virtual tabletop service,
          as many other sites are, but as a collection of intertwined tools that will give GMs and players 
          the ability to use it as they see fit, be it for character sheets, maps, or as a full-on virtual tabletop. 
        </p>

        <p>
          Reroll is my baby. I put more time and effort in to her than just about any other project on my plate. 
          Concieved by <a href="https://lucyawrey.com/">Lucy Awrey</a> after running into issues with Roll20.net, it has been a joint effort between
          the two of us for over a year now. It utilizes Typescript, React, GraphQL, 
          and Stitch to bring to life a service both of us would love to see. 
        </p>
      </ProjectCard>

      <ProjectCard 
        title="Sprite Exporter" 
        github="https://github.com/hey-waffles/sprite-extractor"
        align="right"

      >
        <p>
          The Sprite Exporter is a Python script for use in tandem with the RPG Maker Character Generator. 
          The script extracts images created by the generator, leaving sprites and profile images easily 
          usable in Roll20. Newer additions add transparent padding to the top and sides of sprites, manipulating
          Roll20 into rendering them as smaller. 
        </p>

        <p>
          The Sprite Extractor is one of the first important scripts I wrote in Python, and has since become 
          an indispensible tool for playing Dungeons &amp; Dragons on Roll20. 
          It sees use every time someone makes or modifies a character. It's built using PyGame as an image 
          manipulator, inspired by a brief foray into creating a Python-based game. While the game didn't go anywhere,
          this script is easily one of my favorite bits of software. 
        </p>
      </ProjectCard>

      <ProjectCard 
        title="My Portfolio" 
        github="https://github.com/hey-waffles/hey-waffles.github.io"
        url="https://laurawenning.com"
      >
        <p>
          My portfolio website is just that: a website showing off all of the cool things I do. 
          Originally built with simple HTML and Bootstrap, it has been rewritten using Typescript, 
          React, and NextJS to create a professional website that's easy to update and maintain.
        </p>

        <p>
          The original portfolio wasn't anything to write home about (you can see it here!). It was effectively 
          my resume put in website form. I wanted bigger. I wanted better. And experience with Reroll gave
          me the expertise and skill to refactor it into what I wanted. I've got a full write-up of what I did to 
          make this portfolio. 
        </p>
      </ProjectCard>

      <ProjectCard 
        title="Ozone" 
        github="https://github.com/hey-waffles/ozone"
        align="right"
      >
        <p>
          Ozone is a lower-priority project with the intention of serving as a catch-all for webapp projects that
          are too small to merit their own project. 
        </p>

        <p>
          Ozone is named after a character from a Dungeons &amp; Dragons.
        </p>
      </ProjectCard>

      <ProjectCard 
        title="Home Lab"
        align="left" 
      >
        <p>
          My home lab is an on-going project to provide myself and my friends with the platform and tools to 
          make cool things. The bulk of the lab is made up by Sheila, my first gaming PC (yes, I name my computers. Don't you?).
          Also in my network are a couple Raspberry Pis, one of which runs OctoPrint and the other serves as an auxillary Docker
          server. 
        </p>

        <p>
          My homelab began with a desire to have a small home network that I could store files on for common access.
          Since then, it's grown into a Docker server running Nginx Reverse Proxy, a Minecraft server for friends, 
          WikiJS, MariaDB, and Node servers for running development versions of websites like Reroll and my Portfolio. 
        </p>
      </ProjectCard>

      <h1 className="text-center">Hobbies &amp; Art</h1>

      

      <ProjectCard 
        title="Dungeons &amp; Dragons" 
      >
        
      </ProjectCard>

      <ProjectCard 
        title="Fiction Writing" 
      >
        <p>
          Writing fiction is one of my favorite little pastimes. Most of my stories take place in fantasty worlds
        </p>
      </ProjectCard>

      <ProjectCard 
        title="Digital Art" 
      >
        
      </ProjectCard>

      <ProjectCard 
        title="Cosplay" 
      >
        
      </ProjectCard>
    </>
  );
}