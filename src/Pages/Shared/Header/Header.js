import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div className="bg">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <span>Tasnim management</span>
            <img src={logo} width={"50px"} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/features">
                Features
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Pricing
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/deets">
                sothing
              </Nav.Link>
              {user ? (
                <button className="btn btn-primary" onClick={handleSignOut}>
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
