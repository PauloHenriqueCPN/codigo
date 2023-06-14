import styled from "styled-components";
import {bigDevices, desktopSize, tabletSize} from '../../utils';


const Boxexclusao = styled.div`
  color: #315686;
  font-size: 20px;
  top: -50px;
  box-align:"center";
  align-items: right;
  justify-content: right;
  height: px;
  border: 1px solid white;
  border-radius: 30px;
  background-color: white;  
  padding: 20px;
  margin: 10% auto;
  display: block;
  width:400px;
  text-align:center;
  border: 1px solid #315686;
@media screen and (min-width: ${tabletSize}){
  color: #315686;
  font-size: 20px;
  top: -50px;
  box-align:"center";
  align-items: right;
  justify-content: right;
  height: 600px;
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
    margin: 8% 20% auto;
}

@media screen and (min-width: ${bigDevices}){
    margin: 8% 33% auto;
    
    }
`;

const BoxUpper = styled.div`
    position: relative;
    text-align: center;
    top: 0px;
    color: white;
    right: 0px;
    font-size: 30px;
    height: 58px;
    margin: -5.3%;
    width:440px;
    background-color: #315686;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #315686;
    @media screen and (min-width: ${tabletSize}){
    position: relative;
    text-align: center;
    top: -30px;
    color: white;
    right: -15px;
    font-size: 30px;
    height: 80px;
    margin: -5.3%;
    width:741px;
    background-color: #315686;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #315686;
    }
    @media screen and (min-width: ${desktopSize}){
        width: 740px;
        margin: -5.1%;
    }
`; 

const Introducao = styled.div`
    text-align: center;
    font-size: 15px;
    position:relative; 
    top:20px; 
    height:10%;
    left:0px; 
    margin-left:0px; 
    margin-right:0px;
    font-weight: bold; 
    @media screen and (min-width: ${tabletSize}){
    text-align: center;
    font-size: 25px;
    position:relative; 
    top:14px; 
    height:10%;
    left:0px; 
    margin-left:0px; 
    margin-right:0px;
    font-weight: bold; 
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
    margin-top: 45px;
    margin-left: 55%;
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
    margin-left: 105%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 450px;
    }
`;

const DivText = styled.div`
    text-align: left;
    font-size: 45px;
    position: relative;
    top: 10px; 
    height: 12%;
    left: 0px;
    margin-left: -90px;
    margin-right: 0px;
    margin-top: 30px;
    color: white;
    width: 200px;

`;

const Text = styled.div`
    text-align: left;
    font-size: 12px;
    position: relative;
    top: 20px;
    height: 10%;
    left: 0px;
    margin-left: 55%;
    margin-right: 0px;
    margin-top: 5%;
    font-weight: bold;
    color: #315686;
    width: 300px;
    @media screen and (min-width: ${tabletSize}){
        text-align: left;
    font-size: 15px;
    position: relative;
    top: 20px;
    height: 10%;
    left: 0px;
    margin-left: 105%;
    margin-right: 0px;
    margin-top: 10px;
    font-weight: bold;
    color: #315686;
    width: 300px;
    }

`;

const Corporativo = styled.input`
    margin-top: 45px;
    margin-left: 55%;
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
    margin-left: 105%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 450px;
    }
`;

const Departamento = styled.input`
    margin-top: 45px;
    margin-left: 105%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 450px;
`;

const Senha = styled.input`
    margin-top: 45px;
    margin-left: 55%;
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
    margin-left: 105%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 450px;
    }
`;

const Confirmacao = styled.input`
     margin-top: 45px;
    margin-left: 55%;
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
    margin-left: 105%;
    background-color: #f2f2f2;
    font-size: 15px;
    color: #141414;
    border: none;
    border-radius: 0;
    border-bottom: 2px #315686 solid;
    padding: 10px;
    margin-bottom: 10px;
    width: 450px;
    }
`;






export {Boxexclusao, BoxUpper, Introducao, BotaoE, BotaoR, UsuarioID, DivText, Text, Corporativo, Departamento, Senha, Confirmacao}