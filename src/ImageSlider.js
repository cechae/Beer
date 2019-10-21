import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ImageSlider = () => {
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
export default ImageSlider;