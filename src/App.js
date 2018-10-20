import React, {Component} from 'react';
import Navbar from "./components/Navbar";
import { Redirect } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Navbar />
        );
    }
}

export default App;