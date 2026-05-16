# Roadmap

## Phase 0 - Project Foundation

Status: **Done**

Goal: make the repository look and feel like a professional project before implementation starts.

Deliverables:

- README, product brief and roadmap
- architecture docs
- ADR folder
- GitHub issue and PR templates
- root config for future monorepo
- first Git commit

Learning focus:

- project scoping
- product boundaries
- architecture communication
- professional repository hygiene

## Phase 1 - Search MVP

Status: **In progress**

Goal: a user can search NFZ treatment queues through a real Next.js UI backed by a NestJS API.

Planned deliverables:

- `apps/web` Next.js app - scaffolded
- `apps/api` NestJS app - scaffolded
- `packages/shared` contracts package
- NFZ API client
- queue search endpoint
- DTO validation
- normalized response mapping
- loading, error and empty states in the UI
- Swagger for the backend API
- first unit tests for mapping and error handling

Learning focus:

- Next.js App Router
- React forms and state
- NestJS modules, controllers and providers
- external API integration
- TypeScript strict mode

## Phase 2 - Demoable MVP

Goal: the project becomes good enough to show in recruitment.

Planned deliverables:

- PostgreSQL and Prisma
- users table
- subscriptions table
- queue snapshots table
- alert events table
- auth with httpOnly cookies
- saved searches/subscriptions
- BullMQ job that checks saved subscriptions
- alert detector service
- dashboard for monitored searches
- e2e tests for the main happy path

Learning focus:

- database modeling
- NestJS dependency injection in real modules
- auth boundaries
- background processing
- business logic tests

## Phase 3 - Alerts and History

Goal: the app provides value beyond a one-time search.

Planned deliverables:

- email provider integration
- alert email template
- alert throttling
- historical charts
- snapshot comparison
- alert log in the dashboard
- basic reliability/history indicators

Learning focus:

- idempotency
- retry strategy
- time-series data modeling
- product-oriented backend logic

## Phase 4 - Polish, CI/CD and Deploy

Goal: make the project easy to review and credible as portfolio work.

Planned deliverables:

- Docker Compose for local development
- GitHub Actions for lint, test and build
- production deployment notes
- live demo or documented preview environment
- seeded demo account
- final README screenshots
- recruiter guide updated with final code paths
- interview questions and answers

Learning focus:

- CI/CD basics
- deployment trade-offs
- operational documentation
- explaining architecture during interviews
