# Enviando Emails com Nodemailer

Criando um servidor express.js para enviar um email utilizando a rota padrão da api, utilizando a biblioteca nodemailer podemos enviar emails.

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

## Acesse
**POST/GET http://localhost:3000**
