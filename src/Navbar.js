import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css';
import hannya from './img/hannya.svg'
import hannyaBlack from './img/hannyaBlack.svg'

class Navbar extends React.Component {
    render() {
        return (
            <header className="navbar-box">
                <div className="navbar">
                    <div className="logo">
                        <img src={hannya} className="logo-red" alt="hannya-icon"></img>
                        <Link to="/"><img src={hannyaBlack} className="logo-black" alt="hannya-black-icon"></img></Link>
                    </div>
                    <nav>
                        <a className="nav-head">Home</a>
                        <a className="nav-head">Projetos</a>
                        <Link to="/about" className="nav-head">Sobre</Link>
                    </nav>
                </div>
            </header>
        )
    }
}

export { Navbar };