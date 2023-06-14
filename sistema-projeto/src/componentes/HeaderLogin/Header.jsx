import { MeuHeader } from "./Style";
import { ImagemCab } from "./Style";
import  imagem from "./imagem.png";

const Header = () => (
    <MeuHeader>
    <ImagemCab src={imagem} />
    </MeuHeader>
);

export default Header;