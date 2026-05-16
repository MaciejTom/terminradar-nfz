# Security Notes

## Data Sensitivity

The app should not store sensitive medical history or diagnosis data. It stores user accounts and monitoring preferences for public NFZ queue data.

## Auth Plan

Use:

- hashed passwords
- JWT access token
- refresh token in httpOnly cookie
- CSRF considerations for cookie-based auth
- logout that invalidates refresh token state

## Email

Email alerts must include:

- clear reason for the alert
- unsubscribe or disable-subscription path
- no sensitive medical interpretation

## Secrets

Secrets must stay in environment variables and never be committed.

## Abuse Cases

Consider:

- too many subscriptions per user
- repeated login attempts
- expensive search queries
- external API rate pressure

