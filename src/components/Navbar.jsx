import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../stylesheets/navbar.css';
import LandingPage from './views/LandingPage';
import VideoExample from './views/VideoExample';
import ShowSnapCV from './views/ShowSnapCV';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Landing-Page Route is configured seperatly
const routes = [
    {
        path: "/create",
        component: VideoExample
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

const Navbar = () => {
    return (
        <Router>
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                                <ul>
                                    <li><Link className="navLink" to="/">Home</Link></li>
                                    <li><Link className="navLink" to="/create">VideoExample</Link></li>
                                    <li><Link className="navLink" to="/show">Your SnapCV</Link></li>
                                </ul>
                        </Typography>
                    </Toolbar>
                </AppBar>            
            <Route exact path="/" component={LandingPage} />
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>
        </Router>
    );
}

export default Navbar;