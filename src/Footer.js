import React from "react";
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-box">
                <div className="footer">
                    <h1>Contato</h1>
                    <div className="footer-opt">
                        <a href="https://github.com/longliverei/" target="_blank" rel="noreferrer" className="opt">GitHub</a>
                        <a href="https://www.linkedin.com/in/reinaldoybk/" target="_blank" rel="noreferrer" className="opt">Linkedin</a>
                        <a href="mailto:reinaldoybk@hotmail.com" target="_blank" rel="noreferrer" className="opt">Email</a>
                        <a className="opt">Currículo</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { Footer };