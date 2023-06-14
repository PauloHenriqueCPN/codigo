import { Container, Descricao, Momento, Simbolo } from "./Style";

const Cartao = (props) => (
    <Container>
        <Simbolo>{ props.status }</Simbolo>
        <Descricao> {props.nome}</Descricao>
        <Descricao> {props.dpto}</Descricao>
        <Descricao> {props.tipo}</Descricao>
        <Descricao> {props.nivel}</Descricao>
        <Momento>{ props.data }</Momento>
    </Container>


);

export default Cartao;