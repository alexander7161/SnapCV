import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import VideoExample from './components/VideoExample';
import logo from './logo.svg';
import './App.css';
import Test from './components/test';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Test/>
                <div>
                    <h1>snapCV</h1>
                    <hr />
                    <VideoExample />
                </div>
            </div>
        );
    }
}

export default App;
