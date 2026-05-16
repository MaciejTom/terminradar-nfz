# ADR-0003: Use BullMQ for Background Jobs

## Status

Accepted for planned Phase 2.

## Context

The application needs to monitor saved subscriptions without active user requests.

## Decision

Use BullMQ with Redis for subscription checks, alert detection and email dispatching.

## Alternatives Considered

- simple cron inside the API process
- external scheduler only
- RabbitMQ

## Consequences

Pros:

- retries and failure handling
- delayed/repeated work
- separation between request handling and background processing
- strong learning value for backend-heavy fullstack work

Cons:

- Redis is required
- job design adds operational complexity

