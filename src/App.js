import React from "react";
import {
    BrowserRouter as Router
} from "react-router-dom";

import BikesPage from "./pages/BikesPage";


import './common.scss'
import NavBar from "./navigation/NavBar";
import BikeComparisonPage from "./pages/BikeComparisonPage";

export default function App() {


    return (
        <Router>
            <NavBar />
            <BikesPage />
            <BikeComparisonPage />
        </Router>
    )
}

