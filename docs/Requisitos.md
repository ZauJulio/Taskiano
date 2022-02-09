## Descrição do projeto

O projeto Taskiano é um software de gestão de tarefas que visa a otimização de tempo e auxilia na tomada de decisões do usuário, monitorando o ciclo de vida de cada tarefa registrada, gerando relátorios para análise de desempenho de quem executa a tarefa que foi atribuída.


## Lista de Requisitos Funcionais

| Requisito                                         | Descrição                                                                   | Ator    |
| ------------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| RF01 - Incluir Tarefa                             | Uma tarefa tem os atributos nome, data, descrição curta, contatos, situação | Usuário |
| RF02 - Alterar Tarefa                             | A alteração permite a mudança de todos os atributos de uma tarefa           | Usuário |
| RF03 - Listar Tarefas                             | Lista todas as suas tarefas ativas                                          | Usuário |
| RF04 - Visualizar Tarefas                         | Visualiza a tarefa compartilhada                                            | Usuário |
| RF05 - Excluir Tarefas                            | Remove as tarefas                                                           | Usuário |
| RF06 - Solicitar Alterações de Tarefa             | Solicita acesso a uma tarefa visualizada                                    | Usuário |
| RF07 – Criar Projetos de Tarefas                  | Cria um projeto de tarefas para agrupa-las                                  | Usuário |
| RF08 – Excluir Projetos de Tarefas                | Remove o projeto de tarefas                                                 | Usuário |
| RF09 – Alterar Projetos de Tarefas                | Altera o nome do projeto                                                    | Usuário |
| RF10 – Consultar Projetos de Tarefas              | Consulta um projeto criado e tem como retorno seus atributos públicos      | Usuário |
| RF11 – Incluir Comentários nas Tarefas            | Inclui comentários que podem ser observados pelos usuários                  | Usuário |
| RF12 – Incluir Imagens nas Tarefas                | Inclui imagens que podem ser observados pelos usuários                      | Usuário |
| RF13 – Incluir Links nas Tarefas                  | Inclui imagens que podem ser observados pelos usuários                      | Usuário |
| RF14 – Colocar Prioridades em Tarefas ou Projetos | Coloca prioridade das tarefas para aumentar eficiência                      | Usuário |
| RF15 – Alterar Usuário                            | Altera dados cadastrais do usuário                                          | Usuário |
| RF16 – Cadastrar Usuário                          | Um usuário contém nome, email, username e data de nascimento                | Usuário |
| RF17 – Consultar Usuário                          | Exibe as informações básicas do usuário cosultado                           | Usuário |
| RF18 – Vizualizar detalhes do Usuário             | Exibe as informações detalhadas do usuário cosultado                        | Usuário |
| RF19 – Excluir Usuário                            | Remove a conta do usuário do sistema                                        | Usuário |
| RF20 – Arquivar Projetos de Tarefas               | Arquiva todo o projeto, incluindo tarefas                                    | Usuário |
| RF21 - Criar Histórico de Usuário                 | Cria o histórico de usuário, que atribui uma pontuação (Score), uma contagem de tarefas por dia da semana e o número da última tarefa cadastrada pelo usuário. | Usuário |
| RF22 - Atualizar Score do Histórico               | Alterar a pontuação do usuário de acordo com as tarefas concluídas por ele. | Usuário |
| RF23 - Atualizar Última Tarefa Adicionada         | Altera o registro de acordo com o número de identificação da última tarefa cadastrada pelo usuário | Usuário |
## Modelo de Dados

Abaixo apresentamos o modelo dados (Entidade-Relacionamento) usando o **BrModelo**.

![Modelo Entidade-Relacionamento](images/entity_relationship_model.png)
