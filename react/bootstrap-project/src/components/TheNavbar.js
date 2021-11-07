import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
export default function TheNavbar() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => console.log(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/contact" eventKey="link-1">
          Contact
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
