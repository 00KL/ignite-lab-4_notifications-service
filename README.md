# Notifications Service

## Description

The Notifications Service is a project that provides a centralized system for managing and sending notifications to users.

## Features

- Feature 1: Allows users to subscribe to different types of notifications.
- Feature 2: Provides an API for sending notifications to subscribed users.
- Feature 3: Supports multiple notification channels such as email, SMS, and push notifications.

## Installation

1. Clone the repository.
2. Install the dependencies using `yarn install`.

## Connect to DB

### SQLite

A forma mais simples de conectar é rodando o comando a baixo q irá criar um banco local em um arquivo SQLite e uma configuração simples no .env.

`npx prisma init --datasource-provider SQLite`

### Outros bancos

Favor consultar documentação do Prisma

## Usage on develpment

1. Run the application using `yarn dev`.
2. Access the application at `http://localhost:3000`.
3. `npx prisma studio -p 5556` para acompanhar o banco

### Checagem de erros no código sem gerar arquivos de build

`npx tsc -noEmit`

### Para facilitar a testagem é possível importar as requisições do Insomnia

`Insomnia_ignite-lab-4_notifications-service.json`

## Usage on production

🚧 **Production env not available yet.** 🚧

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](./LICENSE).
