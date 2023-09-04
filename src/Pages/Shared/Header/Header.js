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
    <div className=" sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container className="ms-2">
          <Navbar.Brand as={Link} to="/">
            <img src={logo} width={"60px"} alt="" />
            <span>The Gadget Zone</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/inventory/:inventoryId">
                Gadgets
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link as={Link} to="/dashboard">
                    Dashboard
                  </Nav.Link>
                </>
              )}
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
            <Nav>
              <Nav.Link as={Link} to="/myprofile">
                {user && <span>{user.displayName}</span>}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
