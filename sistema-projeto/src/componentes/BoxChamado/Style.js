import styled from "styled-components";
import { bigDevices, desktopSize, tabletSize } from "../../utils";

const BoxChamados = styled.div`
  font-size: 20px;
  top: -50px;
  box-align:"center";
  align-items: right;
  justify-content: right;
  height: 640px;
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
    margin-left: 20%;
  }
  @media screen and (min-width: ${bigDevices}){
    margin-left: 33%;
    margin-top: 8%;
  }
`;

const Rolagem = styled.div`
  height: 570px; 
  overflow: auto;
`;

const BoxUpper = styled.div`
    position: relative;
    text-align: center;
    top: -20px;
    color: white;
    font-size: 30px;
    height: 60px;
    margin: -1px 0 0 -21px;
    width:540px;
    background-color: #315686;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #315686;
    @media screen and (min-width: ${tabletSize}){
    position: relative;
    text-align: center;
    top: -30px;
    color: white;
    right: -16.1px;
    font-size: 30px;
    height: 80px;
    margin: -5.3%;
    width:741px;
    background-color: #315686;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border: 1px solid #315686;
    }
`; 

const Introducao = styled.div`
    text-align: center;
    font-size: 15px;
    position:relative; 
    top:35%; 
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

`;






export {BoxChamados, BoxUpper, Introducao, DivText, Text, Rolagem}