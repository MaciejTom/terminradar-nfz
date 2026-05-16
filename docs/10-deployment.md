# Deployment Notes

## Goal

Keep hosting cheap and understandable.

## Possible Setups

### Simple Portfolio Setup

- frontend on Vercel
- backend on Render/Railway/Fly.io
- managed Postgres
- managed Redis

Pros:

- quick to deploy
- easy public demo

Cons:

- multiple services
- free tiers can sleep

### VPS Setup

- Hetzner VPS
- Docker Compose
- Caddy or Nginx reverse proxy
- Postgres and Redis on the same server

Pros:

- cheap and close to real operations
- strong learning value

Cons:

- more DevOps work
- backups and security need attention

## MVP Recommendation

Start with a simple managed setup or local Docker demo. Move to VPS only after Phase 2 is stable.

