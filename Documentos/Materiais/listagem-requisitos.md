# Requisitos Funcionais e Requisitos Não Funcionais
Ao desenvolver um _software_, é fundamental que o planejamento das estratégias de desenvolvimento seja feito de forma adequada. Uma vez que se trata de soluções que buscam resolver problemas, parte do sucesso do sistema depende da avaliação inicial, visto que, desse modo, os objetivos e ideias do cliente e de quem presta o serviço são alinhados para que as necessidades dos usuários sejam atendidas. Assim, a descrição das especificidades deve conter o que o sistema deve fazer e como isso deve ser feito, isto é, __recursos__, __funcionalidades__ e __limitações__, por exemplo.  No Projeto Front-End, o objetivo principal é desenvolver um sistema de gestão de chamados para a Microméros, _startup_ especializada em produção de tecnologias para o setor industrial, para __gerenciamento__ e __organização__ de chamados da empresa para que haja dados organizados que possam gerar informações para tomada de decisões.

Desse modo, pode-se dividir os requisitos do _software_ em __requisitos funcionais__ e __requisitos não funcionais__.
#### __Requisitos Funcionais__: São requisitos que detalham __o que__ o sistema deve fazer, ou seja, suas funcionalidades e recursos. Além disso, faz parte desse tipo de requisito, o comportamento e condições de como o _software_ deve agir para aplicar essas funcionalidades:
 - RF-1: O sistema deve exibir visualizações de _dashboards_ com informações específicas relacionadas aos chamados, como quantidade e fluxo de chamados para cada departamento, _tickets_ por cliente. Nessas informações mencionadas, devem estar presentes dados como quantidades totais de chamados para cada departamento, quantidades de _tickets_ por funcionário que desejaram, em algum momento, suporte da empresa, além de informações relacionadas aos responsáveis do suporte;
 - RF-2: O sistema, além das informações relacionadas aos chamados, deve exibir, também, _dashboards_ sobre a performance e desempenho da infraestrutura, com números do sistema para o departamento de tecnologia;
 - RF-3: O sistema, para os demais departamentos, como o operacional e comercial, deve exibir informações sobre dados financeiros e informações sobre a performance da empresa;
 - RF-4: O sistema, durante a autenticação, através de _login_, deve redirecionar o usuário para o departamento em que está inserido, isto é, operacional, comercial ou tecnologia. Esse login deve ter _e-mail_ corporativo e senha como medidas de autenticação; 
 - RF-5: O sistema deve garantir que apenas as pessoas que tenham interação com o _software_, isto é, os funcionários da empresa, tenham acesso e possibilidade de abrir os chamados;
 - RF-6: O sistema deve garantir que apenas colaboradores do setor de tecnologia tenham autorização de cadastrar novos usuários. Detalhadamente, ao cadastrar, devem-se ter nome, _e-mail_ corporativo, senha e permissões conforme o departamento inserido como informações de cadastro;
 - RF-7: O sistema deve disponibilizar uma área interna que permita que haja o cadastro de novos usuários aos funcionários do departamento de tecnologia, através de um formulário e que tenham os campos para as informações de cadastro citadas anteriormente;
 - RF-8: O sistema, além de garantir exclusividade aos funcionários do departamento de tecnologia para cadastros, deve permitir que somente o administrador do sistema tenha capacidade de remover usuários quando solicitado por algum departamento na hierarquia, a fim de garantir segurança ao sistema e usuários; 
 - RF-9: O sistema deve permitir que os chamados que forem solicitados pelos usuários cadastrados em busca de suporte devem ter a possibilidade de terem seus _status_ modificados, isto é, troca para aberto, em andamento ou fechado;
 - RF-10: O sistema, além de permitir a troca do _status_ de cada chamado dos usuários, também deve permitir a troca do departamento que está dando o suporte, uma vez que, muitas vezes, o problema é em diferentes áreas, logo a mudança do departamento deve ser possibilitada também;
 - RF-11: O sistema deve guardar logs dos chamados realizados. Esses logs armazenam registros dos processos de eventos que são relevantes para tomadas de decisão;
 - RF-12: O sistema deve armazenar informações de chamados, principalmente sobre o atendido e também quem atendeu. Nesse sentido, informações como título, ID, equipe de suporte, técnico do suporte, categoria, _status_ e departamento atendido devem ser registrados nos chamados;
 - RF-13: O sistema deve ter implementado o SLA (_Service Level Agreement_), isto é, nível de serviço adequado para suporte aos clientes. Esse compromisso deve garantir diretrizes e procedimentos com intuito de cumprir o acordo entre as partes, ou seja, garantindo as necessidades do cliente e também a capacidade de atendimento ao suporte da empresa que atenderá os chamados.
 

