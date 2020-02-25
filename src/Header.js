import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar id="header" collapseOnSelect expand="lg" variant="light" style={{backgroundColor:"rgba(240,240,240,.6)", width: '100%', padding: '8px'}}>
            {/* <Navbar.Brand href="/">BeerShop</Navbar.Brand> */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link eventKey={1} onClick={() => {window.location = `/`}}>
                        Home
                    </Nav.Link>
                    
                    <Nav.Link eventKey={2}  onClick={() => {window.location = `/about`}}>
                        About
                    </Nav.Link>
                    <Nav.Link eventKey={3} onClick={() => {window.location = `/searchResult/s=shop`}}>
                        Shop
                    </Nav.Link>
                    <Nav.Link onClick={() => {window.location = `/store`}}>
                        Store
                    </Nav.Link>

                </Nav>
                <Nav>
                    <Nav.Link eventKey={2} target="_blank" rel="noopener noreferrer" href="https://punkapi.com/documentation/v2">
                        Punk API docs
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;