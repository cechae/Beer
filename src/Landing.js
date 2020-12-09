
import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';


import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-bootstrap/Carousel';
import ImageSlider from './ImageSlider';
import Featured from './Featured';
import {Link} from 'react-router-dom';
import './css/business-casual.css';

import './Landing.css';

export default class Landing extends Component {
    constructor(props) {
        super();
        this.state = {
            searchQuery: "",

        }
    }
    onSubmitSearch = (e) => {
        //window.location.assign(`/searchResult/${this.state.searchQuery}`)
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({searchQuery: e.target.value})
    }
    
    render() {

        return (    

        <div className="flex-container" id="beer-dot-com">
            


            <Navbar className='flex-left navbar ' id="mainNav" collapseOnSelect expand="md" >
            
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <h1>BeerDotCom</h1>
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



            <div className="flex-right">
                <div>
                    <ImageSlider/>
                </div>
                <section className="page-section clearfix">
                    
                    
                    {/* <div className="container">
                        <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src={require("./img/bar.jpg")} alt="" />
                        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
                            <h2 className="section-heading mb-4">
                            <span className="section-heading-upper">Fresh Beer</span>
                            <span className="section-heading-lower">Worth Drinking</span>
                            </h2>
                            <p className="mb-3">Every cup of our quality artisan beer starts with locally sourced, hand picked ingredients. Once you try it, our beer will be a blissful addition to your night - we guarantee it! Click on Shop Now to search the beer you want.</p>
                            <div className="intro-button mx-auto">
                            <a className="btn btn-primary btn-xl" href="#" onClick={() => {window.location = `/searchResult/s=${this.state.searchQuery===''?'shop':this.state.searchQuery}`}}> Shop Now! </a>
                            </div>
                        </div>
                        </div>
                    </div> */}
                    </section>
                    <section className="page-section cta">
                    <div className="container">
                        <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <div className="cta-inner text-center rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">Our Promise</span>
                                <span className="section-heading-lower">To You</span>
                            </h2>
                            <p className="mb-0">When you walk into our shop to start your day, we are dedicated to providing you with friendly service, a welcoming atmosphere, and above all else, excellent products made with the highest quality ingredients. If you are not satisfied, please let us know and we will do whatever we can to make things right!</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
                    <Footer />
                </div>
        </div>
        )
    }
}