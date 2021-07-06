<h1>Taskiano: Projeto Arquitetural do Software</h1>

---

Criado a partir de: [Processo BSI - Projeto Arquitetural](https://docs.google.com/document/d/1i80vPaInPi5lSpI7rk4QExnO86iEmrsHBfmYRy6RDSM/edit)

---

<h2>Sumário</h2>

- [1. Descrição](#1-descrição)
  - [1.1. Histórico de revisões](#11-histórico-de-revisões)
- [2. Visão Geral](#2-visão-geral)
- [3. Requisitos Não Funcionais](#3-requisitos-não-funcionais)
- [4. Mecanismos arquiteturais](#4-mecanismos-arquiteturais)
  - [4.1. Tecnologias](#41-tecnologias)
- [5. Decisões de Design](#5-decisões-de-design)
- [6. Validação com Casos de Teste](#6-validação-com-casos-de-teste)
- [7. Componentes](#7-componentes)
- [8. Implantação](#8-implantação)
- [9. Referências](#9-referências)

## 1. Descrição

Neste documento é abordado a arquitetura da plataforma e suas peculiaridades, tecnologias, decisões de design, implantação, entre outros. Através deste, objetivo atendido é a apresentação do sistema ser realizada de forma que seja possível compreender os aspectos gerais das funcionalidades internas do projeto e suas respectivas finalidades.

### 1.1. Histórico de revisões

| Data       | Versão | Descrição                                   | Autor     |
| ---------- | ------ | ------------------------------------------- | --------- |
| 05/07/2021 | 1.0    | Documento Inicial                           | Zaú Júlio |
| 05/07/2021 | 1.1    | Organização da estrutura e adição de index  | Zaú Júlio |
| 05/07/2021 | 2.0    | Adição da descrição das tecnologias         | Zaú Júlio |
| 06/07/2021 | 3.0    | Adição da imagem e descrição da arquitetura | Zaú Júlio |
| 06/07/2021 | 4.0    | Adição da descrição do documento            | Zaú Júlio |

## 2. Visão Geral

A arquitetura de microserviços empregada nesse projeto está ilustada na Fiura 1, logo abaixo. O núcleo arquitetural é a camada de interface gráfica com usuário, implementada em Javascript e Typescript com **Next.js**/**React** e hospedada na Vercel.
Esta camada da aplicação comunica-se diretamente com o serviços do Firebase, Authentication e Storage, e com a camada de controle de entidades.

Esta camada por sua vez é implementada em Python através do _meta-framework_ Django REST e hospedada no Heroku, em conjunto com o banco de dados relacional **MariaDB**. A aplicação de controle das entidades também está estreitamente conectada ao serviço de autenticação do Google Firebase. A conexão com o Firebase Authentication fornece mecanismos de autenticação e autorização a aplicação, garantindo a segurança e confiabilidade necessárias para a plataforma.

![Modelo Entidade-Relacionamento](images/arch.png)

Figura 1. Imagem que representa a visão geral no documento.

## 3. Requisitos Não Funcionais

**Requisitos não-funcionais:** nesta fase do documento, é necessário listar os requisitos não funcionais encontrados no sistema, tais como: portabilidade, usabilidade, desempenho e etc. O objetivo é colocar o nome do requisito e descrever com detalhes suas características.

Exemplo:

<table>
  <tr>
   <td>Desempenho</td>
   <td>
      <p> <strong> 1.</strong> A página principal tem que ser carregada em no máximo 3 segundos com uma conexão mínima de 256kbps.
      <p> <strong> 2.</strong> As páginas que recuperam informações de sistemas legados, devem responder em dois segundos a cada 10.000 (contextual) em uma conexão de 256kbps.
      <p> <strong> 3.</strong> As páginas que recuperam informações de transações no banco de dados da própria aplicação, deve responder em um segundo a cada 10.000 registros (contextual), retornados em uma conexão de 256kbps.
      <p> <strong> 4.</strong> O servidor deve suportar 100.000 conexões simultâneas sem perda de desempenho.
    </td>
  </tr>
  <tr>
    <td>Interoperabilidade</td>
    <td>
      <p> <strong> 1. </strong> Deve ser desenvolvido na plataforma .NET com banco de dados SQL Server Enterprise ou Oracle 10g.
    </td>
  </tr>
</table>

## 4. Mecanismos arquiteturais

A seguir está listado os principais mecanismos arquiteturais presentes no sistema, os mecanismos de análise, design e implementação. O intuito desta etapa é verificar e garantir que todas as preocupações técnicas relativas à arquitetura do sistema tenham sido capturadas.


| Mecanismo de Análise                       | Mecanismo de Design                                  | Mecanismo de Implementação      |
| ------------------------------------------ | ---------------------------------------------------- | ------------------------------- |
| Persistência                               | Banco de dados relacional                            | MariaDB Server                  |
| Autenticação                               | **Authentication as service**                        | Google Firebase Authentication  |
| Autenticação Social _is human_             | **Authentication as service**                        | Google Firebase Authentication  |
| Autorização                                | Tokens de autenticação                               | JWT                             |
| Interface interativa 3º grau               | Drag-and-drop                                        | React(react-beautiful-dnd)      |
| Notificações _in browser_                  | Toasts                                               | React(react-hot-toast)          |
| Integração com sistemas legados (Cobrança) | Interface utilizando XML em serviço e arquivo texto. | Web Service e System.IO         |
| Front-End                                  | Interface gráfica de usuário.                        | Next.js/React.                  |
| Back-End                                   | Interface de controle de dados.                      | Django/Django-REST-framework.   |
| Host                                       | Disponibilização da plataforma.                      | Vercel, Heroku, Google Firebase |
|                                            |                                                      |                                 |
### 4.1. Tecnologias

A seguir descrevemos brevemente as principais tecnologias empregadas no desenvolvimento desta aplicação, suas funcionalidades e o papel que desempenham.

| Tecnologias                  | Descrição                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Typescript**               | O Typescript é um _superset_ criado pela Microsoft que adiciona, principalmente, tipagem ao Javascript. A agregação de tipagem adiciona mais segurança ao código ao oferecer um _error handler_ para controle de tipos, o que consequentemente auxilia o desenvolvedor a criar soluções para o tratamento de exceções.                                                                  |
| **Reactjs**                  | React é uma biblioteca de criação de componentes interativos, criada pelo Facebook, com foco na performance e produtividade. Utilizada para manipular a DOM, estados e contexto encapsulados. Através do princípio de componentes a crescente atomicidade da aplicação auxilia no controle de falhas e consequentemente no aumento da confiabilidade da aplicação.                      |
| **Next.js**                  | O Next.js é um _framework_ construído pela Vercel que envolve o React e agrega diversos recursos como SSR, SSG, otimização de imagens, roteamento, entre vários outros. Com o Next podemos reduzir a quantidade de código JS/TS empregado diretamente na página, expondo assim, cada vez menos a aplicação.                                                                             |
| **MariaDB**                  | O MariaDB Server é um banco de dados relacional SQL, de código aberto, construído a partir de um _fork_ do MySQL. O MariaDB oferece suporte a JSON, versionamento de tabelas, integração com a Oracle, além de todas as demais funcionalidades básicas de um banco de dados.                                                                                                            |
| **Firebase**: Storage        | O Firebase Storage é um _storage as service_ desenvolvido pelo Google, com alta escalabilidade, segurança rígida e integrada ao Firebase Authentication. O serviço oferece _storage_ para objetos independente do formato, áudio, vídeo, imagens, etc. O serviço é integrado ao SDK do Firebase, o que facilita a construção e manipulação da aplicação enquanto garante sua segurança. |
| **Firebase**: Authentication | O Firebase Authentication, desenvolvido pelo Google, oferece _back-end as service_ para autenticação e autorização de maneira simples e estreitamente integrado a outros serviços do Google. Assim como o Firebase Storage ele também tira proveito do SDK e da segurança fornecida fornecida pelo seu uso.                                                                             |
| **Django**                   | Django é um _framework_ construído em Python de alto nível de desenvolvimento rápido, design limpo e pragmático. O Django possui alta escalabilidade e vários recursos de segurança, como suporte embutido a autenticação e proteção contra _sql injection_.                                                                                                                            |
| **Django** REST Framework    | O padrão REST empregado nesse _meta-framework_ possui os preceitos empregados no desenvolvimento desta aplicação, além de contar com a alta escalabilidade oferecida pelo Django, também emprega ORM e integrações de autenticação, como python-social-auth.                                                                                                                            |
|                              |                                                                                                                                                                                                                                                                                                                                                                                         |

## 5. Decisões de Design

**Fundamentação:** nesta fase, o arquiteto deve fundamentar todas as decisões importantes de design. Além disso, deve descrever as alternativas significativas rejeitadas no projeto. Esta seção pode indicar hipóteses, restrições, resultados de análises e experiências significativas para a arquitetura.

Por exemplo:

- Porque utilizar arquitetura REST?
- Porque utilizar arquitetura monolítica e não de micro-serviço?

## 6. Validação com Casos de Teste

Nesta fase selecionar User Stories com cenários escolhidos para a validação da arquitetura apresentada. Casos de uso, backlog, requisitos de usuários ou qualquer outro nome que represente os itens relevantes para o funcionamento do sistema final, o intuito é exercitar e testar os principais aspectos de risco da arquitetura.

Exemplo:

|            |                                                   |
| ---------- | ------------------------------------------------- |
| User Story | Motivos da escolha                                |
| US 01      | Descrever o motivo e os itens que serão testados. |
| US 04      | ...                                               |
|            |                                                   |

## 7. Componentes

Nesta fase, o arquiteto deve apresentar o diagrama de componentes. É recomendado como boas práticas de mercado o uso do modelo UML para criação do diagrama, que deve apresentar os possíveis componentes e suas dependências. Além disso, o arquiteto deve criar uma tabela detalhando as responsabilidades de cada componente.

Exemplo:

![alt_text](images/image2.jpg "image_tooltip")

Figure 2. Representação gráfica com diagrama UML para representar os componentes.

|            |                                                                     |
| ---------- | ------------------------------------------------------------------- |
| Componente | Descrição                                                           |
| BackOffice | Descrever de forma sucinta as responsabilidades deste componente... |
| Assinante  |                                                                     |
| Serviço    |                                                                     |
| Financeiro |                                                                     |
| Pesquisa   |                                                                     |
| Suporte    |                                                                     |
| Log        |                                                                     |
| Segurança  |                                                                     |

## 8. Implantação

O arquiteto deve descrever as configurações de distribuição dos componentes de software na área física em que serão implantados.

Exemplo:

![alt_text](images/image3.jpg "image_tooltip")

Figure 3 Representação de um cenário para implantação

Read more:[http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx#ixzz5AE2cXUmI](http://www.linhadecodigo.com.br/artigo/3343/como-documentar-a-arquitetura-de-software.aspx#ixzz5AE2cXUmI)

## 9. Referências

(coloque aqui, artigos, livros e sites utilizados e citados no documento)