import React from "react";

import "../../styles/components/education.scss";

function EducationItem({ name, time, text }) {
  return (
    <div className="education-item">
      <h2>{name}</h2>
      <hr/>
      <div className="school-time">{time}</div>
      <div>{text}</div>
    </div>
  )
}

function Education() {
  // TODO - make a GQL query
  const educations = [
    {
      name: "Iowa State University", time: "August 2014 - December 2016", 
      text: "Graduated in December 2016 with a Bachelor's Degree of Computer Science and a GPA of 3.3."
    },
    {
      name: "South Dakota School of Mines and Technology", time: "August 2012 - May 2014", 
      text: "Attended for freshman and sophomore years. Transfered to Iowa State University in 2014."
    },
  ];

  const educationItems = []
  educations.forEach(education => {
    educationItems.push(
      <EducationItem name={education.name} time={education.time} text={education.text}/>
    );
  })
  return (
    <div className="education">
      {educationItems}
    </div>
  );
}

export default Education;