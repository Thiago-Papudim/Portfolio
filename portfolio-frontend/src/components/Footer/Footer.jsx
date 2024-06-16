// import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <section className="contato">
                    <div className="contato-title">
                        <h4 id="contatos">Contatos</h4>
                    </div>
                </section>

                <div className="email">
                    <a href="mailto:thiago_soares_mago@hotmail.com">
                        <span></span>
                    </a>
                </div>

                <section>
                    <div className="social">
                        <a target="blank" href="https://www.facebook.com/profile.php?id=100010925196620/">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/MagoSoares/">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a target="blank" href="https://www.instagram.com/thiagoalvessoares/">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                        <a target="blank" href="https://www.linkedin.com/in/thiago-soares-desenvolvedor-front-end/">
                            <i className="fab fa-linkedin-in" style={{ color: 'rgb(0, 0, 238)' }}></i>
                        </a>
                        <a target="blank" href="https://github.com/Thiago-Papudim">
                            <i className="fab fa-github" style={{ color: 'rgb(0, 0, 238)' }}></i>
                        </a>
                    </div>
                </section>

                <section>
                    <div className="copy">
                        <p>Designed and built by <a href="#sobre">Thiago Soares</a>.</p>
                    </div>
                </section>
            </footer>
        </>
    );
};

export default Footer;