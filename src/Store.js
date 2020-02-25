import React from 'react';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import Footer from './Footer';

const Store = () => {
    return (
        <div>
            <div className="nav">
                <Header />
            </div>
        <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-upper">Come On In</span>
                  <span className="section-heading-lower">We're Open</span>
                </h2>
                <ul className="list-unstyled list-hours mb-5 text-left mx-auto">
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Sunday
                    <span className="ml-auto">Closed</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Monday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Tuesday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Wednesday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Thursday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Friday
                    <span className="ml-auto">7:00 AM to 8:00 PM</span>
                  </li>
                  <li className="list-unstyled-item list-hours-item d-flex">
                    Saturday
                    <span className="ml-auto">9:00 AM to 5:00 PM</span>
                  </li>
                </ul>
                <p className="address mb-5">
                  <em>
                    <strong>363 Beer World St. </strong>
                    <br />
                    New York, NY
                  </em>
                </p>
                <p className="mb-0">
                  <small>
                    <em>Call Anytime</em>
                  </small>
                  <br />
                  (123)456-7891
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    <section class="page-section about-heading">
      <div class="container">
        <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="img/about.jpg" alt=""/>
        <div class="about-heading-content">
          <div class="row">
            <div class="col-xl-9 col-lg-10 mx-auto">
              <div class="bg-faded rounded p-5">
                <h2 class="section-heading mb-4">
                  <span class="section-heading-lower">About Our BeerShop</span>
                </h2>
                <p>Founded in 1987 by the Beer bros, our establishment has been serving up rich beer in various regions of America. </p>
                <p class="mb-0">We guarantee that you will fall in <em>love</em> with our beers the moment you walk inside until you finish your last sip. Join us for your daily routine, an outing with friends, or simply just to enjoy some alone time.</p>
                        
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
</div>
    )
}
export default Store;