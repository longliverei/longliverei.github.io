import React from 'react';
import './Home.css';
import { Intro } from './Intro';
import { Line } from '../../Line';
import { Skill } from './Skill';
import { Footer } from '../../Footer';
import ScrollToTop from '../../ScrollToTop';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <ScrollToTop />
                <Intro />
                <Line color="grey" />
                <Skill />
                <Line color="grey" />
                <Footer />
            </div>
        )
    }
}

export { Home };