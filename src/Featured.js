import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

export default class Featured extends Component {
    goToSearchResult = () => {
        window.location = `/searchResult/s=shop`;
    }
    render () {
        return (
            <div className="featured">
                <div className="white-space">
    
                </div>
                <div className="flexbox" style={{display:'flex'}}>
                    <div className="img-container">
                        {/* <img alt="featured-img" src={require("./image/featured.jpg")} />
     */}
                    </div>
                    <div className="text-container">
                        <div className="text-box">
                            <h2> Search Your Beer </h2>
                            <p> Click on Shop Now to search the beer you want.</p>
                            <p style={{fontSize: "16px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultricies arcu ut lacus placerat consequat. Nullam sapien libero, consequat non faucibus euismod, mollis vel mi. Pellentesque posuere ex lectus, et rutrum quam volutpat non.</p>
                            <div>
                            <Button variant="warning" onClick={() => this.goToSearchResult()}>Shop Now</Button>
                            </div>
                            
                        </div>
                        
    
                    </div>
    
                </div>
    
            </div>
    
        )

    }
    
}
