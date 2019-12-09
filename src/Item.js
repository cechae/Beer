import React, {Component} from 'react';

const API = 'https://api.punkapi.com/v2/beers';

export default class Item extends Component {
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
            <h1> hello </h1>
        )
        
    }
}