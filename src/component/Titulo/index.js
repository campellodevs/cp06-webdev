import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: black; 
    color: ${props => props.cor || 'purple'}; 
    font-size: ${props => props.tamanhoFonte || '24px'}; 
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
   
`;


export const Container = styled.div`
    background-color: #1a1a1a;
    color: white; 
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Texto = styled.p`
    color: purple;
    font-size: 18px;
    text-align: center;
    margin: 20px 0;
`;
