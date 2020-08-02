import React, { ReactNode } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

interface PageProps {
  children: ReactNode;
}

/**
 * The page component is used to wrap the content of a page to apply uniform
 * styling such as page margins.
 *
 * @param {ReactNode} props.children The child elements nested within this element.
 * These are passed automatically
 */
function Page(props: PageProps) {
  return (
    <>
      <Navbar>
        <Navbar.Brand className="text-center" style={{margin: "auto"}}>Laura Wenning</Navbar.Brand><br/>
      </Navbar>
      <Navbar >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{margin: "auto"}}>
            <Link href="/" passHref><Nav.Link>About Me</Nav.Link></Link>
            <Link href="/projects" passHref><Nav.Link>Projects</Nav.Link></Link>
            <Link href="/experience" passHref><Nav.Link>Experience</Nav.Link></Link>
            <Link href="/about-the-site" passHref><Nav.Link>About The Site</Nav.Link></Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-3">
        {props.children}
      </Container>
    </>
  );
}

export default Page;
