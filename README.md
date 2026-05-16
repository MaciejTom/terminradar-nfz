# TerminRadar NFZ

TerminRadar NFZ is a fullstack TypeScript portfolio project for searching and monitoring public NFZ treatment queue data. The project is intentionally built in phases so every milestone delivers a usable product and teaches a concrete part of modern fullstack development.

## Goal

Build a professional, recruiter-friendly application that demonstrates:

- React and Next.js App Router frontend work
- NestJS backend architecture
- external public API integration
- PostgreSQL data modeling
- Redis cache and BullMQ background jobs
- alert detection and email notifications
- typed shared contracts
- Docker-based local development
- CI checks, tests and clear technical documentation

## Product Idea

Users search for NFZ treatment availability, save searches they care about and receive alerts when a better term appears.

The app does not book visits, provide medical advice or store sensitive medical history. It focuses on public availability data and user-defined monitoring preferences.

## Planned Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | Next.js, React, TypeScript |
| Backend | NestJS, TypeScript |
| Database | PostgreSQL, Prisma |
| Jobs/cache | Redis, BullMQ |
| Validation | Zod, class-validator |
| Tests | Vitest/Jest, Playwright or API e2e tests |
| Infra | Docker Compose, GitHub Actions |

## Repository Status

Current phase: **Phase 0 - Project foundation**.

This repository currently contains planning, architecture and delivery documents only. Application folders such as `apps/web` and `apps/api` will be created in the next phase.

## Review Path

If you are reviewing this repository, start here:

1. [PROJECT.md](./PROJECT.md) - product brief and boundaries
2. [ROADMAP.md](./ROADMAP.md) - phased delivery plan
3. [docs/03-architecture.md](./docs/03-architecture.md) - system design
4. [docs/11-recruiter-guide.md](./docs/11-recruiter-guide.md) - what the project demonstrates
5. [docs/adr](./docs/adr) - architecture decisions

## Learning Approach

Each feature should be delivered through the same loop:

1. define a small task
2. understand the concept before coding
3. implement the smallest useful version
4. add tests where risk justifies it
5. update documentation or ADRs
6. commit with a clear message
7. write a short learning note
8. prepare interview questions from the feature

## Future Local Setup

The final local setup is planned to be:

```bash
pnpm install
docker compose up -d
pnpm dev
```

This will become available after the monorepo apps are scaffolded.

