import React, { useEffect, useState } from 'react';
import Input from '../Input';
import styled from 'styled-components';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #45046B 35%, #1507DC 165%);
    color: #FFF;
    text-align: center;
    padding: 50px 200px;
    max-width: 800px;
    margin: 0 auto;
    border-radius: 15px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const Titulo = styled.h2`
    color: #000000;
    font-size: 28px;
    margin-bottom: 10px;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 30px;
    color: #D1C4E9;
`;

const ResultadosContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
`;

const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    padding: 10px;
    width: 150px;
    border: 2px solid transparent;
    border-radius: 8px;
    transition: border 0.3s, background-color 0.3s;
    background-color: rgba(255, 255, 255, 0.1);

    p {
        width: 100%;
        color: #FFF;
        text-align: center;
        margin: 5px 0;
        font-size: 14px;
    }

    img {
        width: 80px;
        border-radius: 5px;
    }

    &:hover {
        border: 2px solid #E1BEE7;
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

const Pesquisa = () => {
    const [livros, setLivros] = useState([]);
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    useEffect(() => {
        const fetchLivros = async () => {
            try {
                const response = await fetch('https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json');
                const novosLivros = await response.json();
                setLivros(novosLivros);
            } catch (error) {
                console.error('Erro ao buscar livros:', error);
            }
        };

        fetchLivros();
    }, []);

    const handleSearch = (evento) => {
        const textoDigitado = evento.target.value.toLowerCase();
        if (textoDigitado === '') {
            setLivrosPesquisados([]);
        } else {
            const resultadoPesquisa = livros.filter(livro =>
                livro.titulo.toLowerCase().includes(textoDigitado)
            );
            setLivrosPesquisados(resultadoPesquisa);
        }
    };

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Escreva sua próxima leitura"
                onChange={handleSearch}
            />
            <ResultadosContainer>
                {livrosPesquisados.map(livro => (
                    <Resultado key={livro.id}>
                        <img src={livro.imagem} alt={livro.titulo} />
                        <p>{livro.titulo}</p>
                        <p>{livro.resumo}</p>
                    </Resultado>
                ))}
            </ResultadosContainer>
        </PesquisaContainer>
    );
};

export default Pesquisa;
