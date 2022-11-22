import React from 'react';
import './Skill.css';
import htmlimg from './img/html.svg';
import cssimg from './img/css.svg';
import jsimg from './img/javascript.svg';
import reactimg from './img/react.svg';
import nodejsimg from './img/nodejs.svg';

class Skill extends React.Component {
    render () {
        return (
            <div className="skill-box">
                <div className="skill-logo">
                    <a href="https://www.w3.org/TR/2011/WD-html5-20110405/"><img src={htmlimg} width="100px"></img></a>
                    <a href="https://www.w3schools.com/cssref/index.php"><img src={cssimg} width="100px"></img></a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"><img src={jsimg} width="100px"></img></a>
                    <a href="https://pt-br.reactjs.org/docs/getting-started.html"><img src={reactimg} width="100px"></img></a>
                    <a href="https://nodejs.org/pt-br/docs/"><img src={nodejsimg} width="100px"></img></a>
                </div>
            </div>
        )
    }
}

export { Skill };