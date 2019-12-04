import React from 'react';
import Header from './Header';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const API = 'https://api.punkapi.com/v2/beers';
const DEFAULT_QUERY = 'redux';

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: [],
            
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.searchQuery)
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



        return(
            <div className="search-result">
                <div className="nav">
                    <Header />

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

                 <div className="result-container">
                    <div className="content-box">
                        {resBeers}
                    </div>
                </div>


            </div>
        )
    }
}
export default SearchResult;