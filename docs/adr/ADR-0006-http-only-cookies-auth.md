# ADR-0006: Use httpOnly Cookies for Auth

## Status

Proposed for Phase 2.

## Context

The app needs user accounts for saved subscriptions and alert preferences.

## Decision

Use JWT-based auth with refresh token stored in an httpOnly cookie.

## Alternatives Considered

- localStorage tokens
- session-only auth
- third-party auth provider

## Consequences

Pros:

- reduces exposure of refresh token to JavaScript
- common pattern for web apps
- good interview topic around security trade-offs

Cons:

- CSRF and cookie settings must be handled carefully
- logout/invalidation strategy must be designed

