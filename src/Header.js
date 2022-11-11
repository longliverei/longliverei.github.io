import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <a className="logo">Reinaldo Yabiku</a>
                <nav>
                    <a className="nav-head">Home</a>
                    <a className="nav-head">Projetos</a>
                    <a className="nav-head">Sobre</a>
                </nav>
            </header>
        )
    }
}

export { Header };