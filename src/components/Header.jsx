import React from "react"
import { Container, Styled } from "theme-ui"
import { StyledHeader, Nav, NavItem, NavList, NavLink } from "gatsby-theme-scarlet/src/components/styles"

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Styled.h2 as={NavLink} href="#hero">
            Laura Wenning~
          </Styled.h2>
          <NavList>
            <NavItem>
              <NavLink>About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>My Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>My Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>ToDo</NavLink>
            </NavItem>
          </NavList>
        </Nav>
      </Container>
    </StyledHeader>
  );
}

