import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { auth } from "./firebaseConfig";

function InnerNavmenu() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  //sign in handler
  const handleSignIn = () => {
    navigate("/login");
  };

  //signout handler
  const handleSignOut = () => {
    auth.signOut();
    alert("your are successfully signed out");
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="https://organoneasy.drkhanshomoeocare.com/">
          OrganonEasy
        </Navbar.Brand>
        <div>
          {isLoggedIn ? (
            <Button variant="primary" onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Button variant="success" onClick={handleSignIn}>
              Login
            </Button>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default InnerNavmenu;
