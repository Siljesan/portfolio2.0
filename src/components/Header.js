import React from "react";
import { Button } from "react-bootstrap";
import Menu from "./Menu";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <Button>
          <i className="fab fa-linkedin-in"></i>
        </Button>
        <Button>
          <i className="fab fa-github"></i>
        </Button>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
