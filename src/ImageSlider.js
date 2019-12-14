import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

export default class ImageSlider extends Component {
    goToSearchResult = () => {
        window.location = `/searchResult/s=shop`;
    }
    render() {
        return (
            <div className="img-slider">
                    <Carousel>
                        {/* <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require("./image/carousel-4.jpg")}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require("./image/carousel-6.jpg")}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                                <div className="dark-filter">
                                    <h2>20% OFF SITEWIDE</h2>
                                    <p>Celebrate the season with 20% off all online orders.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <Button variant="warning" onClick={() => this.goToSearchResult()}>Shop Now</Button>
                                </div>
                            
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require("./image/halloween.jpg")}
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item> */}
                    </Carousel>
                </div>

        )
    }

}