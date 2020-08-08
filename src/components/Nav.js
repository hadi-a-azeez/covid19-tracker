import React, { useState } from "react";
import { Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [primaryColor] = useState("#1965FF");
  const [smTextColor] = useState("#505577");
  const [decoration] = useState("none");

  return (
    <Navbar expand="lg" variant="light" bg="white">
      <Link
        to="/"
        style={{
          color: smTextColor,
          textDecoration: decoration,
          fontSize: 17,
          marginLeft: 40,
        }}
      >
        Home
      </Link>

      <Link
        to="/dashboard"
        style={{
          color: smTextColor,
          textDecoration: decoration,
          fontSize: 17,
          marginLeft: 40,
        }}
      >
        Dashboard
      </Link>

      <Link
        to="/prevention"
        style={{
          color: smTextColor,
          textDecoration: decoration,
          fontSize: 17,
          marginLeft: 40,
        }}
      >
        Prevention
      </Link>

      <Link
        to="/about"
        style={{
          color: smTextColor,
          textDecoration: decoration,
          fontSize: 17,
          marginLeft: 40,
        }}
      >
        About us
      </Link>

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
