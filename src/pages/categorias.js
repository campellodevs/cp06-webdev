import React from 'react';
import Header from '../component/Header';
import AppContainer from '../component/AppContainer';
import styled from 'styled-components';

const CategoriasContainer = styled.div`
  padding: 60px;
  text-align: center;
  background: #3E0067; 
  color: #fff;
`;

const IntroText = styled.p`
  font-size: 1.5em;
  margin-bottom: 30px;
  max-width: 600px; 
  margin: 0 auto; 
  line-height: 1.6; 
`;

const CategoriasList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const CategoriaItem = styled.li`
  background: #ffffff; 
  margin: 20px;
  padding: 22px 40px; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s, box-shadow 0.3s;
  color:black;

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    background: #B59DF366;
  }
`;

const CategoriaTitle = styled.h1`
  font-size: 2.5em; 
  color: #FFFFFF; 
  margin-bottom: 20px; 
`;

const Categorias = () => {
  const categorias = [
    { id: 1, nome: 'Livros' },
    { id: 2, nome: 'Ebooks' },
    { id: 3, nome: 'Mentorias' },
    { id: 4, nome: 'Revistas' },
    { id: 5, nome: 'Quadrinhos' },
    { id: 6, nome: 'Papelaria' },
  ];

  return (
    <AppContainer>
      <Header />
      <CategoriasContainer>
        <CategoriaTitle>CATEGORIAS</CategoriaTitle>
        <IntroText>Conheça agora nossas categorias e descubra qual sua paixão no mundo dos livros!</IntroText>
        <CategoriasList>
          {categorias.map((categoria) => (
            <CategoriaItem key={categoria.id}>
              {categoria.nome}
            </CategoriaItem>
          ))}
        </CategoriasList>
      </CategoriasContainer>
    </AppContainer>
  );
};

export default Categorias;
