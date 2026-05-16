# ADR-0007: Use Shared TypeScript Contracts

## Status

Accepted for planned Phase 1.

## Context

The frontend and backend should agree on request and response shapes.

## Decision

Create `packages/shared` for contracts, schemas and domain types.

## Alternatives Considered

- duplicate frontend/backend types
- generate client from OpenAPI from the start
- keep all types inside backend only

## Consequences

Pros:

- reduces frontend/backend drift
- gives practical TypeScript learning value
- makes contracts visible in code review

Cons:

- shared package boundaries must stay clean
- frontend should not import backend-only implementation details

