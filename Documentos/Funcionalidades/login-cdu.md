# Casos de uso - Login de usuários

__Título__: Login no sistema de chamados

#### __Descrição__: 

Caso de uso para definir a sequência de ações para a realização bem-sucedida do _login_ do usuário, além dos eventos que devem ocorrer, caso haja possível erro na tentativa de autenticação;

#### __Atores primários__: 

Usuário (funcionário da empresa);

#### __Pré-requisitos__: 

O usuário deve ser um funcionário da empresa e ter uma conta válida no sistema - essa conta deve ser criada pelo departamento de tecnologia;

O usuário deve estar conectado a internet e estar no endereço do _site_. 

#### __Pós-requisitos__:

O usuário, após ter a tentativa de _login_ válida, consegue ter acesso ao sistema;

Ao entrar no sistema, é levado a seu perfil em que contém informações exclusivas relacionadas ao seu departamento e funcionalidades específicas;


#### __Fluxo principal__:

O usuário entra no endereço do site através de seu _browser_;

O sistema terá uma página de _login_ com campos para _e-mail_ corporativo e senha;

O usuário insere seu _e-mail_ corporativo e senha;

O sistema verifica as credenciais inseridas por usuário da empresa;

O sistema permitirá que o usuário tenha acesso ao seu perfil, uma vez que suas credenciais estejam válidas com o que foi registrado no momento do cadastro;

O usuário é enviado ao seu perfil e terá acesso às informações relacionados ao seu departamento e demais informações da empresa, após ser autorizado;

#### __Fluxo alternativo__:

O sistema não autorizará a tentativa de _login_, retornando a página para autenticação e inserindo a mensagem de erro para o caso específico. Então, o usuário poderá repetir a tentativa de autenticação;

Em caso de esquecimento de senha, haverá um botão para que o usuário possa inserir uma nova senha e, então, retornará a página para tentativa do fluxo principal;

Caso não haja uma conta válida, o sistema exibirá uma mensagem informando que não há uma conta utilizada com o _e-mail_ corporativo inserido e retornará a página de _login_. 