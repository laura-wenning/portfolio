import React, {ReactNode} from "react";
import { Card } from "react-bootstrap";

interface ExperienceCardProps {
  from: string;
  to: string;

  institution: string;
  title: string;
  children: ReactNode;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <Card>
      <Card.Header>
        <span>
          <span className="h5">{props.institution}</span>&nbsp;&nbsp;<br/>
          <span className="h6">{props.title}</span>
        </span>
        <span style={{float: "right"}}>{props.from} - {props.to}</span>
      </Card.Header>

      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  )
}