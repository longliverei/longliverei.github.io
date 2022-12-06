import React from 'react';
import './Intro.css';
import okami from '../../img/okami.png';

class Intro extends React.Component {
    render() {
        return (
            <div className="intro-box">
                <div className="intro-title-box">
                    <div className="intro-title">
                        <p>Oi!</p>
                    </div>
                    <div className="intro-text">
                        <p>Me chamo Reinaldo, sou um desenvolvedor junior de São Paulo. Seja bem-vindo!</p>
                    </div>
                </div>

                <div>
                    <img src={okami} className="okami" alt="Imagem Okami"></img>
                </div>
            </div>
        )
    }
}

export { Intro };