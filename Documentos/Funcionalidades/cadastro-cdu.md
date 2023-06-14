# Casos de uso - Cadastro de usuários

#### __Título__: Cadastro no sistema de chamados;

#### __Descrição__: 
Caso de uso para definir a sequência de ações para a realização bem-sucedida do cadastro dos usuários, além dos eventos que devem ocorrer, caso haja possível erro na tentativa de cadastro. Essa funcionalidade é exclusiva aos funcionários do departamento de tecnologia;

#### __Atores primários__: 

Usuário do departamento de tecnologia;

#### __Pré-requisitos__: 

O usuário deve ser um funcionário do departamento de tecnologia da empresa e ter uma conta válida no sistema;

O funcionário do departamento de tecnologia deve ter feito _login_ no sistema;

O usuário a ser cadastrado deve ser um funcionário da empresa; 

#### __Pós-requisitos__:

O preenchimento do cadastro é finalizado com sucesso e uma nova conta é registrada no sistema;

O novo usuário consegue acessar sua conta com _e-mail_ corporativa e senha;

#### __Fluxo principal__:

O funcionário do departamento de tecnologia, ao acessar o sistema, deve acessar a área de cadastro de usuários;

O sistema exibirá campos com informações relativas ao cadastro, como nome, _e-mail_ corporativo, senha e departamento com permissões específicas;

O funcionário do departamento de tecnologia preencherá esses campos com informações do novo usuário a ser cadastrado;

O sistema verificará se todos os campos foram preenchidos de forma adequada;

Com todas as informações inseridas sendo válidas pelo funcionário do departamento de tecnologia, o sistema cadastrará o usuário com seu perfil e adicionará esse novo funcionário com senha, nome, departamento com permissões especifícas e _e-mail_ corporativo;

#### __Fluxo alternativo__:
Se o funcionário do departamento de tecnologia tentar criar uma conta com um _e-mail_ já utilizado, o sistema mostrará uma mensagem de erro e pedirá um novo _e-mail_ a ser inserido pelo funcionário. Assim, o sistema retornará ao campo inicial de cadastro;

Se o funcionário do departamento não inserir informações válidas ou completas, o sistema mostrará uma mensagem de erro e solicitará que o funcionário reescreva os dados. Desse modo, o sistema retornará ao campo inicial de cadastro;