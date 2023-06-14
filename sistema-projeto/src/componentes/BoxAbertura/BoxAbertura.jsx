import { BotaoAbertura, Box_Abertura, Box_Superior, DescricaoID, Div_texto, RedefinirAbertura, Selecao, Texto, Titulo, TituloChamadoID } from "./Style";


const BoxAbertura = () => (
 <>
 
 <Box_Abertura>

    <Box_Superior>
        <Texto>Área de abertura de chamados internos da empresa</Texto>
    </Box_Superior>
    <Div_texto>
        <Titulo>Chamado:</Titulo><TituloChamadoID type="text" name="texto"></TituloChamadoID>
    </Div_texto>
    <Div_texto>
        <Titulo>Nivel de Criticidade:</Titulo>
        <Selecao>
            <option value="alto">Alto</option>
            <option value="medio">Médio</option>
            <option value="baixo">Baixo</option>
        </Selecao>  
    </Div_texto>
    <Div_texto>
        <Titulo>Categoria do chamado:</Titulo>
        <Selecao>
            <option value="duvidas">Dúvidas</option>
            <option value="requsicao">Requisões</option>
            <option value="problema">Problema técnico</option>
        </Selecao>  
    </Div_texto>
    <Div_texto>
        <Titulo>Departamento solicitado para o suporte:</Titulo>
        <Selecao>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Comercial">Comercial</option>
            <option value="Operacional">Operacional</option>
        </Selecao>  
    </Div_texto>
    <Div_texto><Titulo>Descrição:</Titulo><DescricaoID type="textarea" placeholder="Escreva aqui"></DescricaoID></Div_texto>
    <RedefinirAbertura>Redefinir</RedefinirAbertura>
    <BotaoAbertura>Enviar</BotaoAbertura>
 </Box_Abertura>
 </>
  
);



export default BoxAbertura;