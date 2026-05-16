# User Stories

## Search

As a user, I want to search NFZ queues by treatment type and location so that I can compare available terms.

Acceptance criteria:

- invalid search params are rejected
- unavailable NFZ API returns a useful error
- results are normalized before reaching the frontend
- empty results show a dedicated empty state

## Save Monitoring

As a logged-in user, I want to save a search so that the app can monitor it for me.

Acceptance criteria:

- user can create a subscription from search criteria
- duplicate subscriptions are handled
- inactive subscriptions are not checked by jobs

## Alert on Better Term

As a user, I want to get notified when a term improves so that I can act quickly.

Acceptance criteria:

- previous and new snapshots are compared
- meaningful changes create alert events
- duplicate alerts are not sent repeatedly
- email sending failures are logged and retried

## Review History

As a user, I want to see how a term changed over time so that I can decide whether to wait or keep searching.

Acceptance criteria:

- snapshots are stored with timestamps
- dashboard shows latest state
- history chart is added after the demoable MVP

