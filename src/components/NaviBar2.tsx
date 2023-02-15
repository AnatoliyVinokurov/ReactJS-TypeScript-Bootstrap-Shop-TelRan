import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NaviBar() {
    return (

        <header>
        <Navbar className='navbar' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" className='logo'>LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className='navelementbtn' href="#action1">Men</Nav.Link>
                        <Nav.Link className='navelementbtn' href="#action2">Women</Nav.Link>
                        <Nav.Link className='navelementbtn' href="#action3">Kids</Nav.Link>
                        <Nav.Link className='navelementbtn' href="#action4">Sale</Nav.Link>
                        <Nav.Link className='navelementbtn' href="#action5">Collections</Nav.Link>
                        <Nav.Link className='navelementbtn' href="#action6">Blog</Nav.Link>
                    </Nav>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        
                        <Button variant="outline-success">Search</Button>
                        <Button variant="outline-success">Search</Button>
                        <Button variant="outline-success">Search</Button>
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </header>

    )
}