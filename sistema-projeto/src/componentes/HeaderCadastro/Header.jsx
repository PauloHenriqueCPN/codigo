import { Link } from "react-router-dom";
import Horario from "../Hora/Horario";
import { MinhaHora } from "../Hora/Style";
import { MeuHeader, TituloHeader, List, ListItem} from "./Style";




const Header = () => (
    <>
    
    <MeuHeader> 
            <TituloHeader>Seja bem-vindo, <span style={{ color: '#C7D3E1' }}>usuário</span>!</TituloHeader> 
    <MinhaHora>
    <Horario/>
    </MinhaHora>
    <List>
    <Link to="/abertura">
    <ListItem>Abertura</ListItem>
    </Link>
    <Link to="/cadastro">
    <ListItem>Cadastro</ListItem>
    </Link>
    <Link to="/chamado">
    <ListItem>Chamados</ListItem>
    </Link>
    <Link to="/dashboard">
    <ListItem>Dashboard</ListItem>
    </Link>
    <Link to="/exclusao">
    <ListItem>Exclusão</ListItem>
    </Link>
    </List>
    </MeuHeader>
    </>
)
export default Header;