import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import * as serviceWorker from './serviceWorker';
import Cart from './Cart';
import SearchResult from './SearchResult';
import Item from './Item';
import About from './About';
import Store from './Store';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/mycart" component={Cart} />
            <Route exact path="/searchResult/:searchQuery" component={SearchResult} />
            <Route exact path="/item/:id" component={Item} />
            <Route exact path="/about" component={About} />
            <Route exact path="/store" component={Store} />

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
