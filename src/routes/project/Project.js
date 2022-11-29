import React from "react";
import './Project.css';
import { Temporary } from './Temporary';
import ScrollToTop from '../../ScrollToTop';
import { Footer } from '../../Footer';
import { Line } from '../../Line';

class Project extends React.Component {
    render() {
        return (
            <div className="container">
                <ScrollToTop />
                <Temporary />
                <Line color="grey" />
                <Footer />
            </div>
        )
    }
}

export { Project };