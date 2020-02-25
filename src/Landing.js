
import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';

import ImageSlider from './ImageSlider';
import Featured from './Featured';
import {Link} from 'react-router-dom';
import './css/business-casual.css';

import './Landing.css';

export default class Landing extends Component {
    constructor(props) {
        super(props);
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

        <div>
            <h1 className="site-heading text-center text-white d-none d-lg-block">
            <span className="site-heading-upper text-primary mb-3"></span>
            <span className="site-heading-lower">Online BeerShop</span>
            </h1>
            <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
            <div className="container">
                <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item active px-lg-4">
                    <a className="nav-link text-uppercase text-expanded" href="/">Home
                        <span className="sr-only">(current)</span>
                    </a>
                    </li>
                    <li className="nav-item px-lg-4">
                    <a className="nav-link text-uppercase text-expanded" href="/about">About</a>
                    </li>
                    <li className="nav-item px-lg-4">
                    <a className="nav-link text-uppercase text-expanded link-bold" onClick={() => {window.location = `/searchResult/s=${this.state.searchQuery===''?'shop':this.state.searchQuery}`}}> Shop </a> 
                    </li>
                    <li className="nav-item px-lg-4">
                    <a className="nav-link text-uppercase text-expanded" href="/store">Store</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            <section className="page-section clearfix">
            <div className="container">
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
            </div>
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
        )
    }
}