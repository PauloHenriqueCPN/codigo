import styled from 'styled-components';
import { desktopSize, tabletSize, bigDevices } from '../../utils';

const MinhaHora = styled.div`
  font-size: 10px;
  font-weight: bold;
  color: #E2E9F1;
  align-items: flex-start;
  justify-content: flex-start;
  height: 10%;
  width: 100%;
  text-align: center;
  margin-left: 0;
  margin-top: 60px;
  @media screen and (min-width: ${tabletSize}){
    font-size: 12px;
  font-weight: bold;
  color: #E2E9F1;
  align-items: center;
  justify-content: center;
  height: 10%;
  text-align: center;
  margin-left: %;
  margin-top: 45px;
  }
  @media screen and (min-width: ${desktopSize}){
  font-size: 12px;
  font-weight: bold;
  color: #E2E9F1;
  align-items: center;
  justify-content: center;
  height: 10%;
  text-align: center;
  margin-left: 25px;
  margin-top: 45px;
  }
  @media screen and (min-width: ${bigDevices}){
    font-size: 12px;
    font-weight: bold;
    color: #E2E9F1;
    align-items: center;
    justify-content: center;
    height: 10%;
    text-align: center;
    margin-left: 25px;
    margin-top: 45px;
  }
    
`;

export { MinhaHora };