// import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className="profile">
            <div className="sobre-title">
                <h3 id="sobre">Sobre</h3>
            </div>
            <div className="Thiago-Soares">
            </div>

            <div className="summary">
                <div className="sum">
                    <h3>Thiago Soares</h3>
                    Nome: Thiago Augusto Alves Soares. <br />
                    Idade: 37 anos. <br />
                    Estado Civil: Solteiro. <br />
                    Naturalidade: João Pessoa - PB. <br />
                    Desenvolvedor Full Stack Python cursado na EBAC – Escola Britânica de Artes Criativas e Tecnologia, corretor Imobiliário cursado no CejaPro, formado em Administração de Empresas – pelo Centro Universitário de João Pessoa.
                </div>
                <div className="sum">
                    <h3>Idiomas e Linguagens</h3>
                    Inglês – Avançado, Espanhol – Básico, Português – Fluente. <br />
                    Domínio em HTML, Python, JavaScript, CSS e layouts Front end; <br />
                    Desenvolvimento e testes com Django, Postgres e APIs; <br />
                    Experiência com SQL, bancos de dados e implementação de software com abordagem DevOps; <br />
                    Domínio em Excel, Word e Power BI.
                </div>
                <div className="sum">
                    <h3>Formação</h3>
                    2024- Curso Full Stack Python – EBAC. <br />
                    2021- Curso Técnico em Transações Imobiliárias no CejaPro. <br />
                    2016- Pós Graduação em Gerenciamento de obras no IPOG - Instituto de Pós-Graduação e Graduação. (Trancado) <br />
                    2010- Bacharel em Administração de Empresas no Centro Universitário de João Pessoa – UNIPÊ. <br />
                    2005- Ensino Médio no Colégio Marista PIO X.
                </div>
            </div>
        </section>
    );
};

export default About;