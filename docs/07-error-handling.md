# Error Handling

## Goals

- users see understandable messages
- logs preserve technical details
- NFZ API failures do not crash the app
- frontend does not depend on raw provider errors

## Planned Error Categories

```text
VALIDATION_ERROR
AUTH_REQUIRED
FORBIDDEN
NFZ_API_UNAVAILABLE
NFZ_RESPONSE_INVALID
SUBSCRIPTION_NOT_FOUND
ALERT_ALREADY_SENT
INTERNAL_ERROR
```

## Backend Rules

- validate input at API boundaries
- map external errors into application errors
- use typed error responses
- keep request IDs in logs
- avoid leaking secrets or internal stack traces to users

## Frontend Rules

- show field-level validation where possible
- show retry actions for transient failures
- show empty states separately from errors
- avoid exposing raw technical error messages

