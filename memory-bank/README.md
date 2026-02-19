# Memory Bank Usage Guide

## Directory Structure
```
memory-bank/
├── projectbrief.md     # Goals, constraints, stakeholders
├── activeContext.md    # Current work-in-progress notes
├── SESSION.md          # Append-only session log with timestamps
├── master-plan.md      # Milestones and roadmap
├── README.md           # This file
├── logs/               # Daily session logs (YYYY-MM-DD.md)
├── archive/            # Archived sessions (>20 entries)
└── plans/              # Implementation plans and reference docs
```

## Read Order (Session Start)
1. projectbrief.md
2. activeContext.md
3. SESSION.md
4. README.md

## Update Protocol
- **projectbrief.md**: Update only definition-of-done or scope changes
- **activeContext.md**: Update real-time with blockers/progress
- **SESSION.md**: Append new session entry (do NOT edit existing entries)
- **master-plan.md**: Update milestones as completed

## Session Logging
Sessions logged as: `YYYY-MM-DD — vX.Y.Z`
- Format: Date in ISO 8601, version semantic (major.minor.patch)
- Location: memory-bank/SESSION.md (append-only)
- Archive when SESSION.md exceeds 20 entries

## Lesson Extraction
Post-session, extract 1–3 actionable lessons as:
- `[P0][LESSON]` for permanent insights
- `[P1][LESSON][expires:YYYY-MM-DD]` for time-bound lessons
Add to projectbrief.md Lessons Learned section.
