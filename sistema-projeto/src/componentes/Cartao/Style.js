import styled from "styled-components";
import { tabletSize } from "../../utils";
const Container = styled.p`
    border-radius: 5px;
    border: solid 3px black ;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    margin: 5px;
    font-size: 14px;
    margin-top: 5%;
    background-color: #315686;
@media screen and (min-width: ${tabletSize}){
    border-radius: 5px;
    border: solid 3px black ;
    display: flex;
    flex-direction: row;
    column-gap: 1em;
    margin: 5px;
    font-size: 14px;
    margin-top: 50px;
    background-color: #315686;
}
`;

const Simbolo = styled.span`
    font-size: 10px;
    margin: 10px;
    color: white;
    font-weight: bolder;
    @media screen and (min-width: ${tabletSize}){
    font-size: 14px;
    margin: 17px;
    color: white;
    font-weight: bolder;
    }
`;

const Descricao = styled.span`
    font-size: 10px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: white;
    height: 1.5em;
    margin: 10px;
    @media screen and (min-width: ${tabletSize}){
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: white;
    height: 1.5em;
    margin: 14px;
    }
`;

const Momento = styled.span`
    overflow: scroll;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    font-size: 10px;
    color: white;
    margin: 10px;
    @media screen and (min-width: ${tabletSize}){
    overflow: hidden;
    font-size: 14px;
    margin: 15px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    color: white
    }
`


export { Container, Simbolo, Descricao, Momento};