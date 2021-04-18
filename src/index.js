import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./Carousel";
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

const App = () => <Carousel />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
