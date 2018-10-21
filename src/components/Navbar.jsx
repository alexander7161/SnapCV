import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Link
} from "react-router-dom";
import "../stylesheets/navbar.css";
import LandingPage from "./views/LandingPage";
import Recorder from "./views/Recorder";
import ShowSnapCV from "./views/ShowSnapCV";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "./SnapCV-logo.jpg";

// Landing-Page and Show Route is configured seperatly
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
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="title" color="inherit">
              <ul>
                <li>
                  <Typography variant="title" color="inherit">
                    SnapCV
                  </Typography>
                </li>
                {/* <li><img style={{width: 110, height: 60,position: "absolute", bottom: 2, left: 0}} src={logo}></img></li> */}

                <li>
                  <Link
                    className="navLink"
                    to="/"
                    style={{ position: "absolute", bottom: 10, right: 315 }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="navLink"
                    to="/create"
                    style={{ position: "absolute", bottom: 10, right: 190 }}
                  >
                    Recorder
                  </Link>
                </li>
                <li>
                  <Link
                    className="navLink"
                    to="/show"
                    style={{ position: "absolute", bottom: 10, right: 20 }}
                  >
                    Your SnapCV
                  </Link>
                </li>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={LandingPage} />
        <Route
          path="/auth"
          component={() =>
            window.location.replace(
              "https://www.infojobs.net/api/oauth/user-authorize/index.xhtml?scope=CV&client_id=a4336c36c6924b6d86a7975d4cd2baca&redirect_uri=https://snapcv-220010.appspot.com/show&response_type=code"
            )
          }
        />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    </Router>
  );
};

export default Navbar;
