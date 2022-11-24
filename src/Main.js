import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import './Main.css';
import hannya from './img/hannya.svg'
import hannyaBlack from './img/hannyaBlack.svg'

class Main extends React.Component {
    render() {
        return (
            <>
                <header className="navbar-box">
                    <div className="navbar">
                        <div className="logo">
                            <img src={hannya} className="logo-red" alt="hannya-icon"></img>
                            <Link to="/"><img src={hannyaBlack} className="logo-black" alt="hannya-black-icon"></img></Link>
                        </div>
                        <nav>
                            <Link to="/" className="nav-head">Home</Link>
                            <a className="nav-head">Projetos</a>
                            <Link to="/about" className="nav-head">Sobre</Link>
                        </nav>
                    </div>
                </header>
                <div>
                    <Outlet />
                </div>
            </>
        )
    }
}

export { Main };