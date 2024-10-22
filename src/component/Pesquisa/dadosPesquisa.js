import React, { useEffect, useState } from 'react';
import AcessibilidadeNaWeb from '../../imgs/Acessibilidade na Web.png';
import Bootstrap4 from '../../imgs/Bootstrap4.png';
import ColecaoCangaceiroJavaScript from '../../imgs/Colecao Cangaceiro JavaScript.png';
import ColetaneaFrontEnd from '../../imgs/Coletânea Front-End.png';
import GuiaFrontEnd from '../../imgs/Guia Front-End.png';
import HTML5eCSS3 from '../../imgs/HTML5 e CSS3.png';
import JavaScriptAssertivo from '../../imgs/JavaScript Assertivo.png';
import LiderancaEmDesign from '../../imgs/Liderança em Design.png';
import ProgressiveWebApps from '../../imgs/Progressive Web Apps.png';
import Sass from '../../imgs/Sass.png';
import TurbineSeuCSS from '../../imgs/Turbine seu CSS.png';


const livros = [
    { id: 1, nome: 'Acessibilidade na Web', src: AcessibilidadeNaWeb },
    { id: 2, nome: 'Bootstrap 4', src: Bootstrap4 },
    { id: 3, nome: 'Coleção Cangaceiro JavaScript', src: ColecaoCangaceiroJavaScript },
    { id: 4, nome: 'Coletânea Front-End', src: ColetaneaFrontEnd },
    { id: 5, nome: 'Guia Front-End', src: GuiaFrontEnd },
    { id: 6, nome: 'HTML5 e CSS3', src: HTML5eCSS3 },
    { id: 7, nome: 'JavaScript Assertivo', src: JavaScriptAssertivo },
    { id: 8, nome: 'Liderança em Design', src: LiderancaEmDesign },
    { id: 9, nome: 'Progressive Web Apps', src: ProgressiveWebApps },
    { id: 10, nome: 'Sass', src: Sass },
    { id: 11, nome: 'Turbine seu CSS', src: TurbineSeuCSS },
];

const Pesquisa = () => {
    const [livrosCompletos, setLivrosCompletos] = useState([]);

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json');
                const novosLivros = await response.json();

                
                const livrosMesclados = novosLivros.map(novoLivro => {
                    const livroAtual = livros.find(livro => livro.id === novoLivro.id);
                    return {
                        ...novoLivro,
                        imagem: livroAtual ? livroAtual.src : novoLivro.imagem,
                    };
                });

                setLivrosCompletos(livrosMesclados);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        };

        fetchLivros();
    }, []);

    return (
        <div>
            {livrosCompletos.map(livro => (
                <div key={livro.id}>
                    <img src={livro.imagem} alt={livro.titulo} />
                    <h2>{livro.titulo}</h2>
                    <p>{livro.resumo}</p>
                </div>
            ))}
        </div>
    );
};

export default Pesquisa;
