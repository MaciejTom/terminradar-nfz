# ADR-0004: Use Redis for Cache and Queue Infrastructure

## Status

Accepted for planned Phase 2.

## Context

NFZ API data can be reused across users and background jobs. BullMQ also needs Redis.

## Decision

Use Redis for both BullMQ and selected cache entries.

## Alternatives Considered

- in-memory cache
- database-only cache
- no cache for MVP

## Consequences

Pros:

- reduces repeated external API calls
- supports BullMQ
- simple local development with Docker

Cons:

- more infrastructure
- cache invalidation rules must be explicit

