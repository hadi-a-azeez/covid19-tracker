import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [primaryColor] = useState("#1965FF");
  const [smTextColor] = useState("#505577");
  const [decoration] = useState("none");

  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Link class="navItem" to="/">
          Home
        </Link>

        <Link class="navItem" to="/dashboard">
          Dashboard
        </Link>

        <Link class="navItem" to="/prevention">
          Prevention
        </Link>

        <Link class="navItem" to="/about">
          About Me
        </Link>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Button
            href="#"
            className="pl-4 pr-4 text-white"
            style={{
              borderRadius: 29,
              fontSize: 17,
              backgroundColor: primaryColor,
              fontWeight: 600,
            }}
          >
            Help Line
          </Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
