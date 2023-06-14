import styled from "styled-components";
import {bigDevices, desktopSize, tabletSize} from '../../utils'

const MeuFooter = styled.footer`
  visibility: hidden;
  @media screen and (min-width: ${tabletSize}){
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #315686;
    color: white;
    text-align: center;
    visibility: visible;
    }
    @media screen and (min-width: ${desktopSize}){
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #315686;
    color: white;
    text-align: center;
    }
  @media screen and (min-width: ${bigDevices}){
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #315686;
    color: white;
    text-align: center;
    }
`;

const Ancora = styled.a`
  @media screen and (min-width: ${tabletSize}){
      color: #f2f2f2;
      font-weight: bolder;
      background-color: transparent;
    }
    @media screen and (min-width: ${desktopSize}){
      color: #f2f2f2;
      font-weight: bolder;
      background-color: transparent;
    }
    @media screen and (min-width: ${bigDevices}){
      color: #f2f2f2;
      font-weight: bolder;
      background-color: transparent;
    }
`

const Texto = styled.p`
      visibility: hidden;
  @media screen and (min-width: ${tabletSize}){
      color: #f2f2f2;
      font-weight: bolder;
      visibility: visible;
    }
    @media screen and (min-width: ${desktopSize}){
      color: #f2f2f2;
      font-weight: bolder;
      visibility: visible;
    }
    @media screen and (min-width: ${bigDevices}){
      color: #f2f2f2;
      font-weight: bolder;
      visibility: visible;
    }
`




export { MeuFooter, Ancora, Texto } ;