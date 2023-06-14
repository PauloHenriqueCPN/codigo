import styled from "styled-components";
import { tabletSize, desktopSize, bigDevices } from "../../utils";

const Box_cadastro = styled.div`
  color: #315686;
  font-size: 20px;
  top: -50px;
  align-items: center;
  justify-content: center;
  height: 550px;
  border: 1px solid white;
  border-radius: 30px;
  background-color: white;
  padding: 20px;
  margin: 10% auto;
  width: 400px;
  text-align: center;
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
  width:500px;
  text-align:center;
  border: 1px solid #315686;
}
@media screen and (min-width: ${desktopSize}){
    margin: 4% 30% auto;
}

@media screen and (min-width: ${bigDevices}){
    margin: 4% 38% auto;
}



`;

const BoxUpper = styled.div`
    text-align: left;
    color: #516F95;
    margin: -21px 0 0 -21px;
    font-weight: bolder;
    height: 60px;
    width: 442px;
    background-color: #315686;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    @media screen and (min-width: ${tabletSize}){
    text-align: center;
    top: -25px;
    color: #516F95;
    right: -6px;
    font-size: 30px;
    font-weight: bolder;
    height: 80px;
    margin: -4.2% -21px;
    width:542px;
    background-color: #315686;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    }  
`; 

const Introducao = styled.div`
    text-align: center;
    font-size: 15px;
    top:14px; 
    height:10%;
    left:0px; 
    padding: 20px;
    margin-left:0px; 
    margin-right:0px;
    color: white;
    @media screen and (min-width: ${tabletSize}){
    font-size: 25px;
    }
`;

const BotaoE= styled.button`
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
    margin-top:-10px;
    margin-left:5px;
@media screen and (min-width: ${tabletSize}){
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    font-weight: bold;
    width: 20%;
    height: 40px;
    font-size: 16px;
    background-color: #9DB0C7;
    color: #315686;
    margin-top:70px;
    margin-left:10px;
}
`;

const BotaoR = styled.button`
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
    margin-top:70px;
    margin-right: 10px;
@media screen and (min-width: ${tabletSize}){
    border-top-left-radius: 19px;
    border-top-right-radius: 19px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    font-weight: bold;
    width: 25%;
    height: 40px;
    font-size: 16px;
    background-color: #9DB0C7;
    color: #315686;
    margin-top:70px;
    margin-right: 10px
}
`;

const UsuarioID = styled.input`
    margin-top: 10%;
    margin-left: 10%;
    background-color: #f2f2f2;
    font-size: 10px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
@media screen and (min-width: ${tabletSize}){
    margin-top: 45px;
    margin-left: 50%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
}
`;

const DivText = styled.div`
    text-align: left;
    font-size: 20px;
    top: 10px; 
    height: 10%;
    left: 0px;
    margin-left: 0px;
    margin-right:0px;
    margin-top: 30px;
    color: white;
    width: 200px;
@media screen and (min-width: ${tabletSize}){
    text-align: left;
    font-size: 20px;
    top: 10px; 
    height: 10%;
    left: 0px;
    margin-left: 0px;
    margin-right:0px;
    margin-top: 30px;
    color: white;
    width: 200px;
}

`;

const Text = styled.div`
    text-align: left;
    font-size: 12px;
    top: 20px;
    height: 10%;
    left: 0px;
    margin-left: 10%;
    margin-right: -100px;
    margin-top: 10%;
    font-weight: bold;
    color: #315686;

@media screen and (min-width: ${tabletSize}){
    text-align: left;
    font-size: 15px;
    top: 20px;
    height: 10%;
    left: 0px;
    margin-left: 100px;
    margin-right: -100px;
    margin-top: 10px;
    font-weight: bold;
    color: #315686;
}
`;

const Corporativo = styled.input`
    margin-top: 10%;
    margin-left: 10%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
@media screen and (min-width: ${tabletSize}){
    margin-top: 45px;
    margin-left: 50%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
}

`;

const Departamento = styled.input`
    margin-left: 50%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    padding: 10px;
    margin-bottom: 10px;
    width: 100px;

@media screen and (min-width: ${tabletSize}){
    margin-top: 45px;
    margin-left: 50%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
}
`;

const Senha = styled.input`
    margin-top: 10%;
    margin-left: 10%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;

@media screen and (min-width: ${tabletSize}){
    margin-top: 45px;
    margin-left: 50%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
    }
`;

const Confirmacao = styled.input`
    margin-top: 10%;
    margin-left: 10%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;

@media screen and (min-width: ${tabletSize}){
    margin-top: 45px;
    margin-left: 50%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
}
`;


const Selecao = styled.select`
    width: 70%;
    height:35px;
    background: white;
    color: #141414;
    padding-left: 5px;
    font-size: 12px;
    border: solid 1px;
    margin-left: 10%;
    margin-top: 30px;
@media screen and (min-width: ${tabletSize}){
    width: 70%;
    height:35px;
    background: white;
    color: #141414;
    padding-left: 5px;
    font-size: 14px;
    border: solid 1px;
    margin-left: 100px;
    margin-top: 30px;
}
`





export {Box_cadastro, BoxUpper, Introducao, BotaoE, BotaoR, UsuarioID, DivText, Text, Corporativo, Departamento, Senha, Confirmacao, Selecao}