import styled from "styled-components";
import {tabletSize, desktopSize, bigDevices } from '../../utils'


const Box_Abertura = styled.div`
    color: #315686;
    font-size: 15px;
    top: -50px;
    box-align:"center";
    align-items: right;
    justify-content: right;
    height: 700px;
    border: 1px solid white;
    border-radius: 30px;
    background-color: white;
    padding: 20px;
    margin: 10% auto;
    display: block;
    width:500px;
    text-align:center;
    border: 1px solid #315686;
  @media screen and (min-width: ${tabletSize}){
    color: #315686;
    font-size: 20px;
    top: -50px;
    box-align:"center";
    align-items: right;
    justify-content: right;
    height: 700px;
    border: 1px solid white;
    border-radius: 30px;
    background-color: white;
    padding: 20px;
    margin: 10% auto;
    display: block;
    width:700px;
    text-align:center;
    border: 1px solid #315686;

  }
  @media screen and (min-width: ${desktopSize}){
    color: #315686;
    font-size: 20px;
    top: -50px;
    box-align:"center";
    align-items: right;
    justify-content: right;
    height: 700px;
    border: 1px solid white;
    border-radius: 30px;
    background-color: white;
    padding: 20px;
    margin: 6% 20% auto;
    display: block;
    width:700px;
    text-align:center;
    border: 1px solid #315686;
  }
  @media screen and (min-width: ${bigDevices}){
    margin: 4% 32% auto;
  } 
`;

const Box_Superior = styled.div`
    background-color:#315686;
    position: relative;
    text-align: center;
    top: -60px;
    color:white;
    right: 21px;
    font-size: 30px;
    height: 50px;
    margin: 5% auto;
    width:532px;
    font-weight: bolder;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding:5px;
  @media screen and (min-width: ${tabletSize}){
    background-color:#315686;
    position: relative;
    text-align: center;
    top: -60px;
    color:white;
    right: 21px;
    font-size: 30px;
    height: 70px;
    margin: 5% auto;
    width:732px;
    font-weight: bolder;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding:5px;
  }
`;


const Texto = styled.div`
    text-align: center;
    font-size: 15px;
    position: relative;
    top: 14px;
    height:10%;
    left:0px; 
    margin-left:0px; 
    margin-right:0px; 
    margin-bottom:30px;
  @media screen and (min-width: ${tabletSize}){
    text-align: center;
    font-size: 25px;
    position: relative;
    top: 14px;
    height:10%;
    left:0px; 
    margin-left:0px; 
    margin-right:0px; 
    margin-bottom:30px;
  }
  `;

const Div_texto = styled.div`
    text-align: left;
    font-size: 30px;
    position: relative;
    top: -50px;
    height:10%;
    align-items: right;
  justify-content: right;
    color: #315686;
    width:50%;
    display:block;
    margin-top:20px;


`;
const TituloChamadoID = styled.input`
margin: 5px;
background-color: #f2f2f2;
font-size: 15px;
color: black;
border: 4px;
border-radius: 0;
border-bottom: 2px #315686 solid;
padding: 5px;
margin-top: -10px;
width: 350px;

`;

const Titulo = styled.p`
font-style: normal;
font-size: 12px;
margin-top: 30px;
font-weight: bold;
color: #315686;
text-align:left;
  @media screen and (min-width: ${tabletSize}){
font-style: normal;
font-size: 14px;
margin-top: 30px;
font-weight: bold;
color: #315686;
text-align:left;
  }
`

const StyledSelectBox = styled.select`
  width: 200px;
  height: 30px;
  margin: 10px 0%;
  padding:10px;
  
`;

const Div_Descricao = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: right;
  margin-top: 30px;
  margin-left: 30px;
  width: 50%;
  float:right;
`;

const DescricaoID = styled.input`

  background-color: #f2f2f2;
  font-size: 15px;
  color: black;
  border: 30px;
  border-radius: 0;
  border-bottom: 2px #315686 solid;
  padding: 40px;
  margin-bottom: 5px;
  width: 100%;
`;

const BotaoAbertura = styled.button`
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  font-weight: bold;
  width: 20%;
  height: 20px;
  font-size: 10px;
  background-color: #9DB0C7;
  color: #315686;
  margin-top: 40px;
  @media screen and (min-width: ${tabletSize}){
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  font-weight: bold;
  width: 25%;
  height: 50px;
  font-size: 16px;
  background-color: #9DB0C7;
  color: #315686;
  margin-top: 40px;
  }
`

const RedefinirAbertura = styled.button`
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  font-weight: bold;
  width: 20%;
  height: 20px;
  font-size: 10px;
  background-color: #9DB0C7;
  color: #315686;
  margin-top: 40px;
  @media screen and (min-width: ${tabletSize}){
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  font-weight: bold;
  width: 25%;
  height: 50px;
  font-size: 16px;
  background-color: #9DB0C7;
  color: #315686;
  margin-top: 40px;
  }
`

const Selecao = styled.select`
    width: 70%;
    height:35px;
    background: white;
    color: #141414;
    padding-left: 5px;
    font-size: 14px;
    border: solid 1px;
    margin-left: 0px;
    margin-top: 0px;
`



export {Box_Abertura, Box_Superior, Texto, TituloChamadoID,Div_texto,StyledSelectBox,Titulo,Div_Descricao,DescricaoID,BotaoAbertura,RedefinirAbertura, Selecao};