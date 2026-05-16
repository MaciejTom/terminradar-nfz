# API Contract

The backend API should expose normalized, frontend-friendly contracts.

## Planned Public Endpoints

```text
GET /health
GET /search/queues
GET /search/benefits
GET /search/localities
```

## Planned Auth Endpoints

```text
POST /auth/register
POST /auth/login
POST /auth/logout
GET /auth/me
```

## Planned Subscription Endpoints

```text
GET /subscriptions
POST /subscriptions
GET /subscriptions/:id
DELETE /subscriptions/:id
```

## Planned Alert Endpoints

```text
GET /alerts
GET /alerts/:id
```

## Error Shape

Planned normalized error response:

```json
{
  "code": "NFZ_API_UNAVAILABLE",
  "message": "NFZ API is temporarily unavailable.",
  "requestId": "req_123",
  "details": {}
}
```

## Contract Rule

Frontend components should depend on `packages/shared` contracts, not copied ad-hoc types.

