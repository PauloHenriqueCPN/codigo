import { MeuFooter, Texto } from "./Style";
import { Ancora } from "./Style";

const Footer = () => (
    <MeuFooter>
        <Texto>Microméros - Soluções tecnológicas para indústrias</Texto>
        <Texto>Conheça nosso site: 
            <Ancora href="https://www.micromeros.com.br/"> micromeros.com.br</Ancora> - TODOS OS DIREITOS RESERVADOS.</Texto>
    </MeuFooter>
);

export default Footer;