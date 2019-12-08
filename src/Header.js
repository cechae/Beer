import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Navbar.Brand href="/">BeerShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                    <NavDropdown title="About" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Careers</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">FAQ</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Get In Touch" id="collasible-nav-dropdown2">
                        <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Returns</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">General</NavDropdown.Item>
                    </NavDropdown>

                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;