#### __Requisitos Não Funcionais__: São requisitos que apontam como deve ser o desempenho do sistema, isto é,  tecnologias usadas (linguagens, frameworks e banco de dados), locais de disponibilidade, usabilidade, logo, não agindo diretamente no _software_:
- RNF-1: O sistema deve garantir hierarquia de prioridades para atendimento de chamados; deve-se dividir nos seguintes níveis de prioridade: crítico, alto, média e baixo;
- RNF-2: O sistema deve categorizar o chamado pelo seu departamento, isto é, chamado do departamento de tecnologia e chamado do departamento operacional, por exemplo;
- RNF-3: O sistema deve, através do SLA estabelecido, também gerenciar e classificar as solicitações de chamado conforme sua prioridade, como mencionado acima; nesse sentido, o agendamento também deve mudar como quando para acidentes (30 minutos) ou chamados agendados (48 horas); 
- RNF-4: O sistema deve ser implementado em ReactJS, _framework_ (conjunto de ferramentas e bibliotecas) de JavaScript. Essa biblioteca será fundamental no tocante a criação de _interface_ e aplicação _WEB_ (_Single Page Application_). Esse tipo de aplicação permite reescrever o conteúdo da página _WEB_ com novos dados através do servidor em tempo real;
- RNF-5: O sistema não tem identidade visual rígida; a interface é sugerida que seja em azul, uma vez que, a logo da empresa, é dessa cor;
- RNF-6: O sistema de gerenciamento de banco de dados usado na empresa é o MariaDB. No entanto, a escolha ficou em aberto. Esse sistema é importante na função de base de dados, permitindo, obviamente, armazenamento dos dados, além de manipulação e e organização, sendo fundamental para o objetivo da empresa de gerenciamento de chamados e dados dos clientes;
- RNF-7: O sistema não tem um número máximo para uso simultâneo;
- RNF-8: O sistema deve ser feito para a _WEB_ e agir de forma responsiva, isto é, permite que diferentes dispositivos possam acessar com qualidade e ter uma experiência satisfatória ao navegar e utilizar as funcionalidades do sistema;
- RNF-9: O sistema deve utilizar um servidor _WEB_, como o Servidor Apache. Esse servidor permite com que dados e arquivos que fazem parte da aplicação possam ser entregues após a requisição do cliente;
- RNF-10: O sistema não terá integração com outros sistemas;






# Método 5W2H
Permite o direcionamento do projeto através de 7 perguntas (Who, When, Where, Why, What, How, How much) que organizam, de modo geral, detalhes do sistema.

Pergunta | Resposta
---------|---------
Quem | Para funcionários da empresa que terão acesso exclusivo para seus departamentos específicos
Quando | Primeiro semestre de 2023
Onde | O sistema deve ser feito para Web, de modo com que seja responsivo para qualquer dispositivo que possa acessar
Por quê | Busca de melhoria em relação ao ERP atual da empresa; no momento, não é orientado de forma adequado aos chamados, e, assim, há dificuldade de guardar os logs dos chamados, dificultando o atendimento e a comunicação entre os setores da empresa
Quanto | Sem custos em relação ao tema financeiro. Já em relação ao desenvolvimento, o custo se refere ao tempo para reuniões para alinhamentos, dúvidas, apresentações que compõe todo o progresso do projeto.  
Como | Para a criação interfaces de usuário na web, utiliza-se o JavaScript e o _framework_ ReactJS. Em relação ao sistema em si, terá a função de gerenciar chamados com informações sobre _status_, dados sobre clientes, fluxo e modelos de chamado
O quê | Desenvolvimento de um sistema para monitorar os chamados da empresa, permitindo controle e dados do fluxo e quantidade totais






