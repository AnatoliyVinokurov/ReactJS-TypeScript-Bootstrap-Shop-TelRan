import React from 'react'
import { Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NaviBar() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='logo'>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link><Link to="/guest">Guest</Link></Nav.Link>
                        <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant="primary" className="me-2">Log In</Button>
                        <Button variant="primary">Sign out</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}