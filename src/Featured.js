import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

export default class Featured extends Component {
    goToSearchResult = () => {
        window.location = `/searchResult/shop`;
    }
    render () {
        return (
            <div className="featured">
                <div className="white-space">
    
                </div>
                <div className="flexbox" style={{display:'flex'}}>
                    <div className="img-container">
                        <img alt="featured-img" src={require("./image/featured.jpg")} />
    
                    </div>
                    <div className="text-container">
                        <div className="text-box">
                            <h2> Discover Your Beer </h2>
                            <p> Build your own custom box of the beers you love, and let us deliver to you.
                            This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. 
                            It dictates what amount of the available space inside the flex container the item should take up. </p>
                            <Button variant="warning" onClick={() => this.goToSearchResult()}>Shop Now</Button>
                        </div>
                        
    
                    </div>
    
                </div>
    
            </div>
    
        )

    }
    
}
