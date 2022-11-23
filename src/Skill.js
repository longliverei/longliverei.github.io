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
                    <a href="https://www.w3.org/TR/2011/WD-html5-20110405/" target="_blank"><img src={htmlimg} alt="html" width="100px"></img></a>
                    <a href="https://www.w3schools.com/cssref/index.php" target="_blank"><img src={cssimg} alt="css" width="100px"></img></a>
                    <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><img src={jsimg} alt="javascript" width="100px"></img></a>
                    <a href="https://pt-br.reactjs.org/docs/getting-started.html" target="_blank"><img src={reactimg} alt="reactjs"width="100px"></img></a>
                    <a href="https://nodejs.org/pt-br/docs/" target="_blank"><img src={nodejsimg} alt="nodejs" width="100px"></img></a>
                </div>
                <div className="skill-text-box">
                    <div className="first-row">
                        <h2 className="title">Jornada</h2>
                        <p>Programador desde 2021, completamente autodidata! Após tempos de estudo finalmente decidi fazer esse site para divulgar meus projetos, caso tenha gostado, por favor, não hesite em entrar em contato comigo e se quiser saber um pouco mais sobre mim, visite a parte "Sobre".</p>
                    </div>
                    <div className="second-row">
                        <h2 className="skills">Habilidades</h2>
                        <p>As citadas acima são minhas principais habilidades, além disso, possuo conhecimento em PHP, MySQL, NoSQL utilizando MongoDB e noções de SCRUM. Em relação as soft skills, destaco minha sociabilidade, facilidade no trabalho em equipe e minha vontade de aprender cada vez mais. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export { Skill };