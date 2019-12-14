import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import "./SearchResult.css";


const API = 'https://api.punkapi.com/v2/beers';

class SearchResult extends React.Component {
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

    search = async (input) => {
        console.log(input)
        let modifiedAPI = `${API}?beer_name=${input}`;
        fetch(modifiedAPI).then(response => response.json()).then(data => {
            if (data.length === 0) {
                this.setState({ hits: data, isNoResult: true})
            }else {
                this.setState({ hits: data })
            }
        });
    }
    goToMain = () => {
        window.location('/')
    }
    goToItem = (id) => {
        window.location(`/item/${id}`);
    }
    componentDidMount() {
        
        let query = this.props.match.params.searchQuery.substring(2);
        console.log("inputSearchQuery was: " + query);

        if (query === "shop") { // when the page loads for the first time
            fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ hits: data }));
        } else { // when there is an user input
            console.log(query);
            this.search(query);
        }
    }
    render() {
        let resBeers = this.state.hits.map(i => {
            return (
                <div className="single-container" key={i.id} id={i.id} onClick={() => window.location = `/item/${i.id}`}>
                    <div className='img-box'>
                        <img src={i.image_url} alt="img" />
                    </div>
                    <div className="desc-box">
                        <h4> {i.name} </h4>
                        <p> {i.tagline} </p>
                    </div>
                </div>
            );
        })
        return(
            <div className="search-result">
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

                 <div className="result-container">
                    <div className="filter-box">
                        <div className="filter">
                            

                        </div>

                    </div>
                    <div className="content-box" style={{display: "flex"}}>
                        <div className="num-result">
                            {this.state.input!=='shop'?
                                <Badge variant="success">Results found: {this.state.hits.length}</Badge>
                            : ""}
                        </div>
                        <div className='item-container'>
                            {resBeers}
                        </div>
                        
                    </div>

                </div>

            </div>
        )
    }
}
export default SearchResult;