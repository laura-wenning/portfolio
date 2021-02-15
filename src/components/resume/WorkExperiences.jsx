import React from "react";

import "../../styles/components/workExperience.scss"

function WorkExperience({ companyName, title, time, details }) {
  const compiledDetails = [];
  (details || []).forEach(detail => {
    compiledDetails.push(<li>{detail}</li>)
  });
  return (
    <>
      <p className="work-experience">
        <div className="work-title">
          <h2>{companyName}</h2>
          <span className="d-inline d-md-none"><br/></span>
          <h4 className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</h4>
          <h4>{title}</h4>
        </div>
        <hr/>
        <div className="work-time">{time}</div>
        <ul>
          {compiledDetails}
        </ul>
      </p>
    </>
  );
}

function WorkExperiences() {
  const workText = [
    { 
      name: "Clinc, Inc", title: "Software Engineer II", time: "November 2019 - present", 
      details: [
        "Maintained and improved Kubernetes clusters for development, staging, and production deployments.",
        "Maintained Gitlab Runners using AWS EC2 containers to allow for continuous testing and deployment.",
        "Set up a secondary Gitlab Runner system using Docker Machine for auto-scaling runners.",
        "Built a report generator to determine individual costs for AWS that preserved historical data."

      ]
    },
    { 
      name: "Saltech Systems", title: "Web Developer", time: "January 2017 - September 2019", 
      details: [
        "Designed and developed from scratch the first stage of the SaltechCMS 2.0 using Lucee 5.2, JQuery, MySQL, and Docker, used by iapra.org and rolfesatboone.com.",
        "Worked to maintain and develop new modules in Coldfusion 8/9 for nationwidenotice.com and SaltechCMS 1 sites, including dmeyemd.com, lumbershack.com, energyhealth.com, herbalcom.com, and ameriherb.com",
        "Rebuilt the backend logic for secondscount.com in Lucee 5.2 to remove structural issues and improve future maintainability.",
        "Developed the web app portion of app.werksheets.com using Lucee 5.2 and Couchbase.",
        "Assisted in developing the backend and frontend of Ultimate Musician’s League in Lucee 5.2, JQuery, Bootstrap, MySQL, and Docker.",
        "Developed both the backend and frontend of primeseats.com in Lucee 5.2, MySQL, Bootstrap, Sass, and Docker and continued maintaining it.",
      ]
    },
    { 
      name: "Walmart", title: "Contractor", time: "April 2018 - July 2018 via Saltech Systems", 
      details: ["Developed and styled the first stage of a kiosk system using Angular 4.",]
    }
  ];
  
  const workExperiences = [];
  workText.forEach(work => {
    workExperiences.push(
      <WorkExperience companyName={work.name} title={work.title} time={work.time} details={work.details}/>
    );
  });

  // TODO - GQL fetch data
  return (
    <>
      {workExperiences}
    </>
  )
}

export default WorkExperiences;