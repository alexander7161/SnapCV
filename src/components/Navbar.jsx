import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../stylesheets/navbar.css';
import LandingPage from './views/LandingPage';
import Recorder from './views/Recorder';
import ShowSnapCV from './views/ShowSnapCV';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './SnapCV-logo.jpg';

// Landing-Page Route is configured seperatly
const routes = [
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

const Navbar = () => {
    return (
        <Router>
            <div>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                                <ul>
								    <li><img style={{width: 110, height: 60,position: "absolute", bottom: 2, left: 0}} src={logo}></img></li>
                                    <li><Link className="navLink" to="/" style={{position: "absolute", bottom: 10, right: 315}}>Home</Link></li>
                                    <li><Link className="navLink" to="/create" style={{position: "absolute", bottom: 10, right: 160}}>VideoExample</Link></li>
                                    <li><Link className="navLink" to="/show" style={{position: "absolute", bottom: 10, right: 20}}>Your SnapCV</Link></li>
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