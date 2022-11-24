import React from 'react';
import { Outlet } from 'react-router-dom'
import './Home.css';
import { Navbar } from '../../Navbar';
import { Intro } from './Intro';
import { Line } from '../../Line';
import { Skill } from './Skill';
import { Footer } from '../../Footer';

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Intro />
                <Line color="grey" />
                <Skill />
                <Line color="grey" />
                <Footer />
                <Outlet />
            </div>
        )
    }
}

export { Home };