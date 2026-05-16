# ADR-0002: Use NestJS as the API Layer

## Status

Accepted

## Context

The application needs a backend boundary for NFZ API integration, persistence, jobs, auth and email alerts.

## Decision

Use NestJS for the backend API.

## Alternatives Considered

- Next.js API routes only
- Express without framework structure
- direct frontend calls to NFZ API

## Consequences

Pros:

- clear modules and dependency injection
- good fit for controllers, services and background processing
- professional backend structure for portfolio review

Cons:

- more setup than simple API routes
- requires refreshing NestJS concepts carefully

