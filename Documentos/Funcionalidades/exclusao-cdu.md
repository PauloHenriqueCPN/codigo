# Casos de uso - Exclusão de usuários

__Título__: Exclusão de usuário no sistema de chamados;

#### __Descrição__: 

Caso de uso para definir a sequência de ações para a realização bem-sucedida da exclusão dos usuários, além dos eventos que devem ocorrer, caso haja possível erro na tentativa de exclusão. Essa funcionalidade é exclusiva ao administrador do sistema, membro do departamento de tecnologia;

#### __Atores primários__: 

Administrador do sistema;

#### __Pré-requisitos__: 

O usuário deve ser o administrador do sistema e estar com uma conta válida no sistema;

O administrador deve ter feito _login_ no sistema;

#### __Pós-requisitos__:

O usuário, após ter uma conta excluída pelo administrador do sistema, não deverá ter acesso ao sistema;

Ao tentar entrar no sistema com os dados, deve aparecer uma mensagem de erro indicando que não há conta atribuída ao _e-mail_ inserido;

#### __Fluxo principal__:

O administrador, ao acessar o sistema, deve acessar a página de exclusão, exclusiva para sua função;

O administrador deve preencher o formulário com nome, _e-mail_ corporativo e senha do usuário a ser excluída;

O administrador deve inserir sua senha para confirmar o ato;

O administrador deve confirmar os dados do formulário;

O usuário que teve os dados inseridos para exclusão será, de fato, excluído;


#### __Fluxo alternativo__:

Caso não haja um _e-mail_ atribuído a uma conta não terá como excluir o usuário, o sistema alertará com mensagem de erro e solicitando entrada de dados válidas. Após isso, o formulário terá seus campos vazios novamente para inserir dados;

O sistema deve exibir uma mensagem de erro e informar o funcionário sobre falha na exclusão, caso a senha do administrador não esteja correta para validação. Então, o formulário terá seus campos vazios novamente para inserir os dados.