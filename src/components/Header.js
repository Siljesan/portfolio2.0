import React from "react";
import { Button } from "react-bootstrap";
import Menu from "./Menu";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <a
          href="https://www.linkedin.com/in/silje-sch%C3%B8ll-897ab0158/"
          target={"_blank"}
          rel="noreferrer"
        >
          <Button>
            <i className="fab fa-linkedin-in"></i>
          </Button>
        </a>
        <a
          href="https://github.com/Siljesan"
          target={"_blank"}
          rel="noreferrer"
        >
          <Button>
            <i className="fab fa-github"></i>
          </Button>
        </a>
      </div>
      <Menu />
    </div>
  );
}

export default Header;
