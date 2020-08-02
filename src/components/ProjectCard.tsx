import React, { ReactNode } from "react";
import { Card, Button } from "react-bootstrap";

interface ProjectCardProps {
  children: ReactNode;
  github?: string;
  title: string;
  url?: string;
}

interface CheckItOutProps {
  github?: string;
  url?: string;
}

interface CheckOutItemProps {
  link: string;
  text: string;
}

function CheckItOutItem(props: CheckOutItemProps) {
  return (
    <a href={props.link}>
      <Button size="sm">
        {props.text}
      </Button>
    </a>
  )
}

function CheckItOut(props: CheckItOutProps) {
  // Checks if all arguments are undefined. If true, return nothing
  let allUndefined = true;
  Object.keys(props).forEach(item => {
    allUndefined = allUndefined && props[item] === undefined;
  });

  if (allUndefined === true) {
    return null;
  }

  const checkItOutItems: ReactNode[] = []
  if (props.github !== undefined) {
    checkItOutItems.push(<CheckItOutItem link={props.github} text="Github"/>);
  }

  if (props.url !== undefined) {
    checkItOutItems.push(<CheckItOutItem link={props.url} text="Visit"/>);
  }

  return <>Check it out here: {checkItOutItems}</>;
}

export default function ProjectCard(props: ProjectCardProps) {


  return (
    <Card>
      <Card.Body>
        {props.children}

        <CheckItOut url={props.url} github={props.github}/>
      </Card.Body>
    </Card>
  )
}