# Project Brief

## Working Name

**TerminRadar NFZ**

Alternative names can be evaluated later, but the working name is clear enough for the portfolio phase.

## Problem

NFZ treatment availability data is public, but users still need to repeatedly check whether a better term has appeared. The official experience is useful for one-time searching, but it does not focus on monitoring, history and alerting.

## Target Users

- a patient looking for the earliest available NFZ term
- a person helping a family member find a better term
- a user who wants to monitor a specific treatment category or location

## Core Value Proposition

TerminRadar NFZ monitors public NFZ queue data and notifies the user when a better treatment term appears.

## Product Boundaries

The application does:

- search public NFZ treatment queue data
- normalize external API responses
- let users save monitored searches
- build historical snapshots from current public data
- detect meaningful improvements
- send alert notifications

The application does not:

- book medical visits
- provide medical advice
- replace official NFZ services
- store sensitive medical history
- process diagnosis or treatment recommendations

## Success Criteria

After the demoable MVP, a reviewer should be able to:

- run the project locally with Docker
- search NFZ queues through the frontend
- create a user account
- save a monitored search
- see background checks create snapshots
- see an alert generated when a better term is detected
- read documentation explaining the technical decisions

## Portfolio Positioning

This project is designed to support a fullstack TypeScript profile:

> Strong React/Next.js experience with refreshed and expanded NestJS backend skills.

It should show practical mid-level behavior: scoped delivery, typed contracts, error handling, background jobs, testable logic, documentation and trade-off awareness.

