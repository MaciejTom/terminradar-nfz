# Interview Questions

This file collects questions that may come from the project.

## Architecture

### Why does the frontend call your NestJS API instead of NFZ directly?

Because the backend centralizes external API integration, normalization, caching, error handling and later subscription monitoring. It also prevents UI components from depending on raw NFZ response shapes.

### Why use background jobs?

Monitoring requires work to happen without a user request. BullMQ jobs can periodically check saved subscriptions, retry transient failures and separate long-running work from request/response endpoints.

### Why store snapshots if NFZ already has current data?

The public API provides current state. The application needs its own history to detect changes over time and alert users when a better term appears.

## TypeScript

### What should advanced TypeScript mean in this project?

Practical domain safety: shared contracts, Zod inference, discriminated unions for alert events, branded IDs where useful and exhaustive switches. Not complicated type tricks for their own sake.

## Product

### What is the product value beyond a search page?

Monitoring and alerts. Users do not only want to search once; they want to know when something improves without checking manually.

