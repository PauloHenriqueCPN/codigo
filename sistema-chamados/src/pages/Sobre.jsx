import { Link } from 'react-router-dom';
import Opcoes from '../components/Opcoes/Opcoes';
import Cartao from '../components/Cartao/Cartao';

const Sobre = () => (
    <>
    <Opcoes />
    <h1>Sobre</h1>
    <p>Meu novo teste</p>
    <Cartao 
        simb={"O"}
        data={"28/02/1994"}/>
    <Cartao 
        simb={"L"}
        data={"30/01/2002"}/>
    <Cartao 
        simb={"M"}
        data={"05/03/1995"}/>
    </>
);

export default Sobre;