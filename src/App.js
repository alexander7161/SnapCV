import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import apiReducer from './components/views/store/reducer';

// Note: this API requires redux@>=3.1.0
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(apiReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Navbar />
            </Provider>
        );
    }
}

export default App;