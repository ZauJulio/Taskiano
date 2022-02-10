# Documento Teste de Integração

Documento criado com o objetivo de descrever os requisitos necessários e como devem ser executados os testes de integração. Teste de integração é a fase do teste de software em que módulos são combinados e testados em grupo. Ela sucede o teste de unidade, em que os módulos são testados individualmente, e antecede o teste de sistema, em que o sistema completo (integrado) é testado num ambiente que simula o ambiente de produção.
 
## Requisitos
 
Para execução dos testes de integração é necessário primeiro instalar o sistema de empacotamento [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)  ou gerenciador de pacotes [npm](https://nodejs.org/en/download/) para o Node.Js.

## Execução

Com os sistemas devidamente instalados basta executar no prompt de comando localizado no diretório do projeto:
  
  * yarn (para realizar o download de pacotes e depêndencias do projeto)
  * yarn test (para realizar o testes aplicados no projeto)

## Observação

Nosso sistema passou por uma fase de mudança da sua arquitetura, antes era inviável a criação dos teste de integração devido ao alto acoplamento. Após reuniões com a equipe
de desenvolvimento, obteve-se a resolução desse problema e os testes de integração foram criados. Para visualizar o código de cada um dos schemas presentes no sistema, consulte a tabela abaixo com os links e os responsáveis pela criação dos testes:

| Integrante                       | Teste de integração                                                                                             |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Roberto Costa Tupinambá          | [User Controller➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/it/lib/controllers/UserController.test.ts)|
| Roberto Costa Tupinambá          | [History Controller➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/it/lib/controllers/HistoryController.test.ts)|
| Zaú Júlio Araújo Galvão          | [Project Controller➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/it/lib/controllers/ProjectController.test.ts)|
| Zaú Júlio Araújo Galvão          | [Task Controller➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/it/lib/controllers/TaskController.test.ts)|
| Zaú Júlio Araújo Galvão          | [Global Controller➡️](https://github.com/ZauJulio/Taskiano/blob/main/taskiano/__tests__/it/lib/controllers/GlobalController.test.ts)|

## Veja outros documentos relacionados aos testes do projeto

| Tipo                          | Link                                                                                            |
| ----------------------------- |------------------------------------------------------------------------------------------------ |
| Cobertura dos testes          | [Coverage test doc➡️](https://github.com/ZauJulio/Taskiano/blob/main/docs/COBERTURA_TESTES.md)    
| Testes de unidade             | [Unit test doc➡️](https://github.com/ZauJulio/Taskiano/blob/main/docs/TESTE_UNIDADE.md)|

