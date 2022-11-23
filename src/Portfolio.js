import React from 'react';
import './Portfolio.css';
import { Navbar } from './Navbar';
import { Intro } from './Intro';
import { Line } from './Line';
import { Skill } from './Skill';
import { Footer } from './Footer';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Intro />
                <Line color="grey" />
                <Skill />
                <Line color="grey" />
                <Footer />
            </div>
        )
    }
}

export { Portfolio };