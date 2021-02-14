import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import "./layout";

/**
 * A standard link for use in the footer. Made so that we can handle
 * changes easily.
 * @param href The link to the external website
 * @param children Whatever icon we want to render  
 */
function FooterLink({ href, children }) {
  return (
    <a href={href}>{children}</a>
  );
}

/**
 * Renders the footer of the website. 
 */
function Footer() {
  return (
    <div className="footer">
      <div style={{
        paddingTop: "1em",
        paddingBottom: "1em",
        display: "flex",
        justifyContent: "center"
      }}>
        Like what you see? Check me out elsewhere!
      </div>

      <div style={{
        paddingBottom: "1.5em",
        display: "flex",
        justifyContent: "center",
        textDecoration: "none",
      }}>
        <FooterLink href="https://github.com/hey-waffles" hover="Github">
          <FaGithub/>
        </FooterLink>

        <FooterLink href="https://www.linkedin.com/in/laura-wenning-5a8131134/" hover="LinkedIn">
          <FaLinkedinIn/>
        </FooterLink>
      </div>
    </div>
  );
}

export default Footer;