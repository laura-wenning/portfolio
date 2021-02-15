import React from "react";

import "../../styles/components/projects.scss";

function CodeProject({ data }) {
  const content = [];
  if (typeof data.text === "string") { content[0] = <p>{data.text}</p>; }
  else {
    data.text.forEach((text, i) => {
      content.push(<p key={i}>{text}</p>)
    });
  }

  return (
    <div className="code-project">
      <h2>{data.name}</h2>
      <hr/>
      {content}
      { data.href ? <a href={data.href}>{data.hrefText || "Check it out!"}</a> : null}
    </div>
  )
}

function CodeProjects({ data }) {
  const compiledProjects = [];
  data.forEach(project => {
    compiledProjects.push(
      <CodeProject key={project.name} data={project}/>
    );
  });

  return (
    <div className="code-projects">
      {compiledProjects}
    </div>
  );
}

export default CodeProjects;