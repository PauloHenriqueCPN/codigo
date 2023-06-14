import { Link } from "react-router-dom";
import { MeuNav } from "./Style";

const Opcoes = () => (
    <MeuNav>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
    </MeuNav>
);

export default Opcoes;