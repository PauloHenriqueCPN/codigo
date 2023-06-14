import styled from "styled-components";
import {bigDevices, desktopSize, tabletSize} from '../../utils';

const MeuSideBar = styled.div`
    background-color: #315686;
    visibility: hidden;
    width: 100px;
    height: 100%;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1;
  @media screen and (min-width: ${tabletSize}){
    background-color: #315686;
    width: 150px;
    height: 100%;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1;
    }
  @media screen and (min-width: ${desktopSize}){
    background-color: #315686;
    width: 175px;
    height: 100%;
    position: fixed; 
    visibility: visible;
    top: 0;
    left: 0;
    z-index: 1;
    }
  @media screen and (min-width: ${bigDevices}){
    background-color: #315686;
    width: 200px;
    height: 100%;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1;
  }  
    
`;

const SideB = styled.div`
  top: 0;
  left: 0;
  width: 90px;
  height: 100%;
  margin-top: 120px;
  margin-left: -15px;
  @media screen and (min-width: ${tabletSize}){
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    margin-top: 150px;
    margin-left: -15px;
    }
  @media screen and (min-width: ${desktopSize}){
    left: 0;
    width: 190px;
    height: 100%;
    margin-top: 150px;
    margin-left: -15px;
  }  
  @media screen and (min-width: ${bigDevices}){
    top: 0;
    left: 0;
    width: 180px;
    height: 100%;
    margin-top: 150px;
    margin-left: 0px;
  }  
  
`


const InfoSideBar = styled.div`
    border-top-left-radius: 19px;
    border-top-right-radius:19px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    font-weight: bold;
    width: 78%;
    height: 50px;
    font-size: 12px;
    padding-top: 20px;
    background-color: #9DB0C7;
    color: #315686;
    margin-top: 40px;
    margin-left: 30px;
    position: relative;
    text-align:center;
  @media screen and (min-width: ${tabletSize}){
    border-top-left-radius: 19px;
    border-top-right-radius:19px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    font-weight: bold;
    padding-top: 15px;
    font-size: 13px;
      
    }
  @media screen and (min-width: ${desktopSize}){
    border-top-left-radius: 19px;
    border-top-right-radius:19px;
    border-bottom-left-radius: 19px;
    border-bottom-right-radius: 19px;
    font-weight: bold;
    font-size: 13.7px;
    padding-top: 15px;
    margin-top: 50px;
    margin-left: 30px;
    position: relative;
    text-align:center;
      
    
  }  
  @media screen and (min-width: ${bigDevices}){
  border-top-left-radius: 19px;
  border-top-right-radius:19px;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  font-weight: bold;
  width: 78%;
  height: 50px;
  font-size: 13px;
  padding-top: 24px;
  background-color: #9DB0C7;
  color: #315686;
  margin-top: 50px;
  margin-left: 30px;
  position: relative;
  text-align:center;
  margin-top: 80px;

  }  

`;



const ImagemMicro = styled.img`
    display:inline;
    margin-top: 20px;
    margin-left: -10px;
    width: 120%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @media screen and (min-width: ${tabletSize}){
      display:inline;
    margin-top: 0px;
    margin-left: 0px;
    width: 115%;
    position: absolute;
    top: 20px;
    left: -10px;
    right: 0;
    bottom: 0;
    }
    @media screen and (min-width: ${desktopSize}){
      display:inline;
    margin-top: 0px;
    margin-left: 0px;
    width: 115%;
    position: absolute;
    top: 20px;
    left: -10px;
    right: 0;
    bottom: 0;
    }
    @media screen and (min-width: ${bigDevices}){
      display:inline;
    margin-top: 0px;
    margin-left: 0px;
    width: 120%;
    position: absolute;
    top: 0;
    left: -10px;
    right: 0;
    bottom: 0;
    }


`;



export { MeuSideBar, InfoSideBar, ImagemMicro, SideB};