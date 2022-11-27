import React from "react";
import './Text.css';

class Text extends React.Component {
    render() {
        return (
            <div className="text-box">
                <p className="text-title">Reinaldo, desenvolvedor.</p>
                <br></br>
                <p className="text">
                    Desde novo sempre fui curioso sobre as coisas ao meu redor, então sempre acabava tentando aprender sobre elas,
                    foi assim na escola que fui o primeiro da sala a conseguir ler. Ainda é nítido em minha memória o sentimento de medo 
                    quando fui escolhido para ler um texto que, na época, parecia gigante para mim, em um palco, na frente de diversos pais dos meus colegas do jardim de infância,
                    o medo logo foi transformado em orgulho ao ver o sorriso dos meus pais entre a platéia, foi nesse momento que percebi como o conhecimento é recompensandor.
                    <br></br>
                    <br></br>
                    Nos meus 11 anos de idade, me descobri um "gamer", adorava passar horas jogando, explorando novos mundos que apenas os jogos podem trazer.
                    Mas ainda faltava algo crucial para aproveitar a história, na época os jogos eram traduzidos majoritariamente em inglês, uma língua ao qual eu não possuia conhecimento algum,
                    em prol da minha diversão, peguei um dicionário e o usava enquanto jogava, em 1 ano conseguia ler quase todos os diálogos sem a ajuda do meu dicionário, por consequência aprendi inglês sozinho,
                    descobri minha habilidade autodidata e continuo até hoje me divertindo com jogos.
                    <br></br>
                    <br></br>
                    Deixando a nostalgia de lado, em 2021 comecei a programar no intuito de suprir minha
                    curiosidade, mal sabia eu que acabaria descobrindo um mundo de infinitas possibilidades e conhecimento sem fim.
                    Do primeiro "Hello World." até a criação desse site, me deparei com diversos obstáculos que foram todos superados,
                    fiz parte de uma incrível comunidade de desenvolvedores intitulada "42" em um ambiente que promove o trabalho em equipe e o desenvolvimento pessoal
                    numa rotina intensa para estarmos preparados para o mercado de trabalho.
                </p>
                <div className="like-box">
                    <div className="like">
                        <p className="like-title">O que eu gosto</p>
                        <li>Jogos</li>
                        <li>Filmes</li>
                        <li>Ler códigos</li>
                        <li>Mangás</li>
                    </div>
                    <div className="like">
                        <p className="like-title">O que estou estudando</p>
                        <li>NextJs</li>
                        <li>REST</li>
                        <li>Japonês</li>
                    </div>
                </div>
            </div>
        )
    }
};

export { Text };