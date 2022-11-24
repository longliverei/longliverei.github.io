import React from 'react';
import './Home.css';
import { Intro } from './Intro';
import { Line } from '../../Line';
import { Skill } from './Skill';
import { Footer } from '../../Footer';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
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