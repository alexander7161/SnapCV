import React, {Component} from 'react';
import VideoExample from './components/Recorder';
import logo from './logo.svg';
import './App.css';
import Test from './components/test';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <h1>snapCV</h1>
                    <br />
                    <VideoExample />
                </div>
            </div>
        );
    }
}

export default App;
