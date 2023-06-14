import { Container, Descricao, Momento, Simbolo } from "./style";

const Cartao = (props) => (
    <Container>
        <Simbolo>{ props.simb }</Simbolo>
        <Descricao>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nam dignissimos, 
        ea accusantium eveniet eos delectus dolor ut corporis perferendis vel cumque, aperiam tempora sint maxime. 
        Eos corporis autem dignissimos.
        </Descricao>
        <Momento>{ props.data }</Momento>
    </Container>


);

export default Cartao;