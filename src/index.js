import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom';
import store from "./app/store.js";

import "antd/dist/antd.css"; 


ReactDOM.render(
    <Router>
    <Provider store = {store}>
    <App />
    </Provider>
    </Router>
    
    , document.getElementById("root"));
