# Documento Lista de User Stories

Documento construído a partido do **Modelo BSI - Doc 004 - Lista de User Stories** que pode ser encontrado no
link: <https://docs.google.com/document/d/1Ns2J9KTpLgNOpCZjXJXw_RSCSijTJhUx4zgFhYecEJg/edit?usp=sharing>

## Descrição

Este documento descreve os User Stories criados a partir da Lista de Requisitos no [Documento 001 - Documento de Visão](doc-visao.md). Este documento também pode ser adaptado para descrever Casos de Uso. Modelo de documento baseado nas características do processo easYProcess (YP).

## Histórico de revisões

| Data       | Versão |                              Descrição                            | Autor                    |
| :--------- | :----: | :---------------------------------------------------------------: | :----------------------- |
| 25/06/2021 | 0.0.1  |                  Template e descrição do documento                | Wanessa da Silva Bezerra |
| 29/06/2021 | 0.0.2  |                   Detalhamento do User Story US01                 | Lucas da Silva santos    |
| 05/07/2021 | 0.1.0  |                     Correções do User Story US01                  | Zaú Júlio Araújo Galvão  |
| 05/07/2021 | 0.2.0  |                   Detalhamento do User Story US02                 | Wanessa da Silva Bezerra |
| 06/07/2021 | 0.2.1  |          Adição dos Testes de Aceitação do User Story US01        | Zaú Júlio Araújo Galvão  |
| 16/07/2021 | 1.0.0  |    Documento completo com o detalhamento de todos os User Stories |                          |
| 17/01/2022 | 1.1.0  | Correções no detalhamento de user stories e atribuição dos testes | Paulo Vítor              |

### User Story US01 - Manter Usuário

|               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de usuário que tem acesso ao sistema via login e senha. Um usuário tem os atributos name, id, email, username, data de nascimento, avatarURL. O usuário pode registrar-se no sistema através da sua rede social de escola, o avatarURL é um link para uma foto de seu perfil. Além disso o usuário poderá alterar alguns dados, como o e-mail ou a senha. O usuário administrador do sistema pode realizar as operações de adicionar, alterar, remover e listar os usuários comuns do sistema. |

| **Requisitos envolvidos** |                                |
| ------------------------- | :----------------------------- |
| RF15                      | Cadastrar Usuário              |
| RF16                      | Alterar Usuário                |
| RF17                      | Consultar Usuário              |
| RF18                      | Visualizar detalhes do Usuário |
| RF19                      | Excluir Usuário                |

|                         |           |
| ----------------------- | :-------- |
| **Prioridade**          | Essencial |
| **Estimativa**          | 8 h       |
| **Tempo Gasto (real):** |           |
| **Tamanho Funcional**   | 7 PF      |

| Testes de Aceitação (TA) |                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**               | **Descrição**                                                                                                                                                                                                                                                                                                                                |
| **TA01.01**              | O usuário é redirecionado para a página de login social e tudo ocorre corretamente. Ele é redirecionado para a tela de boas-vindas da plataforma.                                                                                                                                                                                            |
| **TA01.02**              | O usuário é redirecionado para a página de login social e autenticação social falha. É exibida a mensagem: "Não foi possível realizar o login, Tente novamente". O usuário é redirecionado para a tela de login.                                                                                                                             |
| **TA01.03**              | O usuário solicita a exclusão de seu perfil na página de visualização de detalhes, uma notificação de confirmação é exibida em modal ou toast, a exclusão é realizada e a mensagem "Perfil excluído com sucesso" é exibida. O usuário é redirecionado para a tela principal.                                                                 |
| **TA01.04**              | O usuário solicita a exclusão de seu perfil na página de visualização de detalhes, a exclusão não ocorre e a mensagem "Tente novamente" é exibida. O usuário é redirecionado para a página de visualização de detalhes de usuário.                                                                                                           |
| **TA01.05**              | O usuário, na tela de detalhes, realiza alterações nas informações e seleciona para salvar,tudo ocorre corretamente e a mensagem "Tudo Okay!" é exibida. O usuário é redirecionado para a tela de detalhes com as novas informações.                                                                                                         |
| **TA01.06**              | O usuário, na tela de detalhes, realiza alterações nas informações e seleciona para salvar,ocorre uma falha na atualização e a mensagem "Problemas técnicos, Tente novamente..." é exbida. O usuário continua na mesma tela até solicitar para salvar novamente ou cancelar as alterações.                                                   |
| **TA01.07**              | O usuário, na tela de detalhes, realiza alterações nas informações e seleciona para salvar, o usuário preenche incorretamente alguma informação e a mensagem "Ops! Tem alguma coisa errada, verifique os dados e tente novamente". O usuário continua na mesma tela até alterar e solicitar para salvar novamente ou cancelar as alterações. |

