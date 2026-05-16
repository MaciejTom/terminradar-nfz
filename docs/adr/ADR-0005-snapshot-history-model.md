# ADR-0005: Build History with Queue Snapshots

## Status

Accepted for planned Phase 2.

## Context

The NFZ API primarily exposes current queue state. Alerting and history require observing changes over time.

## Decision

Store normalized queue snapshots for monitored subscriptions.

## Alternatives Considered

- store only latest state
- store raw API responses only
- rely on external historical data

## Consequences

Pros:

- enables alert detection
- enables history charts
- makes behavior testable

Cons:

- data volume grows over time
- retention and cleanup rules are required

