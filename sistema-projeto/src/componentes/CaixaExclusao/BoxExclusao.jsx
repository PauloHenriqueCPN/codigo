
import { BotaoE, BotaoR, Boxexclusao, BoxUpper, Confirmacao, Corporativo, DivText, Introducao, Senha, Text, UsuarioID } from "./Style";


const BoxExclusao = () => (
    <>
    <Boxexclusao>
        <BoxUpper>
            <Introducao>Área de exclusão de usuários do sistema</Introducao>
        </BoxUpper>
        <DivText>
            <Text>Nome do usuário:</Text><UsuarioID type="text" name="usuario" ></UsuarioID>
        </DivText>
        <DivText>
            <Text>E-mail corporativo:</Text><Corporativo type="email" name="coorporativo" ></Corporativo>
        </DivText>
        <DivText>
            <Text>Senha:</Text><Senha type="password" name="password" ></Senha>
        </DivText>
        <DivText>
            <Text>Confirmação da senha:</Text><Confirmacao type="password" name="confirm" ></Confirmacao>
        </DivText>
        <BotaoR>Redefinir</BotaoR>
        <BotaoE>Enviar</BotaoE>
    </Boxexclusao>
    </>
)

export default BoxExclusao;