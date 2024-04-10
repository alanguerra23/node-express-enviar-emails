# Enviando Emails com Nodemailer

Este repositório no GitHub contém um projeto que permite enviar emails usando as tecnologias Node, Express e Nodemailer. O código fonte está organizado em pastas separadas, cada uma com suas respectivas funcionalidades.

Além disso, o projeto conta com uma documentação clara e concisa, explicando como utilizar cada uma das funcionalidades implementadas. Com este projeto, é possível enviar emails de forma simples e eficiente, podendo ser utilizado tanto para fins pessoais quanto profissionais.

## Instalando Dependências

```sh
  npm install
```

## Variaveis de Ambiente

```sh
  cp .env.example .env

  # Preencha as variaveis de ambiente
  MAIL_HOST="smtp.mailtrap.io"
  MAIL_PORT=2525
  MAIL_USER="seu_usuario"
  MAIL_PASS="sua_senha"
```

## Iniciando Projeto

```sh
  node src/index.js
```
