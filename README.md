# Morocco e-Health SaaS MVP

This repository contains a minimal MVP codebase for a Morocco-focused e-health platform.

## Structure
- `/backend`: NestJS + Prisma backend
- `/frontend`: Next.js frontend
- `/docker-compose.yml`: Local dev stack (PostgreSQL + Redis + apps)

## Setup (local)

```bash
cd backend
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run start:dev
```

```bash
cd frontend
npm install
npm run dev
```

## Environment variables (backend)

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ehealth
JWT_SECRET=dev-secret
REDIS_HOST=localhost
REDIS_PORT=6379
```

## Environment variables (frontend)

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001/v1
```
