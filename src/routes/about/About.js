import React from 'react';
import './About.css';
import { Navbar } from '../../Navbar';
import { Footer } from '../../Footer';

class About extends React.Component {
    render () {
        return (
            <div className="container">
                <Navbar />
                <Footer />
            </div>
        )
    }
}

export { About };