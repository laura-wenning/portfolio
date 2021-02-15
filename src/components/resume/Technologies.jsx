import React from "react";

import data from "../../data/resume/technologies.json";
import "../../styles/components/technologies.scss";

/**
 * Renders out a single technology item
 * 
 * @param name The name of the technology, to be displayed prominently.
 * @param techKey The technology key, for looping purposes
 * @param parentKey The parent accordion key, for aria purposes
 * @param text Text rendered out inside the accordion for extra explanations of the technology
 */
function TechnologyItem({ name, techKey, parentKey, text }) {
  const headingID = `heading_${techKey}`;
  const collapseID = `collapse_${techKey}`;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={headingID}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${collapseID}`} aria-controls={collapseID}>
          { name }
        </button>
      </h2>
      <div id={collapseID} className="accordion-collapse collapse" aria-labelledby={headingID} data-bs-parent={`#${parentKey}`}>
        <div className="accordion-body">
          { text }
        </div>
      </div>
    </div>
  )
}

/**
 * Renders out an area and accordion of technology. 
 * @param name The name of the area of technology, such as 'Languages' or 'Frameworks'
 * @param techKey The key of this technology. Used for accessing the array of tech and for looping
 * @param data The technologies that belong under this area.
 */
function TechnologyArea({ name, techKey, data }) {
  const compiledTechnologyItems = [];
  data.forEach(technology => {
    compiledTechnologyItems.push(
      <TechnologyItem 
        key={technology.key}
        name={technology.name || "Unknown"}
        techKey={technology.key || "unknown"}
        parentKey={techKey}
        text={technology.text}
      />
    )
  });

  return (
    <>
      <h2>{name}</h2>
      <div className="accordion" id={techKey}>
        {compiledTechnologyItems}
      </div>
    </>
  )
}

/**
 * Renders all of the technology section with accordion technologies and skills
 */
function Technologies() {
  // TODO - frigging GQL query this dummy
  const compiledTechnologies = [];
  data.technologyAreas.forEach(techArea => {
    compiledTechnologies.push(
      <TechnologyArea 
        key={techArea.key}
        name={techArea.name} 
        data={data[techArea.key] || []} 
        techKey={techArea.key}/>);
  });

  return (
    <div className="technologies">
      {compiledTechnologies}
    </div>
  );
}

export default Technologies;