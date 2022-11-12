import React from 'react';
import { Navbar } from './Navbar';
import { Intro } from './Intro';

class Portfolio extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Intro />
            </div>
        )
    }
}

export { Portfolio };