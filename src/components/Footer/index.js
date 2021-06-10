import React from 'react';
import './Footer.css'

export default () => {
    return (
        <footer>
            <div className="container">
            <nav>
                    <ul className="redes-sociais">
                        <p>
                            <strong>Desenvolvido por Lucas Santos Souza</strong>
                        </p>
                        <li>
                            <a href="https://www.linkedin.com/in/lucas-souza19">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin" />
                            <p>Linkedin</p>
                            </a> 
                        </li>
                        <li>
                            <a href="https://github.com/lucas-souza19">
                            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
                            <p>GitHub</p>
                            </a> 
                        </li>
                        <li>
                            <a href="mailto:lucassouzacps19@gmail.com">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" alt="Gmail" />
                            <p>Gmail</p>
                            </a> 
                        </li>
                    </ul>
                </nav>

                <p>Direitos de imagem para Netflix</p>
                    <br/>
                <p>
                    Dados fornceidos pela API do site:
                    <a href="https://developers.themoviedb.org/3/getting-started/introduction"> TheMovieDB.org</a>
                </p>
            </div>
        </footer>

)}