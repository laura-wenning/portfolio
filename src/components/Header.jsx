import React from "react"
import { Container, Styled } from "theme-ui"
import { StyledHeader, Nav, NavItem, NavList, NavLink } from "gatsby-theme-scarlet/src/components/styles"
import { FaBars } from "react-icons/fa";

const pages = [
  {text: "Projects", href: "/projects"},
  {text: "My Experience", href: "/experience"},
  {text: "Lantern Tabletop", href: "/lantern"}
];

/**
 * Renders the collapsable nagivation dropdown 
 */
function NavDropdown() {
  const items = [];
  pages.forEach(page => {
    items.push(
      <li key={page.href}><a className="dropdown-item" href={page.href}>{page.text}</a></li>
    );
  });

  return (
    <div className="collapse navbar-collapse d-md-none navcollapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {items}
      </ul>
    </div>
  );
}

/**
 * Renders the tabs for medium and larger screens
 */
function NavTabs() {
  const items = [];
  pages.forEach(page => {
    items.push(
      <NavItem key={page.href}>
        <NavLink href={page.href}>{page.text}</NavLink>
      </NavItem>
    );
  });

  return items;
}

/**
 * Renders a full header
 */
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav className="justify-content-between justify-content-sm-center justify-content-md-between">
          <Styled.h2 className="logo" as={NavLink} href="/">
            Laura Wenning
          </Styled.h2>
          
          <NavList className="navlist d-none d-md-flex">
            <NavTabs/>
          </NavList>

          <NavList className="d-md-none navhamburger">
            <NavItem><NavLink data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <FaBars/>
            </NavLink></NavItem>
          </NavList>
        </Nav>
        
       <NavDropdown/>
      </Container>
    </StyledHeader>
  );
}

