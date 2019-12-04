
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Header from './Header';
import Footer from './Footer';
import ColumnList from './ColumnList';

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
                    <Header />
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