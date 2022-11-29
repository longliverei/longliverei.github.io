import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom'
import './Main.css';
import hannya from './img/hannya.svg'
import hannyaBlack from './img/hannyaBlack.svg'

let activeClassName = "active";
let inactiveClassName ="nav-head";

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
                            <NavLink to="/" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Home</NavLink>
                            <NavLink to="/projects" className="nav-head">Projetos</NavLink>
                            <NavLink to="/about" className="nav-head">Sobre</NavLink>
                            <NavLink to="/kitties" className="nav-head">Kitties!</NavLink>
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