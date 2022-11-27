import React from 'react';
import './About.css';
import ScrollToTop from '../../ScrollToTop';
import { Text } from './Text';
import { Line } from '../../Line';
import { Footer } from '../../Footer';

class About extends React.Component {
    render () {
        return (
            <div className="container">
                <ScrollToTop />
                <Text />
                <Line color="grey" />
                <Footer />
            </div>
        )
    }
}

export { About };