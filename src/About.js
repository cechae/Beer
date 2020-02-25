import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer from './Footer';

const About = () => {
    return (
        <div>
            <div className="nav">
                <Header />
            </div>
            <div className="about-container">
            <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="img/about.jpg" alt=""/>
                <div class="about-heading-content" style={{margin:"3rem 0"}}>
                    <div class="row">
                    <div class="col-xl-9 col-lg-10 mx-auto">
                        <div class="bg-faded rounded p-5">
                        <h2 class="section-heading mb-4">
                            <span class="section-heading-lower">About Our BeerShop</span>
                        </h2>
                        <p>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich beer in various regions of America. </p>
                        <p class="mb-0">We guarantee that you will fall in <em>love</em> with our beers the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.</p>
                        </div>
                    </div>
                    </div>
                </div>


            </div>

        <Footer />
        </div>
    )
}
export default About;