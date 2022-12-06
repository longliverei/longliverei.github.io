import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Main.css';
import hannya from './img/hannya.svg';
import hannyaBlack from './img/hannyaBlack.svg';
import { FaBars } from 'react-icons/fa';

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
                        <input type="checkbox" id="check"></input>
                        <label for="check" className="check-btn">
                            <i className="FaBars"><FaBars /></i>
                        </label>
                        <nav className="nav-box" id="nav-box">
                            <li><NavLink to="/" className={({ isActive }) => isActive ? activeClassName : inactiveClassName}>Home</NavLink></li>
                            <li><NavLink to="/projects" className="nav-head">Projetos</NavLink></li>
                            <li><NavLink to="/about" className="nav-head">Sobre</NavLink></li>
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