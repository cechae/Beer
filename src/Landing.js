
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import InputGroup from 'react-bootstrap/InputGroup';


import ImageSlider from './ImageSlider';
import Featured from './Featured';
import {Link} from 'react-router-dom';
import './Landing.css';

export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",

        }
    }
    onSubmitSearch = (e) => {
        window.location = `/searchResult/${this.state.searchQuery}`

    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({searchQuery: e.target.value})
    }
    
    render() {
        console.log(this.props)

        return (
                                                                                                                                  
            <div className="page-content">
                <div className="top-container">
                <div className="navbar">
                    <Navbar collapseOnSelect expand="lg" variant="light">
                        <Navbar.Brand href="#home">BeerShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div className="contents">
                    </div>
                    <div className="search-bar-container">
                        <div className="logo">
                            <h4> BeerShop </h4>
                        </div>
                        <div className="search-bar">
                            <Form style={{display: "flex"}} onSubmit={(e) => this.onSubmitSearch(e)}>
                                <Form.Control 
                                    placeholder="Search" 
                                    type="text" 
                                    value={this.state.searchQuery} 
                                    onChange={e=>this.handleChange(e)}>
                                    
                                </Form.Control>
                                <Link to={`/searchResult/${this.state.searchQuery}`}> <i className="fas fa-search searchIcon"></i> </Link>
                            </Form>
                            {/* <input
                                type="text"
                                value={this.state.searchQuery}
                                onChange={(e) => this.handleChange(e)}
                                placeholder="Search for a beer here">
                            </input>
                            <Link to={`/searchResult/${this.state.searchQuery}`}> <i className="fas fa-search searchIcon"></i> </Link> */}

                        </div>
                    </div>
                    
                </div>
                
                
                <ImageSlider />
                <Featured />
               


            </div>
        )
    }
}