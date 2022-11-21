import React from 'react';
import { Navbar } from './Navbar';
import { Intro } from './Intro';
import { Line } from './Line';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Intro />
                <Line color="rgb(240, 6, 6)" />
            </div>
        )
    }
}

export { Portfolio };