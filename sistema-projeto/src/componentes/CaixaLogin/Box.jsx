import { ImagemCabecalho, NavDiv } from "./Style";
import { MeuBox } from "./Style";
import { FootDiv } from "./Style";
import { BoasVindas } from "./Style";
import { Botao } from "./Style";
import { LoginID } from "./Style";
import { Senha } from "./Style";
import { Imagem } from "./Style";
import message from './message.png';
import padlock from './padlock.png';
import {Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";




const Box = () => (
   <>
   <MeuBox>
    <NavDiv>
    <BoasVindas>Bem-vindo a Microméros! <FiLogIn /></BoasVindas>
    </NavDiv>
    <Imagem src={message} />
    <LoginID type="email" name="email" placeholder="Login ID" /><br/>
    <Imagem src={padlock} />
    <Senha type="password" name="senha" placeholder="Senha"/>
    <FootDiv>
    <Link to="/abertura">
    <Botao>Entrar</Botao>
    </Link>
    </FootDiv>
    </MeuBox>
    </>
);


export default Box;