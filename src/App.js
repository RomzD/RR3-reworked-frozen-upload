import React from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import BikesPage from "./pages/BikesPage";

export default function App() {



    return (
        <Router>
            <Route path="/" component={BikesPage} />

        </Router>
    )
}

