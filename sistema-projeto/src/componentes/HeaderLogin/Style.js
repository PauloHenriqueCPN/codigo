import styled from "styled-components";
import {tabletSize, desktopSize, bigDevices } from "../../utils";

const MeuHeader = styled.header`
  visibility: hidden;
  @media screen and (min-width: ${tabletSize}){
      top: 0px;
      background-color: white;
      text-align: left;
      position: fixed;
      left: 0;
      height: 1%;
      width: 100%;
      display: block;
      padding:35px;  
      margin-bottom:20px;
      flex-direction: row;
      visibility: visible;
    }
    @media screen and (min-width: ${desktopSize}){
      top: 0px;
      background-color: white;
      text-align: left;
      position: fixed;
      left: 0;
      height: 1%;
      width: 100%;
      display: block;
      padding:35px;  
      margin-bottom:20px;
      flex-direction: row;
    }

    @media screen and (min-width: ${bigDevices}){
      top: 0px;
      background-color: white;
      text-align: left;
      position: fixed;
      left: 0;
      height: 1%;
      width: 100%;
      display: block;
      padding:35px;  
      margin-bottom:20px;
      flex-direction: row;
    }

`;

const ImagemCab = styled.img`
    visibility: visible;
    width: 40%;
    margin-left: 30%; 
    margin-top: 10%;
    @media screen and (min-width: ${tabletSize}){
      display: block;
      width: 15%;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 2%;
      bottom: 0;
    }

    @media screen and (min-width: ${desktopSize}){
      display: block;
      width: 15%;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 2%;
      bottom: 0;
    }

    @media screen and (min-width: ${bigDevices}){
      display: block;
      width: 13%;
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 2%;
      bottom: 0;
    }
   
`;

export { MeuHeader, ImagemCab };