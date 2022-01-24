import React, { useState } from "react";
import { Button, Nav, Offcanvas } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

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
              <Link to="/">Home</Link>
              <Link to="/about">About me / projects</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
          </Offcanvas.Body>
        </div>
      </Offcanvas>
    </div>
  );
}

export default Menu;
