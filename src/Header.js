import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar className='flex-left navbar ' id="mainNav" collapseOnSelect expand="md" >
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <a className="logo-btn" onClick={() => window.location = '/'}><h1>BeerDotCom</h1></a>
                        <div className="block address">
                            <div>Grand Central Terminal</div>
                            <div>New York, NY</div>
                            <div>917-XXX-XXXX</div>
                        </div>
                        <div className="block btn">
                            <button class="btn btn-1 btn-1a">Order Online</button>
                        </div>
                        <Nav.Link eventKey={1} onClick={() => {window.location = `/`}}>
                            Hours & Locations
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
                        <Nav.Link onClick={() => {window.location = `/store`}}>
                            Contact
                        </Nav.Link>
                        <div className="block btn">
                            <button class="btn btn-1 btn-1a">Email Signup</button>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    )
}
export default Header;