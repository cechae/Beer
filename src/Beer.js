
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

import './Beer.css';


const API = 'https://api.punkapi.com/v2/beers';
const DEFAULT_QUERY = 'redux';

export default class Beer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
        }
    }
    componentDidMount() {
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({ hits: data }));
    }
    render() {


        let resBeersImg = this.state.hits.map(i => {

            return (
                <img src={i.image_url} />
            )
        });
        let resBeersName = this.state.hits.map(i => i.name);

        let resBeers = this.state.hits.map(i => {
            return (
                <div className="single-container">
                    <div className='img-box'>
                        <img src={i.image_url} />
                    </div>
                    <div className="desc-box">
                        <h4> {i.name} </h4>
                    </div>
                </div>
            );
        })

        return (
            <div className="page-content">
                <div className="navbar">
                    <Navbar bg="light" expand="lg" className="beer-navbar">
                        <Navbar.Brand href="#home">BeerShop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="contents">



                </div>

                <h2> Hello </h2>
                <h4> Search for beers </h4>
                <div className="search-bar">
                    <Form style={{display: "flex"}}>
                        <Form.Control placeholder="Search"/>
                        <Button variant="primary" type="submit" style={{display: "inlineBlock"}}>
                            Submit
                        </Button>
                    </Form>
                </div>
                

                <div className="result-container">
                    <div className="content-box">
                        {resBeers}
                    </div>
                </div>



            </div>
        )
    }
}