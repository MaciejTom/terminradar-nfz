# Architecture

## System Context

```text
User
  -> Next.js web app
  -> NestJS API
  -> NFZ public API

NestJS API
  -> PostgreSQL
  -> Redis
  -> BullMQ workers
  -> Email provider
```

## Planned Monorepo Layout

```text
apps/web        Next.js frontend
apps/api        NestJS backend
packages/shared shared contracts, schemas and domain types
```

`apps/web` and `apps/api` were scaffolded at the start of Phase 1. `packages/shared` will be added when the first shared contract is needed.

## Backend Responsibilities

The backend should own:

- NFZ API communication
- response normalization
- cache strategy
- auth
- subscriptions
- snapshots
- alert detection
- background jobs
- email dispatching

## Frontend Responsibilities

The frontend should own:

- search experience
- dashboard views
- forms and validation feedback
- loading, error and empty states
- charts and result presentation
- calling only the project API, not NFZ directly

## Why Not Call NFZ Directly from Frontend?

- API response shapes can be normalized once in the backend
- caching is easier to control
- snapshots and subscriptions require backend persistence
- error handling can be consistent
- background jobs cannot live in the frontend
- future API changes are isolated from UI components

## Main Runtime Flow

```text
Search flow:
web -> api/search -> NfzModule -> NFZ API -> mapper -> web

Monitoring flow:
BullMQ job -> subscription -> NFZ API -> snapshot -> alert detector -> email
```
