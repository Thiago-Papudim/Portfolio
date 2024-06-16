// import React from 'react';
import './Header.css'
import Thiago from '../../assets/Thiago.jpg'

const Header = () => {
    return (
        <header>
            <div className="top" id="home"></div>
        <nav className="menu">
            <ul>
                <li><a href="#home"><i className="fa fa-home"></i></a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#portfolio">Portfólio</a></li>
                <li><a href="#pedidos">Pedidos</a></li>
                <li><a href="#contatos">Contato</a></li>
            </ul>
        </nav>
        <div className="title">
            <h2>Olá, </h2>
            <h4>eu sou <a className="soares" href="#sobre">
                    <spam>Thiago Soares,</spam>
                </a></h4>
            <h4>Desenvolvedor Full Stack Python</h4>
        </div>
        <img className="logo"
            src={Thiago}
            alt="Thiago" />
        </header>
    );
};

export default Header;