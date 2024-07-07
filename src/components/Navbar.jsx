import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navmenu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">OrganonEasy</Navbar.Brand>
        {/* <div>
          {isLoggedIn ? (
            <Button variant="primary" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Button variant="success" onClick={handleSignIn}>
              Login
            </Button>
          )}
        </div> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link> */}
            <NavDropdown title="Quick Links" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="/refund-policy">
                Refund Policy
              </NavDropdown.Item>

              {/* <NavDropdown.Item href="/cancellation-policy">
                Cancellation Policy
              </NavDropdown.Item> */}

              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Help & Suppport
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmenu;
