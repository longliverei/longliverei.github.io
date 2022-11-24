import React from 'react';
import './Intro.css';
import okami from '../../img/okami.png';
import { TypeAnimation } from 'react-type-animation';

class Intro extends React.Component {
    render() {
        return (
            <div className="intro-box">
                <div className="intro-title-box">
                    <div className="intro-title">
                        <p>
                            <TypeAnimation className="type"
                                sequence={[
                                    'Eai!',
                                    2000,
                                    'Hello!',
                                    2000,
                                    'こんにちは!',
                                    2000,
                                    'Привет!',
                                    2000
                                ]}
                                style={{ fontSize: '2em'}}
                                wrapper="h2"
                                repeat={Infinity}   
                            />
                        </p>
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