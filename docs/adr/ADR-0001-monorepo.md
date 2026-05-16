# ADR-0001: Use a TypeScript Monorepo

## Status

Accepted

## Context

The project will contain a Next.js frontend, a NestJS backend and shared TypeScript contracts.

## Decision

Use a monorepo with:

```text
apps/web
apps/api
packages/shared
```

## Alternatives Considered

- separate repositories for frontend and backend
- single repository without workspace structure

## Consequences

Pros:

- shared contracts are easier to maintain
- one CI pipeline can validate the whole project
- repository is easier to review as portfolio work

Cons:

- workspace tooling adds initial setup complexity
- frontend and backend boundaries must remain clear

