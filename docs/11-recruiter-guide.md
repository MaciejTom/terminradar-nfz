# Recruiter / Technical Reviewer Guide

## What This Project Should Demonstrate

- fullstack TypeScript architecture
- React and Next.js application design
- NestJS modules, providers and dependency injection
- public API integration
- backend-owned normalization and error handling
- PostgreSQL data modeling
- Redis cache
- BullMQ background jobs
- alert detection logic
- typed shared contracts
- tests around business behavior
- Docker and CI basics

## Suggested Review Path

1. Read `README.md`.
2. Read `PROJECT.md`.
3. Check `ROADMAP.md`.
4. Review architecture docs.
5. Review ADRs.
6. After Phase 1, inspect NFZ client and mapper.
7. After Phase 2, inspect subscriptions, snapshots and alert detector.
8. After Phase 4, inspect CI and deployment docs.

## Strong Interview Talking Points

- why frontend does not call NFZ directly
- why NestJS is used as a backend boundary
- why BullMQ is useful for monitoring
- how snapshot history is built from current-only API data
- how duplicate alerts are avoided
- how TypeScript contracts reduce frontend/backend drift
- how scope was intentionally reduced for MVP delivery

## What Would Make This Project Weak

- only a frontend fetch to NFZ API
- no persistence
- no background jobs
- no tests
- no clear README
- huge unfinished scope
- code the owner cannot explain

