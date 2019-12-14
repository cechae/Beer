import React, {Component} from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Item.css';


const API = 'https://api.punkapi.com/v2/beers';

export default class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            input: "shop",
            isNoResult: false,
            appIsMounted: false,
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
            .then(data => this.setState({ hits: data, appIsMounted: true }));
        
    }

    render() {

        let ingredients = [];
        let ingObj = this.state.hits[0];
        console.log(ingObj)
        if (ingObj) {
            ingObj = ingObj['ingredients']
            console.log(ingObj)
            // loop thru ingredients array and add to ingredients array
            let keys = Object.keys(ingObj);
            for (const key of keys) {
                let val = ingObj[key];
                if (typeof val == 'string') {
                    ingredients.push(val)
                } else {
                    console.log(val)
                    for (let i = 0; i < val.length; i++) {
                        ingredients.push(val[i].name);
                    }
                }
            }
            ingredients = [...new Set(ingredients)];  //remove duplicates
            console.log(ingredients) 
        }
        


        return (
            <div className="page-content">
                {this.state.appIsMounted &&
                    <div>
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
                            <div className="img-container">
                                <img src={this.state.hits[0].image_url} />


                            </div>
                            <div className="desc-container">
                                <div className="title">
                                    {this.state.hits[0]['name']}
                                </div>
                                <div className="tagline">
                                    {this.state.hits[0]['tagline']}
                                    
                                </div>
                                <div className="stars"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></div>
                        
                                <div><span id="heading">First Brewed: </span> {this.state.hits[0]['first_brewed']}</div>
                                
                                <div><span id="heading">Description: </span> {this.state.hits[0]['description']} </div>
                                <div><span id="heading">ABV: </span> {this.state.hits[0]['abv']} </div>
                                <div><span id="heading">Ingredients: </span> 
                                    <ul>
                                        {ingredients.map((i,idx) => 
                                            <li>{i}</li>
                                        )} 
                                    </ul>
                                </div>
                               
                                <div><span id="heading">Food Pairing: </span> 
                                    <ul>
                                        {this.state.hits[0]['food_pairing'].map(i =>
                                            <li>{i}</li>
                                        )} 
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div> 
                }
            </div> // page-content div
        )
        
    }
}