# Casos de uso - Abertura de chamado interno

#### __Título__: Abertura de chamado interno no sistema de chamados;

#### __Descrição__: 

Caso de uso para definir a sequência de ações para a realização bem-sucedida de chamado interno da empresa, onde o solicitante deve inserir informações como departamento que deseja suporte, descrição, título, criticidade e categoria do chamado. Caso contrário, eventos que possam impedir a tentativa devem exibir mensagens que explicam o erro;

#### __Atores primários__: 

Usuário (funcionário da empresa);

#### __Pré-requisitos__: 
O usuário deve ser um funcionário da empresa e ter uma conta válida no sistema;

O usuário deve ter feito _login_ no sistema;

#### __Pós-requisitos__:
O usuário consegue enviar com sucesso o formulário de solicitação de abertura de chamado;

Segundo os dados preenchidos, sua solicitação será encaminhado ao departamento indicado, conforme também sua criticidade e agendamento; 

Um _ticket_ será aberto e o usuário será ajudado;


#### __Fluxo principal__:

O usuário, ao acessar o sistema, deve acessar a área de abertura de chamados;

Ao identificar algum problema no sistema, deve abrir um _ticket_;

O sistema exibe um formulário com campos a serem preenchidos como departamento, descrição, título, criticidade e categoria do chamado;

O usuário envia o formulário internamente;

O sistema registra o chamado com suas informações;

O sistema, seguindo sua prioridade e criticidade, define prazo de agendamento dependendo do tipo de incidente que ocorreu;

O responsável pelo suporte deve fazer a orientação e registrar o _status_ como concluído após o fim da ajuda;

O sistema registra como finalizado;


#### __Fluxo alternativo__:
Se o usuário não fornecer informações completas nos campos existentes no formulário, o sistema deverá alertar com uma mensagem de erro pedindo para que sejam reescritos os dados;

Se o usuário preencher com caracteres que não estão conforme o padrão nos campos, o sistema deve mostrar uma mensagem de erro informando o problema e o formulário redefinirá para novo preenchimento.
