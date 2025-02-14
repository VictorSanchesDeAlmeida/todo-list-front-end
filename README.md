# Todo App - Frontend (React Native)

Este é o front-end de uma aplicação **Todo App** desenvolvida com **React Native**, consumindo uma API RESTful construída com **Spring Boot**. A aplicação permite que os usuários visualizem e gerenciem suas tarefas de forma simples e intuitiva.

## Funcionalidades

Por enquanto, apenas a tela principal foi desenvolvida, que permite visualizar as tarefas de um usuário específico. A aplicação já está integrada à API para realizar as operações de listagem de tarefas.

### Tela Atual

- **Tela de Tarefas (Todo List)**: Exibe todas as tarefas de um usuário. O usuário pode visualizar o título e o status (concluído ou não) de cada tarefa.

### Funcionalidades Futuras

- **Tela de Detalhes da Tarefa**: Exibição dos detalhes de uma tarefa específica.
- **Tela de Criação de Tarefa**: Permite ao usuário adicionar novas tarefas.
- **Tela de Edição de Tarefa**: Permite ao usuário editar informações de uma tarefa existente.
  
Essas funcionalidades estão em desenvolvimento e serão adicionadas nas próximas atualizações.

## Requisitos

- Node.js 14 ou superior
- React Native 0.64 ou superior
- Expo CLI (caso utilize o Expo)

## Como Rodar o Projeto

1. Clone este repositório:
  ```bash
  git clone https://github.com/VictorSanchesDeAlmeida/todo-list-front-end.git
  ```
2. Navegue até o diretório do projeto:
  ```bash
  cd todo-app-frontend
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```
4.Execute o projeto:
  ```bash
  npm run <dispositivo>
  ```
5. O projeto será executado no emulador ou dispositivo físico com o Expo, se estiver usando o Expo, ou diretamente com o React Native CLI.

## Integrando com a API
Este front-end está integrado com a seguinte API backend (Spring Boot):

- **API Todo App: [Link para a API](https://github.com/VictorSanchesDeAlmeida/api-todo-app)**

A comunicação com a API é feita através de requisições HTTP usando a biblioteca axios para listar e manipular tarefas.

## Contribuições
Sinta-se à vontade para contribuir com melhorias, novas funcionalidades ou correções. Para isso, basta criar um pull request ou abrir uma issue.

