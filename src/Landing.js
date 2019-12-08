
import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Header from './Header';
import Footer from './Footer';

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
        console.log(this.state.searchQuery)
        //window.location.assign(`/searchResult/${this.state.searchQuery}`)
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
                    <Header />
                    </div>
                    <div className="contents">
                    </div>
                    <div className="search-bar-container">
                        <div className="logo">
                            <h4> BeerShop </h4>
                        </div>
                        <div className="search-bar">
                            <Form style={{display: "flex"}} 
                                //   onSubmit={(e) => this.onSubmitSearch(e)}
                                //   onSubmit = { () => {window.location.assign(`/searchResult/s=${this.state.searchQuery==''?'':this.state.searchQuery}`); return false}}
                                //   onSubmit={(e) => this.onSubmitSearch(e)}
                                onSubmit = {(e) => {e.preventDefault(); window.location = `/searchResult/s=${this.state.searchQuery===''?'':this.state.searchQuery}`}}
                                  >
                                <Form.Control 
                                    placeholder="Search" 
                                    type="text" 
                                    value={this.state.searchQuery} 
                                    onChange={e=>this.handleChange(e)}>
                                    
                                </Form.Control>
                                <Link onClick={() => {window.location = `/searchResult/s=${this.state.searchQuery===''?'':this.state.searchQuery}`}}> <i className="fas fa-search searchIcon"></i> </Link>
                            </Form>
                            
                        </div>
                    </div>
                    
                </div>
                
                
                <ImageSlider />
                <Featured />
                <Footer />
            </div>
        )
    }
}