| **Responsável pelos Testes** |
| ---------------------------- |
|        Roberto Costa         |

### User Story US02 - Manter Tarefa

|               |                                                                                                                                                                                                                                    |
| ------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de tarefas. Uma tarefa tem os atributos projectId, title, number, remainingTime, note, fixed, priority, status, created_at, closed_in, timer. O código será a chave primeira e os atributos serão registrados pelo o usuário. |

| **Requisitos envolvidos** |                                           |
| ------------------------- | :---------------------------------------- |
| RF01                      | Cadastrar Tarefa                          |
| RF02                      | Alterar Tarefa                            |
| RF03                      | Consultar Usuários                        |
| RF04                      | Vizualizar detalhes do Usuário            |
| RF05                      | Excluir Usuário                           |
| RF06                      | Solicitar acesso a uma tarefa visualizada |

|                         |           |
| ----------------------- | :-------- |
| **Prioridade**          | Essencial |
| **Estimativa**          | 8 h       |
| **Tempo Gasto (real):** |           |
| **Tamanho Funcional**   | 7 PF      |

| Testes de Aceitação (TA) |                                                                                                                                                                                                                                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Código**               | **Descrição**                                                                                                                                                                                                                         |
| **TA02.01**              | O usuário informa, na tela Tarefa, todos os dados da tarefa para registrar corretamente, ao clicar em salvar ele é notificado com uma mensagem de sucesso. Mensagem: Cadastro realizado com sucesso.                                  |
| **TA02.02**              | O usuário informa, na tela Tarefa, os dados da tarefa para registrar incorretamente, ao clicar em salvar ele é notificado com uma mensagem de erro. Mensagem: Cadastro não realizado, o campo “xxxx” não foi informado corretamente.  |
| **TA02.03**              | O usuário informa, na tela Tarefa, todos os dados da Tarefa para que ele deseja atualizar corretamente, ao clicar em salvar ele é notificado com uma mensagem de sucesso. Mensagem: Tarefa atualizada com sucesso.                    |
| **TA02.04**              | O usuário informa, na tela Tarefa, os dados da tarefa para atualizar incorretamente, ao clicar em salvar ele é notificado com uma mensagem de erro. A tarefa não foi atualizado, o campo “xxxx” não foi informado corretamente.       |
| **TA02.05**              | O usuário informa, na tela Tarefa, a tarefa que ele deseja excluir corretamente, ao clicar em salvar ele é notificado com uma mensagem de sucesso. Mensagem: Tarefa deletada com sucesso.                                             |
| **TA02.06**              | O usuário informa, na tela Tarefa, os dados da tarefa que deseja excluir incorretamente, ao clicar em salvar ele é notificado com uma mensagem de erro. A tarefa não foi deletado, o código da tarefa não foi informado corretamente. |

| **Responsável pelos Testes** |
| ---------------------------- |
|          Zaú Júlio           |

### User Story US03 - Manter Projeto

