import React from "react";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <>
      <h1 className="text-center">Work Experience</h1>

      <ExperienceCard institution="Clinc" title="Software Engineer" from="11/2020" to="Ongoing">
        <ul>
          <li>
            Worked with the Infrastructure team
          </li>
        </ul>
      </ExperienceCard>

      <ExperienceCard institution="Walmart" title="Contractor" from="04/2018" to="07/2018">
        <ul>
          <li>
            Learned Angular 4
          </li>

          <li>
            Developed the first stage for a kiosk project.
          </li>
        </ul>
      </ExperienceCard>

      <ExperienceCard institution="Saltech Systems" title="Full-Stack Developer" from="01/2017" to="08/2019">
        <ul>
          <li>
            Maintained and developed&nbsp;
            <a href="https://nationwidenotice.com">
              Nationwide Notice&nbsp;
            </a>
            with Coldfusion 8, MySQL, and Javascript.
          </li>

          <li>
            Rebuilt the entire backend and some frontend logic for&nbsp; 
            <a href="https://secondscount.com">
              Seconds Count&nbsp;
            </a>
            using Lucee, CFWheels, JQuery, and MySQL.
          </li>

          <li>
            Temporarily contracted out to Walmart through Saltech Systems from 
            April 2018 to June 2018. Developed the first stage for a kiosk project
            using Angular 4. 
          </li>

          <li>
            Designed and developed the first stage of the SaltechCMS 2.0, used by&nbsp;
            <a href="https://iapra.org">
              Iowa Park and Rec Assosication&nbsp;
            </a>
            and&nbsp;
            <a href="https://rolfesatboone.com">
              Rolfes @ Boone.
            </a>
          </li>

          <li>
            Assisted in developing the backend and frontend of 
            Ultimate Musicians League 
          </li>

          <li>
            Developed the backend and frontend of phase one and continually maintained&nbsp;
            <a href="https://primeseats.com">
              Prime Seats.
            </a>
          </li>

          <li>
            Developed and maintained SaltechCMS sites including&nbsp; 
            <a href="https://dmeyemd.com">
              DMEye,&nbsp;
            </a>
            <a href="https://thelumbershack.com">
              the Lumber Shack,&nbsp;
            </a>
            <a href="https://energyhealth.com">
              Energy Health,&nbsp;
            </a>
            <a href="https://herbalcom.com">
              HerbalCom,&nbsp;
            </a>
            and
            <a href="https://ameriherb.com">
              Ameriherb.
            </a>
          </li>

          <li>
            Performed code reviews for several developers
          </li>

          <li>
            Documented new processes and code, such as the method for setting up Minikube 
            on a Windows PC or an import package. 
          </li>
        </ul>
      </ExperienceCard>

      <h1 className="text-center">Education</h1>
      
      <ExperienceCard institution="Iowa State University" title="Bachelor's of Computer Science" from="08/2014" to="12/2016">

      </ExperienceCard>

      <ExperienceCard institution="South Dakota School of Science and Technology" title="Partial Bachelor's of Computer Science" from="08/2012" to="05/2014">
        
      </ExperienceCard>
    </>
  );
}