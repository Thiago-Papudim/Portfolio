// import React from 'react';
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 id="portfolio">Portfólio</h3>
            <div className="grid">
                <div className="flip-card">
                    <div className="card">
                        <figure className="card-front">
                            <img className="img-portfolio"
                                src="https://posgraduando.com/wp-content/uploads/2016/01/publico-02.jpg"
                                alt="Cursos e Congressos" />
                            <figcaption>Cursos e Congressos</figcaption>
                        </figure>
                        <div className="card-back">
                            Cursos e Congressos: <br /> <br />
                            - Simpósio de Administração – “O Administrador e os Novos Cenários – Globalização e
                            Sustentabilidade”, realizado no Unipê. <br />
                            - Projeto de Extensão – UNIPÊ, Cargo: Aprendiz de Agente Autônomo – Bolsa de Valores
                            (BOVESPA). <br />
                            - #QuarentenaDev – ALURA. <br />
                            - #QuarentenaDados – ALURA. <br />
                            - #ImersãoCSS - ALURA. <br />
                            - #ImersãoGameDev - ALURA. <br />
                            - #ImersãoReact - ALURA.
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="card">
                        <figure className="card-front">
                            <img className="img-portfolio"
                                src="https://liag.ft.unicamp.br/wp-content/uploads/2022/05/codepen_logo.png" alt="Codepen" />
                            <figcaption>Codepen</figcaption>
                        </figure>
                        <div className="card-back">
                            <a href="https://codepen.io/Papudim/pen/poJmLxW" target="_blank">Site com os códigos produzidos durante as aulas.</a>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="card">
                        <figure className="card-front">
                            <img className="img-portfolio"
                                    src="https://cdn.analyticsvidhya.com/wp-content/uploads/2020/03/featured_image-2.jpg"
                                    alt="Colab" />
                                <figcaption>Colab</figcaption>
                            </figure>
                            <div className="card-back">
                                Exercícios realizados durante as aulas: <br /> <br />
                                <a href="https://colab.research.google.com/drive/1LsWjzlt7xx0gHjUDfRvDzL3VlNEZ4K81" target="_blank">Exercícios
                                    da aula 1.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1aBSV9Q3DbJ3GwlCuXBPc1_3jerFega0L#scrollTo=9sm-sJIPUfte" target="_blank">Exercícios
                                    da aula 2.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1bJdOFh26rN-VB70kRy7Z77JPiTZ0xiw4#scrollTo=Rv09DwuHdohJ" target="_blank">Exercícios
                                    da aula 3.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1ve-bafPA8HX0EgTYIWBn5P_FkE-8rxzB#scrollTo=prjz3IZIB_Xa" target="_blank">Exercícios
                                    da aula 4.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1BPLHJbdMg0eCSi0cwaChWvutgMuxLRNd#scrollTo=yN729smrZJUO" target="_blank">Exercícios
                                    da aula 5.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1TS2z7ZKFNO4ESn3mE2w3QgvwqNzUCmOq" target="_blank">Exercícios
                                    python 1.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1mGciHxYUJHeRXcN0jDnAvG3ODVKMtXBJ" target="_blank">Exercícios
                                    python 2.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1gbjbEA__tlZuXCZKTv4S-ZgxuOPsC3ES" target="_blank">Exercícios
                                    python 3.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1X-gSzxCNFK4usy55HVnZexKu9l67epvy" target="_blank">Exercícios
                                    python 4.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1tox-Ea01KTz4KKeNyU09UI-Kf8668w1o" target="_blank">Exercícios
                                    python 5.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1xmpaQvQgtVdhC58lCXi0FqkjCRKbHw-0" target="_blank">Exercícios
                                    python 6.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1lpwIKJEqND6Re1Vr7v-RWo_pwAvVfYIb" target="_blank">Exercícios
                                    python 7.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1uVWPThbIE8M746oXg8hvVsOUUUKj4HOz" target="_blank">Exercícios
                                    python 8.</a>
                                <a
                                    href="https://colab.research.google.com/drive/1FgwwGybpP9vjKZJWu7TgHwr6-G-wFVqk" target="_blank">Exercícios
                                    python 9.</a>
                            </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="card">
                        <figure className="card-front">
                            <img className="img-portfolio"
                                src="https://rockcontent.com/br/wp-content/uploads/sites/2/2020/06/site.jpg.webp" alt="Sites" />
                            <figcaption>Sites</figcaption>
                        </figure>
                        <div className="card-back">
                            Sites Produzidos: <br /> <br />
                            <a href="index.html">Thiago Soares site.</a> <br />
                            <a href="https://thiago-papudim.github.io/Star-Wars/" target="_blank">Star Wars site.</a> <br />
                            <a href="https://clone-disneyplus-murex-one.vercel.app/" target="_blank">Site Clone Disney+.</a> <br />
                            <a href="https://site-wmsa.vercel.app/" target="_blank">Site WMSA.</a> <br />
                            <a href="https://e-food-gamma.vercel.app/" target="_blank">E-Food.</a>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="card">
                        <figure className="card-front">
                                <img className="img-portfolio"
                                    src="http://www.finsmes.com/wp-content/uploads/2020/04/vercel.png"
                                    alt="Aplicativos" />
                                <figcaption>Aplicativos</figcaption>
                            </figure>
                            <div className="card-back">
                                Aplicativos criados durante a #ImersãoReact: <br /> <br />
                                <a href="https://thiago-flix.vercel.app/" target="_blank">ThiagoFlix.</a> <br />
                                <a href="https://minhas-tarefas-kappa.vercel.app/" target="_blank">Lista de atividades.</a>
                            </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="card">
                        <figure className="card-front">
                                <img className="img-portfolio"
                                    src="https://miro.medium.com/max/1024/0*keE5EUA6n8Ay-RzO.png"
                                    alt="p5.js" />
                                <figcaption>Jogos</figcaption>
                            </figure>
                            <div className="card-back">
                                Jogos Produzidos: <br /> <br />
                                <a href="https://editor.p5js.org/Papudim/full/j3nUrNnPu" target="_blank">ImersãoGameDev.</a> <br />
                                <a href="https://editor.p5js.org/Papudim/full/mIIcot-Td" target="_blank">Certificado.</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;