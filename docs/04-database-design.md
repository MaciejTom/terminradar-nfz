# Database Design

The first implementation should use PostgreSQL with Prisma migrations.

## Planned Tables

### users

Stores application users.

Important fields:

- `id`
- `email`
- `password_hash`
- `email_verified_at`
- `created_at`
- `updated_at`

### subscriptions

Stores monitored searches.

Important fields:

- `id`
- `user_id`
- `benefit_name`
- `province_code`
- `locality`
- `case_type`
- `provider_code`
- `max_wait_days`
- `is_active`
- `created_at`
- `updated_at`

### queue_snapshots

Stores periodic queue state for subscriptions.

Important fields:

- `id`
- `subscription_id`
- `provider_code`
- `provider_name`
- `benefit_name`
- `first_available_date`
- `waiting_count`
- `average_wait_days_provider`
- `average_wait_days_computed`
- `raw_nfz_payload`
- `snapshot_at`

Important index:

```sql
CREATE INDEX idx_queue_snapshots_subscription_snapshot_at
ON queue_snapshots (subscription_id, snapshot_at DESC);
```

### alert_events

Stores detected alert-worthy changes.

Important fields:

- `id`
- `subscription_id`
- `event_type`
- `previous_snapshot_id`
- `new_snapshot_id`
- `payload`
- `created_at`

### email_logs

Stores attempted email notifications.

Important fields:

- `id`
- `alert_event_id`
- `recipient_email`
- `status`
- `provider_message_id`
- `error_message`
- `sent_at`
- `created_at`

## Design Notes

- Keep raw NFZ payloads for debugging and mapper verification.
- Store normalized fields for queries and dashboard performance.
- Use partial indexes for active subscriptions later if needed.
- Do not store sensitive medical history.

