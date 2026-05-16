# MVP Scope

## Phase 1 MVP

User-visible capabilities:

- search treatment queues
- filter by benefit and location
- see clear loading, error and empty states
- open result details

Technical capabilities:

- Next.js frontend
- NestJS backend proxy
- NFZ API client
- validation and normalized response contracts
- basic cache
- Swagger docs

## Phase 2 Demoable MVP

User-visible capabilities:

- register and log in
- save monitored searches
- view subscriptions in dashboard
- see latest snapshot status
- see generated alert events

Technical capabilities:

- PostgreSQL persistence
- Prisma schema and migrations
- BullMQ subscription check job
- alert detector service
- tests for core backend behavior

## Explicit Non-goals for MVP

- map view
- full reliability score
- contract-vs-reality analytics
- prediction model
- all NFZ APIs
- mobile app

