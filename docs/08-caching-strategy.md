# Caching Strategy

NFZ API data is public and can be slow or temporarily unavailable, so caching is useful from the start.

## Cache Candidates

### Dictionaries

Examples:

- benefits
- localities
- providers

Planned TTL: hours to one day.

### Search Results

Search results can be cached for a shorter time.

Planned TTL: several minutes, adjusted after observing API behavior.

### Subscription Checks

Jobs should avoid hammering the same NFZ queries repeatedly.

Planned approach:

- group similar subscriptions when possible
- reuse short-lived search cache
- store snapshots for historical comparison

## Invalidation

Initial strategy:

- TTL-based invalidation
- explicit invalidation can be added after real usage patterns are known

## Trade-off

Freshness matters, but this app is not booking visits in real time. A short cache is acceptable if it reduces external API load and improves reliability.

