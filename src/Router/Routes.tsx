import React, { ReactElement, ReactNode } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import AboutUs from '../Pages/AboutUs';
import Home from '../Pages/Home';
import Services from '../Pages/Services';

interface Props {
    children: ReactNode
}

export default function Routes({ children }: Props): ReactElement {
    return (
        <Router>
            {children}
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
