# AdonisJs Server

![Node.js CI](https://github.com/apquinit/adonisjs-server/workflows/Node.js%20CI/badge.svg)

AdonisJs Server.

## Requirements

- Node.js >= 8.0.0
- npm >= 3.0.0
- Docker
- git

## Development Setup

Clone the repository.

```bash
git clone https://github.com/apquinit/adonisjs-server && cd adonisjs-server
```

Install AdonisJs.

```bash
npm install -g @adonisjs/cli
```

Install dependencies.

```bash
npm install
```

Copy .env file.

```bash
cp .env.example .env
```

Generate application key.

```bash
adonis key:generate
```

### Docker

Start container.

```bash
docker-compose up
```

Stop container.

```bash
docker-compose down
```

### Migrations

Run migrations.

```bash
adonis migration:run
```

### Linter

Run linter.

```bash
npm run lint
```

### Tests

Run tests.

```bash
npm run test
```
