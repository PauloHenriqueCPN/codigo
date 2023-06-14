import styled from "styled-components";
import { smallDevices, tabletSize } from "../../utils";

const MeuBox = styled.div`
  color: #315686;
  font-size: 20px;
  top: -20px;
  box-align:"center";
  align-items: right;
  justify-content: right;
  height: 400px;
  border: 1px solid #315686;
  border-radius: 30px;
  background-color: white;
  padding: 20px;
  margin: 10% auto;
  display: block;   
  width:400px;
  text-align:center;
  position:relative;
  @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
        padding: 14px 16px;
        height: 380px;
        weight: 200px;
        margin-top: 190px;
    }
    @media screen and (min-width: ${tabletSize}){
        flex-direction: row;
    }
`;

const Imagem = styled.img`
    margin-top: -60px;
    margin-bottom: -10px;
    height: 31px;
    width:30px;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
        height: 30px;
        weight: 400px;
    }
`;
    

const NavDiv = styled.div`
    position: relative;
    text-align: center;
    top: -8%;
    color: #516F95;
    left: 0.15%;
    font-size: 30px;
    height: 70px;
    margin: -5.3%;
    width:442px;
    background-color: #315686;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
        width: 433.9px;
        margin-left: -17.8px;
    }
`;

const FootDiv = styled.div`
    position: relative;
    text-align: center;
    top: 23%;
    color: white;
    right: -0.3px;
    height: 70px;
    margin: -5.3%;
    width:442px;
    background-color: #315686;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    left: 0.15%;
    margin: -5.3%;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
        width: 433.9px;
        margin-left: -17.8px;
    }

`;

const BoasVindas = styled.p`
    text-align: center;
    font-size: 30px;
    position:relative; 
    top:15px; 
    height:10%;
    left:0px; 
    margin-left:0px; 
    margin-right:0px; 
    color: white;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
    }
`;

const Botao = styled.button`
    background-color: #9DB0C7;
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;  
    width: 35%;
    height: 50%;
    font-size: 16px; 
    margin-top:10px;    
    font-weight: bold;
    color: #315686;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
    }
`


const InfoLogin = styled.p`
    font-style: italic;
    font-size: 13px;
    margin-top: 2px;
    font-weight: bold;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
    }

`

const LoginID = styled.input`
    margin-top: 36px;
    margin-left: 30px;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
    }

`

const Senha = styled.input`
    margin-top: 100px;
    margin-left: 30px;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    @media screen and (min-width: ${smallDevices}){
        flex-direction: row;
    }

`


export { MeuBox, NavDiv, FootDiv, BoasVindas, InfoLogin, Botao, Senha, LoginID, Imagem};


