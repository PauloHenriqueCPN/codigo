import { BotaoE, BotaoR, BoxUpper, Box_cadastro, Confirmacao, Corporativo, DivText, Introducao, Senha, Text, UsuarioID, Selecao } from "./Style";



const BoxCadastro = () => (
    <>
    <Box_cadastro>
        <BoxUpper>
            <Introducao>Área de cadastro de novos usuários</Introducao>
        </BoxUpper>
        <DivText>
            <Text>Nome do usuário:</Text><UsuarioID type="text" name="usuario" ></UsuarioID>
        </DivText>
        <DivText>
            <Text>E-mail corporativo:</Text><Corporativo type="email" name="coorporativo" ></Corporativo>
        </DivText>
        <DivText>
            <Text>Departamento:</Text>
            <Selecao>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Comercial">Comercial</option>
            <option value="Operacional">Operacional</option>
            </Selecao>  
        </DivText>
        <DivText>
            <Text>Senha:</Text><Senha type="password" name="password" ></Senha>
        </DivText>
        <DivText>
            <Text>Confirmação da senha:</Text><Confirmacao type="password" name="confirm" ></Confirmacao>
        </DivText>
        <BotaoR>Redefinir</BotaoR>
        <BotaoE>Enviar</BotaoE>
    </Box_cadastro>
    </>

)

export default BoxCadastro;