# Documento Teste de Unidade

Documento criado com o objetivo de descrever os requisitos necessários e como devem ser executados os testes de unidade. Teste de unidade é toda a aplicação de teste nas assinaturas de entrada e saída de um sistema. Consiste em validar dados válidos e inválidos via I/O (entrada/saída) sendo aplicado por desenvolvedores ou analistas de teste. Uma unidade é a menor parte testável de um programa de computador.


 
## Requisitos
 
Para execução dos testes de unidade é necessário primeiro instalar o sistema de empacotamento [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) ou gerenciador de pacotes [npm](https://nodejs.org/en/download/) para o Node.JS.

## Execução

Com os pacotes devidamente instalados basta executar no prompt de comando localizado no diretório do projeto:
  
  * yarn (para realizar o download de pacotes e depêndencias do projeto)
  * yarn test


## Observação

Nosso sistema passou por uma fase de mudança da sua arquitetura, antes era inviável a criação dos teste de unidade devido ao alto acoplamento. Após reuniões com a equipe
de desenvolvimento, obteve-se a resolução desse problema e os testes de unidade foram criados. Para visualizar o código de cada um dos schemas presentes no sistema, consulte a tabela abaixo com os links e os responsáveis pela criação dos testes:

| Contexto inicial                 | Teste de unidade                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Arthur dos Santos Medeiros       | [History Initial Context➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/controllers/initialContext/HistoryInitialContext.test.ts)|
| Arthur dos Santos Medeiros       | [Project Initial Context➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/controllers/initialContext/ProjectInitialContext.test.ts)|
| Roberto Costa Tupinambá          | [Tasks Initial Context➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/controllers/initialContext/TasksInitialContext.test.ts)|


| Schemas                 | Teste de unidade                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Arthur dos Santos Medeiros       | [History Schema➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/schemas/HistorySchema.test.ts)|
| Arthur dos Santos Medeiros       | [Project Schema➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/schemas/ProjectSchema.test.ts)|
| Arthur dos Santos Medeiros       | [Task Schema➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/schemas/TaskSchema.test.ts)|
| Roberto Costa Tupinambá          | [User Schema➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/schemas/UserSchema.test.ts)|

| Service                 | Teste de unidade                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Arthur dos Santos Medeiros       | [History Service➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/services/HistoryService.test.ts)|
| Arthur dos Santos Medeiros       | [Project Service➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/services/ProjectService.test.ts)|
| Arthur dos Santos Medeiros       | [Task Service➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/services/TaskService.test.ts)|
| Roberto Costa Tupinambá          | [User Service➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/test/services/UserService.test.ts)|


## Veja outros documentos relacionados aos testes do projeto

| Tipo                          | Link                                                                                            |
| ----------------------------- |------------------------------------------------------------------------------------------------ |
| Cobertura dos testes          | [Coverage test doc➡️](https://github.com/ZauJulio/Taskiano/blob/main/docs/COBERTURA_TESTES.md)    
| Testes de integração             | [Integration test doc➡️](https://github.com/ZauJulio/Taskiano/blob/main/docs/TESTE_INTEGRACAO.md)|

