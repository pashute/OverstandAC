# Overstand — attentive artificial comprehension

**Version:** 1.0.0

A rule-based reasoning controlled intelligent topic-specific modular responder with continuous human alignment and self improvement.

## Features

- **Steerable alignment:** Teaming with humans to study and resolve requests.
- **Traceable contextual branching:** Long term procedure and sequence follow-up.
- **Comprehension base modules:** Creating and loading field-specific modules.
- **Multimodality consolidation:** Translating and transforming between visual, textual, auditory, and other representations of information analysis and usage.

## Overstand Components

1. **Overdash** — The Overstand Dashboard and Chat interface (Android, React Native Expo).
2. **Overbrain** — Backend orchestrator of chat analysis, comprehension-base management, resolving and consolidating responses, and continuous improvement.
3. **ComprehensionBase** — Procedural modules with their data representations and projections.
4. **AttemtiOnTime** — Just-in-time modules with content swapped in and out as needed.

## Project Structure

```text
proj/
├── overdash/                  # Dashboard & chat interface (Android, React Native Expo)
│   ├── docs/
│   │   └── dev/
│   │       └── initialPrompt.md
│   ├── src/
│   ├── features/
│   └── testing/
│       ├── unit/
│       └── e2e/
│
├── overbrain/                 # Backend orchestrator
│   ├── docs/
│   │   └── dev/
│   │       └── initialPrompt.md
│   ├── src/
│   ├── features/
│   └── testing/
│       ├── unit/
│       └── e2e/
│
└── comprehension-base/        # Procedural modules, data representations & projections
    ├── docs/
    │   └── dev/
    │       └── initialPrompt.md
    ├── src/
    ├── features/
    └── testing/
        ├── unit/
        └── e2e/
```

## Folder Purposes

| Folder | Purpose |
|--------|---------|
| `docs/` | Development documentation; `dev/initialPrompt.md` is reserved for each project's founding prompt. |
| `src/` | Source code. |
| `features/` | Gherkin feature specifications. |
| `testing/unit/` | Unit tests. |
| `testing/e2e/` | End-to-end tests. |

No application code is included yet.
