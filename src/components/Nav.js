import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [primaryColor] = useState("#1965FF");

  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Link className="navItem" to="/">
          Home
        </Link>

        <Link className="navItem" to="/dashboard">
          Dashboard
        </Link>

        <Link className="navItem" to="/prevention">
          Prevention
        </Link>

        <Link className="navItem" to="/about">
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
