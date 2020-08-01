import React from "react";
import styles from "../scss/old-version.module.scss"
import { Col, Row, Card } from "react-bootstrap";

export default function OldVersion() {
  return (
    <div className={styles.body}>
      <div className={styles["header-bar"]}>
			<div className={styles["header-top"]}></div>
			<div className={styles["header-bottom"]}>
				<div className={styles["nav-spacer"]}></div>

				<div className="nav"></div>
			</div>

			<div className={`d-flex justify-content-center ${styles["header-photo"]}`}>
				<Card className="rounded-circle"></Card>
			</div>
		</div> 

		<div className={`container ${styles["resume-body"]}`}>
			<h1 className="text-center">
				Laura Robin Wenning
			</h1>

			<p className="text-center">
				<a href="mailto:laura.r.wenning@gmail.com">
					laura.r.wenning@gmail.com&nbsp;
				</a>

				|&nbsp;

				<a href="https://github.com/hey-waffles/">
					github.com/hey-waffles
				</a>
			</p>

			<h2>
				About Me
			</h2>

			<p>
				Hey! I'm a 25 year old web developer and computer science graduate with experience 
        in Coldfusion and Lucee, the MVC framework CFWheels, MySQL and SQL, Javascript, 
        JQuery, and Angular (JS and 2+). I also have some minor experience with Minikube 
        and Docker, mainly in setting up development environments. I've also had experience 
        with nginx, primarily for use with Docker but also to set up multiple projects on my home server. 
			</p>

			<p>
				Outside of work, I have a love for 3D printing and modeling, tabletop games 
        (Dungeons and Dragons 5e in particular), writing and drawing, and generally 
        making super cool stuff. Lately, I've been teaching myself some Python
        and how to draw semi-realistic characters.
			</p>

			<hr/>

			<h2>
				Work Experience
			</h2>

			<h4>
				Saltech Systems
			</h4>

			<p>
				January 2017 to present
			</p>

			<p>
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
			</p>


			<hr/>

			<h2>
				Education
			</h2>
			<Row>
				<Col md={6}>
					<h4>
						Iowa State University
					</h4>

					<p>
						Fall 2014 to Fall 2016
					</p>

					<p>
						Bachelor's of Computer Science
					</p>

					<p>
						GPA: 3.3
					</p>                    
				</Col>

				<Col md={6}>
					<h4>
						South Dakota School of Mines and Technology
					</h4>

					<p>
						Fall 2012 to Spring 2014
					</p>

					<p>
						Some Bachelor's of Computer Science, transferred to Iowa State
					</p>
				</Col>
			</Row>

			<hr/>

			<h2>
				Technologies and Skills
			</h2>

			<Row>
				<Col md={6}>
					<h5>
						Languages
					</h5>

					<ul>
						<li>CFML (Coldfusion and Lucee)</li>
						<li>Javascript</li>
						<li>MySQL</li>
						<li>HTML</li>
						<li>Java (Familiar)</li>
						<li>C/C++ (Familiar)</li>

						<li>Python (Learning)</li>
					</ul>
				</Col>

				<Col md={6}>
					<h5>Software and Tools</h5>
					<ul>
						<li>Coldfusion 8, 9, 2016</li>
						<li>Lucee 5.2</li>
						<li>Docker</li>
						<li>Kubernetes/Minikube</li>
						<li>nginx</li>
						<li>Git</li>
					</ul>
				</Col>

				<Col md={6}>
					<h5>Frameworks</h5>
					<ul>
						<li>CFWheels (Lucee/Coldfusion)</li>
						<li>Fusebox (Coldfusion 8/9)</li>
						<li>Bootstrap</li>
						<li>JQuery</li>
						<li>AngularJS</li>
						<li>Angular 2+</li>
						<li>React (Learning)</li>

					</ul>
				</Col>

				<Col md={6}>
					<h5>Miscellaneous Skills</h5>
					<ul>
						<li>Project Planning</li>
						<li>Project and Code Documentation</li>
						<li>Interest in learning new technologies/languages</li>
						<li>Self-reliant</li>
					</ul>
				</Col>
			</Row>

			<hr/>

			<h2>
				Personal Projects
			</h2>

			<Row>
				<Col md={4}>
					<Card>
						<Card.Header>
							Raspberry Pi Webserver
						</Card.Header>

						<Card.Body>
							A Raspberry Pi webserver for developing personal projects and for practicing with Linux. The server runs Rasbian as an operating system is implemented using nginx and NodeJS. 
						</Card.Body>
					</Card>
				</Col>

				<Col md={4}>
					<Card>
						<Card.Header>
							OctoPrint
						</Card.Header>

						<Card.Body>
							A Raspberry Pi webserver running OctoPi for utilizing my 3D Printer. I've added additional security to prevent unauthorized usage. Currently, I'm working on adding a camera mount for tracking printer progress remotely. 
						</Card.Body>
					</Card>
				</Col>

				<Col md={4}>
					<Card>
						<Card.Header>
							<a title="Dungeon Crawler on Github" href="https://github.com/hey-waffles/dungeon-crawler">
								Dungeon Crawler
							</a>
						</Card.Header>

						<Card.Body>
							A simple RPG game built using Python as a means to learn the language. It's inspired by a course-long programming project I had in college, where we created a rogue-like dungeon crawler game in the terminal using C and C++. <br/><br/>
							This game is built to be slightly more ambitious, with actual sprites and animations instead of plain text. It implements the PyGame library for use as an engine.  
						</Card.Body>
					</Card>
				</Col>

				<Col md={4}>
					<Card>
						<Card.Header>
							<a title="Sprite Extractor on Github" href="https://github.com/hey-waffles/sprite-extractor">
								Sprite Extractor
							</a>
						</Card.Header>

						<Card.Body>
							A small Python program designed to make the process of extracting a single sprite from a generated sprite sheet much easier. It's primary use is to make sprites easily usable for Roll20 and to remove the hassle of trying to get everything set correctly by hand.
						</Card.Body>
					</Card>
				</Col>
			</Row>

			<hr/>

			<h2>
				Contact Me
			</h2>		

			<p>
				By Email:&nbsp;
				<a href="mailto:laura.r.wenning@gmail.com">
					laura.r.wenning@gmail.com
				</a>
			</p>

			<hr/>
		</div>
  </div>
  )
}