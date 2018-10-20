import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom";
import '../stylesheets/navbar.css';
import LandingPage from './views/LandingPage';
import Recorder from './views/Recorder';
import ShowSnapCV from './views/ShowSnapCV';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Landing-Page and Show Route is configured seperatly
const routes = [
    {
        path: "/create",
        component: Recorder
    },
    {
        path: "/show/:code",
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
            <Route path="/show"  component={() => ( 
                window.location.replace("https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CV&client_id=a4336c36c6924b6d86a7975d4cd2baca&redirect_uri=https://snapcv-220010.appspot.com/show&response_type=code")
                )}/>
            {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>
        </Router>
    );
}

export default Navbar;