import React from "react";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <div className="h1 text-center">
        Hello There!
      </div>

      <div className="h4 text-center">
        I'm Laura. I'm a software engineer working at&nbsp;
        <a href="https://clinc.com">Clinc</a>
        &nbsp; working with cutting edge 

        I specialize in webapp development. I build cool things with Typescript, Python, and React. 
      </div>

      <div>
        I've worked as a software developer for Clinc, Saltech Systems, and Walmart. 

        Read more!
      </div>
      <p>
        <h1 className="text-center">Woah, hey!</h1>
        <h2 className="text-center">
          It looks like a new portfolio is under construction!
          Our construction owls are hard at work, but we're not quite done yet. 
          We apologize for the inconvinence. 
          If you would like to see Laura's old portfolio site,&nbsp;
          <Link href="/old-version" passHref><a>you can check it out here!</a></Link>
        </h2>
      </p>
    </>
  );
}