import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './views/LandingPage';
import Recorder from './views/Recorder';
import ShowSnapCV from './views/ShowSnapCV';

    

const routes = [
    {
        path: "/home",
        component: LandingPage
    },  
    {
        path: "/create",
        component: Recorder
    },
    {
        path: "/show",
        component: ShowSnapCV
    }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
    <Route
    path={route.path}
    render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
    )}
    />
);

class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div>
                <ul>
                    <li>
                    <Link to="/home">Home</Link>
                    </li>
                    <li>
                    <Link to="/create">VideoExample</Link>
                    </li>
                    <li>
                    <Link to="/show">Your SnapCV</Link>
                    </li>
                </ul>

                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
                </div>
            </Router>
        );
    }
}

export default Navbar;