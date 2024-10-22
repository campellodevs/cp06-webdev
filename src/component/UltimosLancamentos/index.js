import React, { useEffect, useState } from 'react';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import styled from 'styled-components';
import imagemLivro from '../../imgs/Angula.png';

const UltimosLancamentosContainer = styled.section`
    background-color: #150131;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; 
    margin: 10px;
`;

const Livro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    cursor: pointer;

    p {
        width: 150px;
        text-align: center; 
        color: #FFF; 
        margin: 5px 0;
    }

    img {
        width: 100px; 
        padding: 10px;
        border-radius: 5px; 
    }
`;

function UltimosLancamentos() {
    const [livros, setLivros] = useState([]);

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

    return (
        <UltimosLancamentosContainer>
            <Titulo cor="whitesmoke" tamanhoFonte="36px">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <Livro key={livro.id}>
                        <img src={livro.imagem} alt={livro.titulo} />
                        <p>{livro.titulo}</p>
                        <p>{livro.resumo}</p>
                    </Livro>
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;
