# Background Jobs

Background jobs are the main reason this is more than a search UI.

## Planned Queue Technology

BullMQ backed by Redis.

## Planned Jobs

### CHECK_SUBSCRIPTION

Checks one active subscription against NFZ data.

Responsibilities:

- load subscription
- call NFZ API through `NfzModule`
- store snapshot
- dispatch comparison logic

### DETECT_ALERTS

Compares new snapshot with previous snapshot.

Responsibilities:

- detect new date availability
- detect date improvement
- detect waiting list decrease
- avoid duplicate alert events

### SEND_ALERT_EMAIL

Sends an email for a created alert event.

Responsibilities:

- render template
- call provider
- log success/failure
- retry transient failures

### CLEANUP_OLD_SNAPSHOTS

Removes old data once retention rules are defined.

## Retry Strategy

Start conservative:

- retry transient NFZ/API/email failures
- do not retry validation or domain errors
- log failure reason for debugging

