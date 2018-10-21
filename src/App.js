import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from "./components/views/store/reducers"
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: indigo
  },
});
// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>

                {/* <React.Fragment> */}
                    <CssBaseline />
                    <Navbar />
                {/* </React.Fragment> */}
                </MuiThemeProvider>

            </Provider>
        );
    }
}

export default App;