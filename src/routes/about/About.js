import React from 'react';
import './About.css';
import ScrollToTop from '../../ScrollToTop';
import { Text } from './Text';

class About extends React.Component {
    render () {
        return (
            <div className="container">
                <ScrollToTop />
                <Text />
            </div>
        )
    }
}

export { About };