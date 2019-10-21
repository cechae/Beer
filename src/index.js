import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import * as serviceWorker from './serviceWorker';
import BeerDetail from './BeerDetail';
import Cart from './Cart';
import SearchResult from './SearchResult';


const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/mycart" component={Cart} />
            <Route exact path="/detail" component={BeerDetail} />
            <Route exact path="/searchResult/:searchQuery" component={SearchResult} />


        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
