# Documento Cobertura dos testes

Documento criado com o objetivo de descrever os requisitos necessários e como devem ser executados para gerar relatórios sobre a cobertura dos testes.Basicamente, a cobertura de teste é qualquer medida de integralidade relacionada a um requisito (baseada em requisitos) ou aos critérios de design e implementação do código (baseada em códigos), como a verificação de casos de uso (baseada em requisitos) ou a execução de todas as linhas de código (baseada em códigos).
 
## Requisitos
 
Para execução dos testes de integração é necessário primeiro instalar o sistema de empacotamento [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) ou gerenciador de pacotes [npm](https://nodejs.org/en/download/) para o Node.JS .

## Execução

Com os pacotes devidamente instalados basta executar no prompt de comando localizado no diretório do projeto:
  
  * yarn (para fazer a instalação dos pacotes)
  * yarn test:coverage
  <br/>
Ao executar o comando do coverage ira criar uma pasta no diretorio \Taskiano\Taskiano chamado de coverage, dentro desta pasta acesse a pasta lcov-report e pegue o arquivo index.html e jogue em seu navegador para acompanhar a cobertura dos testes. Conforme mostrado na imagem abaixo:

![image](https://user-images.githubusercontent.com/41094007/153513698-d7582961-a657-487b-97ea-cffe4a312d1f.png)

## Conclusões
Recentemente a cobertura de teste do projeto apresentou os resultados que estão sendo exibidos na imagem abaixo:

![image](https://user-images.githubusercontent.com/41094007/153513143-4d8e4133-aa79-4964-acb3-80d6716494d3.png)
/Taskiano/blob/main/docs/COBERTURA_TESTES.md

##Documentos

| Documentos                            | Link                                                                                                 |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Teste de unidade                      | [Doc test unit➡️](https://github.com/ZauJulio/Taskiano/blob/main/docs/TESTE_UNIDADE.md)|
| Teste de integração                   | [Doc test integration➡️](https://github.com/ZauJulio/Taskiano/blob/main/docs/TESTE_INTEGRACAO.md)|
