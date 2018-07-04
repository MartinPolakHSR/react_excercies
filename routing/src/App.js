import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import {Seconds} from './Seconds';
import {MyName} from './MyName';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
            <ul>
                <li> <Link to = "/myName" / > < /li>
                <li> < Link to = "/Seconds" / > < /li>
            </ul>

            < Route
        path = "/myName"
        component = {MyName}
        />
        < Route
        path = "/seconds"
        component = {Seconds}
        />

        < /div>
        < /BrowserRouter>
    )
    }
}

export default App;
