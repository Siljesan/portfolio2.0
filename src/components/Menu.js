import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";

function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header__menu">
      <Button variant="primary" onClick={handleShow} className="me-2">
        <i className="fas fa-bars"></i>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <div className="header__menu--oc">
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>
              <h1>Menu</h1>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about.html">About me / projects</Nav.Link>
              <Nav.Link href="/">Contact</Nav.Link>
            </Nav>
            <ul>
              <li>Home</li>
              <li>About me / projects</li>
              <li>Contact</li>
            </ul>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </div>
  );
}

export default Menu;
