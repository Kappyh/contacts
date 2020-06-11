# Atividade 2 Arquitetura Javascript

[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org) 
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

## Sobre
Projeto da disciplina de Arquitetura Javascript da Universidade IGTI.

## Instalação
Este repositório contém o backend e o front end na pasta `public/contact`.
Necessário rodar a instalação das dependência dos projetos backend e front end utilizando o comando:

`npm install`

No backend necessário rodar o comando de migrations para criar a tabela, caso queria alimentar a tabela com alguns dados para teste está disponível também um seed.

`npm run knex:migrate`

`npm run knex:seed`

Para rodar o projeto backend:

`npm start`

Para rodar o projeto front end da pasta `public/contact`:

`ng serve`