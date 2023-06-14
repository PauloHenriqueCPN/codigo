import styled from "styled-components";
import {tabletSize, desktopSize, bigDevices} from '../../utils'

const MeuHeader = styled.header`
    margin-top:0;
    background-color: #315686;
    text-align: left;
    color: #E2E9F1;
    left: 0;
    height: 50px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    display: block;
    padding:5px;  
    justify-content: center;
  @media screen and (min-width: ${tabletSize}){
    margin-top:0;
    background-color: #315686;
    text-align: left;
    color: #E2E9F1;
    left: 0;
    height: 70px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    display: block;
    padding:5px;  
  }
  @media screen and (min-width: ${desktopSize}){
    margin-top:0;
    background-color: #315686;
    text-align: left;
    color: #E2E9F1;
    left: 0;
    right: 0;
    height: 80px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    display: block;
    padding:5px;  
  }
  @media screen and (min-width: ${bigDevices}){
    margin-top:0;
    background-color: #315686;
    color: #E2E9F1;
    right: 0;
    height: 100px;
    width: 100%;
    overflow-y: hidden;
    overflow-x: hidden;
    display: block;
  }
  
`;

const TituloHeader = styled.p`
  font-style: normal;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-top:-85px;
  text-align: center;
  margin-left: 0;
  transform: translateY(100px);
  @media screen and (min-width: ${tabletSize}){
  font-style: normal;
  font-size: 30px;
  font-weight: bold;
  color: white;
  margin-top:-85px;
  margin-left:0;
  text-align: center;
  transform: translateY(100px);
  }
  @media screen and (min-width: ${desktopSize}){
    font-style: normal;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-top:-80px;
    margin-left:100px;
    text-align: center;
    transform: translateY(100px);
  } 
  @media screen and (min-width: ${bigDevices}){  
    font-style: normal;
    font-size: 30px;
    font-weight: bold;
    color: white;
    margin-top:-70px;
    margin-left:100px;
    text-align: center;
    transform: translateY(100px);
  }
  
`


const List = styled.ul`
  font-size: 11px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 33px auto;
  padding: 0;

  @media screen and (min-width: ${tabletSize}){   
    font-size: 11px;
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin: 50px auto;
    padding: 0;
  }
  @media screen and (min-width: ${desktopSize}){
    visibility: hidden;
  }
`;

const ListItem = styled.li`
  margin: 0 10px;
  color: white;
`;



export { MeuHeader,TituloHeader, List, ListItem};