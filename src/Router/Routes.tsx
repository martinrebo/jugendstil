import React, { ReactElement } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AboutUs from '../Pages/AboutUs';
import Home from '../Pages/Home';
import Services from '../Pages/Services';

interface Props {

}

export default function Routes(): ReactElement {
    return (
        <Router>
            <Switch>
                <Route path="/about-us">
                    <AboutUs />
                </Route>
                <Route path="/services">
                    <Services />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>

        </Router>
    )
}
