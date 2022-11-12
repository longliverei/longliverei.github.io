import React from 'react';
import './Navbar.css';
import hannya from './img/hannya.svg'
import hannyaBlack from './img/hannyaBlack.svg'

class Navbar extends React.Component {
    render() {
        return (
            <header className="navbar">
                <div className="logo">
                    <img src={hannya} className="logo-red"></img>
                    <img src={hannyaBlack} className="logo-black"></img>
                </div>
                <nav>
                    <a className="nav-head">Home</a>
                    <a className="nav-head">Projetos</a>
                    <a className="nav-head">Sobre</a>
                </nav>
            </header>
        )
    }
}

export { Navbar };