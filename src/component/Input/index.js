import styled from "styled-components"

const Input = styled.input`
    order: 1px solid #FFF;
    background: whitesmoke;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: black;
    font-size: 16px;
    margin-bottom: 30px;

    &::placeholder {
        color: grey;
        font-size: 16px;
    }
`

export default Input