import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="navBar">
      <div>
        {props.authentication ? (
          <Link to="/open-bounties" className="logo">
            Bounty Hunter CRAIG SLIST
          </Link>
        ) : (
          <Link to="/" className="logo">
            Bounty Hunter CRAIG SLIST
          </Link>
        )}
      </div>
      <div className="navButtons">
        {props.authentication ? (
          <>
          <Button className="navBtn" onClick={props.myBounties}>
            My Bounties
          </Button>
          <Button className="navBtn" onClick={props.handleLogout}>
            Logout
          </Button>
          </>
          
        ) : (
          <>
            <Link to="/Signup">
              <Button className="navBtn">Sign Up</Button>
            </Link>
            <Link to="/">
              <Button className="navBtn">Login</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
