import { InfoSideBar, MeuSideBar , SideB } from "./Style";
import { ImagemMicro } from "./Style";
import imagem from './imagem.png'
import {Link } from "react-router-dom";
import { FiLayout } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => (
    <MeuSideBar>
    <Link to="/">
    <ImagemMicro src={imagem}/>
    </Link>
    <SideB>
    <Link to="/abertura">
    <InfoSideBar> Abertura<br /><FiEdit /></InfoSideBar>
    </Link>
    <Link to="/cadastro">
    <InfoSideBar> Cadastro <br /><FiUserPlus /></InfoSideBar>
    </Link>
    <Link to="/dashboard">
    <InfoSideBar> Dashboards<br /><FiLayout /></InfoSideBar>
    </Link>
    <Link to="/chamado">
    <InfoSideBar> Chamados <br /><FiMessageSquare /></InfoSideBar>
    </Link>
    <Link to="/exclusao">
    <InfoSideBar> Exclusão<br /><FiUserX /></InfoSideBar>
    </Link>
    </SideB>
    </MeuSideBar>
);
export default SideBar;