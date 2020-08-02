import React, { ReactNode } from "react";
import { Card, Button } from "react-bootstrap";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface ProjectCardProps {
  align?: "left" | "right";
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
  icon: ReactNode;
  link: string;
  text: string;
}

const checkItOutFields = [
  {
    title: "Github",
    key: "github",
    icon: <FaGithub/>,
  },
  {
    title: "Visit",
    key: "url",
    icon: <FaGlobe/>,
  }
]

function CheckItOutItem(props: CheckOutItemProps) {
  return (
    <a href={props.link}>
      <Button size="sm">
        {props.text}&nbsp;
        {props.icon}
      </Button>
    </a>
  )
}

function CheckItOut(props: CheckItOutProps) {
  const checkItOutItems: ReactNode[] = []

  checkItOutFields.forEach((field: any) => {
    if (props[field.key] !== undefined) {
      checkItOutItems.push(<CheckItOutItem link={props[field.key]} text={field.title} icon={field.icon}/>);
    }
  });

  if (checkItOutItems.length === 0) {
    return null;
  }

  return <>Check it out here: {checkItOutItems}</>; 

}

export default function ProjectCard(props: ProjectCardProps) {


  return (
    <Card align={props.align}>
      <Card.Body >
        <h3>{props.title}</h3>
        {props.children}

        <CheckItOut url={props.url} github={props.github}/>
      </Card.Body>
    </Card>
  )
}