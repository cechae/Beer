import React, {Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const API = 'https://api.punkapi.com/v2/beers';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            input: "shop",
            isNoResult: false,
        }
    }
    handleChange = async (e) => {
        console.log(e.target.value);
        await this.setState({ input: e.target.value})

    }

    componentDidMount() {
        
        let itemId = this.props.match.url.substring(6);
        console.log("item id: " + itemId);

        let modifiedAPI = `${API}/${itemId}`;

       
        fetch(modifiedAPI)
            .then(response => response.json())
            .then(data => this.setState({ hits: data }));
        
    }

    render() {
        return (
            <div className="page-content">
                <div className="nav">
                    <Header />
                </div>
                <div className="search-bar-container">
                        <div className="logo">
                            <Button id="logo" onClick={() => window.location = '/'}> <h4> BeerShop </h4> </Button>
                        </div>

                        <div className="search-bar">
                            <Form style={{display: "flex"}} 
                            onSubmit={(e) => {e.preventDefault(); window.location = `/searchResult/s=${this.state.input===''?'':this.state.input}`}}
                            >
                                <Form.Control 
                                    placeholder="Search" 
                                    type="text" 
                                    value={this.state.searchQuery} 
                                    onChange={e=>this.handleChange(e)}>
                                    
                                </Form.Control>
                                <Link onClick={() => {window.location = `/searchResult/s=${this.state.input===''?'':this.state.input}`}}> <i className="fas fa-search searchIcon"></i> </Link>
                            </Form>
                        </div>
                </div>

                <div className="item-container">
                    
                </div>



            </div>
        )
        
    }
}