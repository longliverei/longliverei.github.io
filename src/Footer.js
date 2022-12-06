import React from "react";
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdOutlineContactPage } from "react-icons/md";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-box">
                <div className="footer">
                    <div className="contact-title">Contato</div>
                    <div className="footer-opt">
                        <a href="https://github.com/longliverei/" target="_blank" rel="noreferrer" className="opt"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/reinaldoybk/" target="_blank" rel="noreferrer" className="opt"><FaLinkedin /></a>
                        <a href="mailto:reinaldoybk@hotmail.com" target="_blank" rel="noreferrer" className="opt"><MdEmail /></a>
                        <a href="https://www.canva.com/design/DAFGTvx77Lg/5h-8wgsiHaHDhnrI7OGQ0w/view?utm_content=DAFGTvx77Lg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noreferrer" className="opt"><MdOutlineContactPage /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export { Footer };