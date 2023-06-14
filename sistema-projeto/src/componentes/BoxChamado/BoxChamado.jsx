import { BoxChamados, BoxUpper, Introducao, Rolagem } from "./Style";
import Cartao from "../Cartao/Cartao";
import colaboradores from "../../colaboradores.json";

const BoxChamado = () => (
    <>
     <BoxChamados>
     <BoxUpper>
            <Introducao>Área de chamados inicializados</Introducao>
        </BoxUpper>
        <Rolagem>
        {
        colaboradores.map(
            (ele, ind) => (
               <Cartao
                    key={ind}
                    nome={ele.nome}
                    dpto={ele.departamento}
                    nivel={ele.prioridade}
                    data={ele.data}
                    status={ele.statusTicket}
                    tipo={ele.tipoTicket}
               /> 
            )
        )
    }
    </Rolagem>
     </BoxChamados>
    </>


)

export default BoxChamado