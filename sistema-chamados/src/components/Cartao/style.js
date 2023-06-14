import styled from "styled-components";

const Container = styled.p`
    border-radius: 5px;
    border: solid 1px black;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    margin: 5px;
`;

const Simbolo = styled.span`
    font-weight: bolder;
    margin: 10px;
`;

const Descricao = styled.span`
    font-style: italic;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 1.5em;
    margin: 10px;
`;

const Momento = styled.span`
    font-family: monospace;
    margin: 14px;
`


export { Container, Simbolo, Descricao, Momento};