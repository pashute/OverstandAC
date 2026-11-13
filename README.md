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

2. **overSmart** - the OverstandAC back end.
   Consists of two parts:  
   a. overGuard  - handling a smart chat that stays aligned, on track, comprehensive, truthful and logical. Independent of the Overstand comprehension brain. A set of separate procedures working in tandem to achieve those goals.  
   
   b. overStand - the Overstand comprehension brain and its environment.

2.1 **overGuard** - Protect and align chat flow and results
2.1.1 mainTrace - discussion thread representation. Chat is dealt with in parts, broken into separate topics and constrained paths, for analysis with dedicated contextual logic. 

2.1.2 overGuide - keep on track. Dictate the constraints and orchestrate the contextual paths. 
2.1.3 overView - check and verify logic and constraints
2.1.4 overTeam - check, verify and ensure human alignment

2.2 **overstand** - artificial comprehension
2.2.1 **AttentiOnTime** — Overstand base technology to run the parallel distributed procedures of Overbrain. AttentiOnTime are Just-in-time modules that have their content swapped in and out as needed.

2.2.2 **overbrain** — Core technology for using the comprehension bases:  Backend orchestrator of chat analysis, comprehension-base management, resolving and consolidating responses, and continuous improvement.

2.2.3 **comprehens** — Procedural modules with their data representations and projections. 

2.2.3.1 Toddler - an attempt at first grade comprehension with vocabulary, syntax, familiarity and feelings.

2.2.3.2 Sudoku - an attempt at human-like paths to solve sudoku with growing experience insights and methods, and finally, after training the advanced option to use computerized tools and create them itself to get a brute force solution.

(Eyeing chess further down the path.)

2.2.3.3 Hebrew Manuscript reading, teaming with humans.

- Creating a new paradigm of image breakdown and analysis allowing new tools to easily access the raw image, evolving and creating a system for actual image comprehension, with reasoning.

- Using ad hoc tools like text area detection, lines and letter property analysis, codecology etc. 

- Multilevel evolving study of talmudic discussions: tracing sources, accessing Manuscript versions, understanding periods and literature, using syntactical and practical talmudic structures, following the path to the biblical or sage literary source, understanding commentary (hermeneutics), using online websites and tools hachi garsinan, wikitext, sefaria, maagarim, ktiv, manuscript libraries, hebrewbooks, otzar, jstor, etc. reading articles.

## Project Structure

```text
projects/
├── 1.overDash/                       # 1. Dashboard & chat interface (Android, React Native Expo)
│   ├── docs/
│   │   └── dev/
│   │       └── initialPrompt.md
│   ├── src/
│   ├── features/
│   │   └── features.md
│   └── testing/
│       ├── unit/
│       └── e2e/
│
└── 2.overSmart/                      # 2. Overstand back end
    ├── 2.1.overGuard/                # 2.1 Protect and align chat flow (parent group, no docs/src/features/testing)
    │   ├── 2.1.1.mainTrace/          # Discussion thread representation
    │   ├── 2.1.2.overGuide/          # Keep on track; constraints and contextual paths
    │   ├── 2.1.3.overView/           # Check and verify logic and constraints
    │   └── 2.1.4.overTeam/           # Check, verify and ensure human alignment
    │
    └── 2.2.overStand/
        ├── 2.2.1.attentiOnTime/      # Just-in-time parallel modules, content swapped in and out
        │   ├── docs/
        │   │   └── dev/
        │   │       └── initialPrompt.md
        │   ├── src/
        │   ├── features/
        │   │   └── features.md
        │   └── testing/
        │       ├── unit/
        │       └── e2e/
        │
        ├── 2.2.2.overBrain/          # Backend orchestrator
        │   ├── docs/
        │   │   └── dev/
        │   │       └── initialPrompt.md
        │   ├── src/
        │   ├── features/
        │   │   └── features.md
        │   └── testing/
        │       ├── unit/
        │       └── e2e/
        │
        └── 2.2.3.comprehens/         # Procedural modules, data representations & projections
            ├── docs/
            │   └── dev/
            │       └── initialPrompt.md
            ├── src/
            │   └── core/
            ├── features/
            │   └── features.md
            └── testing/
                ├── unit/
                └── e2e/
```

Empty folders hold a `.gitkeep` so Git tracks them; the tree omits these placeholders.

## Folder Purposes

| Folder | Purpose |
|--------|---------|
| `docs/` | Development documentation; `dev/initialPrompt.md` is reserved for each project's founding prompt. |
| `src/` | Source code. |
| `features/` | `features.md`: the feature list and its hierarchy, names only, no details. Gherkin `.feature` files only in reverse engineering (see `DevelopNotes.md`). |
| `testing/unit/` | unit tests (see `DevelopNotes.md`) |
| `testing/e2e/` | End-to-end tests, (see `DevelopNotes.md`) |

No application code is included yet.