|               |                                                                                                                                                                                                                                                    |
| ------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deve manter um cadastro de projetos. Um projeto contém os seguintes atributos, id, name createDate, completeDate, color, description, hashArchived. Cada projeto possui suas próprias tarefas definidas pelo usuário criador do projeto. |

| **Requisitos envolvidos** |                                            |
| ------------------------- | :----------------------------------------- |
| RF07                      | Criar Projetos de Tarefas                  |
| RF08                      | Excluir Projetos de  Tarefas               |
| RF09                      | Alterar Projetos de Tarefas                |
| RF10                      | Consultar Projetos de Tarefas              |
| RF14                      | Colocar Prioridades em Tarefas ou Projetos |
| RF20                      | Arquivar Projetos de Tarefas               |

|                         |           |
| ----------------------- | :-------- |
| **Prioridade**          | Essencial |
| **Estimativa**          | 8 h       |
| **Tempo Gasto (real):** |           |
| **Tamanho Funcional**   | 7 PF      |

| Testes de Aceitação (TA) |                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**               | **Descrição**                                                                                                                                                                                          |
| **TA03.01**              | Na tela de criação de projetos o usuário preenche todos os campos referente ao projeto a ser criado, caso não ocorra nada de errado é exibida uma mensagem de sucesso na tela.                         |
| **TA03.02**              | Quando um projeto é finalizado ou por algum motivo interrompido, o usuário criador do projeto tem a opção de excluí-lo, logo após é exibida uma mensagem de sucesso na tela.                           |
| **TA03.03**              | Com um projeto criado é possível realizar alterações em dados cadastrais que o usuário criador tem acesso como o nome do projeto, cor, descrição e o status para definir se ele está ou não arquivado. |
| **TA03.04**              | Com um projeto criado é possível consultá-lo atráves do nome do projeto, descrição, data e status, tendo como retorno uma instância de busca.                                                          |
| **TA03.05**              | Com um projeto criado é possível colocar prioridades para que projetos mais importantes tenham preferência e sejam concluídos.                                                                         |
| **TA03.06**              | Quando um projeto é finalizado, ele é arquivado para auxiliar na organização dos projetos de usuário.                                                                                                  |

| **Responsável pelos Testes** |
| ---------------------------- |
|        Arthur Santos         |

### User Story US04 - Manter Histórico

|               |                                                                                                                                                                                                                                                    |
| ------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Descrição** | O sistema deve manter o histórico de tarefas de cada usuário. Um histórico contém os seguintes atributos: userId, score, updated_at, weekdayTaskCount, lastTaskNumber. Cada histórico contabiliza um score de acordo com o número de tarefas do usuário, um contador de tarefas para cada dia da semana. |

| **Requisitos envolvidos** |                                            |
| ------------------------- | :----------------------------------------- |
| RF21                      | Criar Histórico de Usuário                 |
| RF22                      | Atualizar Score do Histórico               |
| RF23                      | Atualizar Última Tarefa Adicionada         |

|                         |           |
| ----------------------- | :-------- |
| **Prioridade**          | Essencial |
| **Estimativa**          | 8 h       |
| **Tempo Gasto (real):** |           |
| **Tamanho Funcional**   | 7 PF      |

| Testes de Aceitação (TA) |                                                                                                                                                                                                        |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Código**               | **Descrição**                                                                                                                                                                                          |
| **TA04.01**              | Na tela HOME será exibido o histórico do usuário, mostrando corretamente os detalhes do seu uso da plataforma.                                                                                         |
| **TA04.02**              | Quando o status de uma tarefa tiver seu status atualizado, o score do usuário será atualizado no histórico.                                                                                            |
| **TA04.03**              | Quando o usuário adicionar uma nova tarefa, a última tarefa adicionada será atualizada no histórico do usuário, exibindo a mais recente.                                                               |

| **Responsável pelos Testes** |
| ---------------------------- |
|        Paulo Vítor           |
