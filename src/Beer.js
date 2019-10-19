
import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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