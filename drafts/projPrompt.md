create a public repo called OverstandAC with a readme v1.0.0 Saying:

# Overstand - attentive artificial comprehension 
A rule-based reasoning controlled intelligent topic-specific modular responder with continuous human alignment and self improvement. 

 Features:  
- Steerable alignment: Teaming with humans to study and resolve requests.
- Traceable contextual branching: Long term procedure and sequence follow-up. 
- Creating and loading field-specific comprehension base modules 
- Multimodality consolidation - translating and transforming between visual textual auditory and other representations of information analysis and usage. 

# Overstand Components 

1. Overdash - The Overstand Dashboard and Chat interface (Android, React Native Expo)

2. Oversmart - The Overstand back end. Consists of two parts:  

    1. OverGuard - manage the information flow. Keep on track. Keep verifiable. Keep aligned. Keep comprehensive, coherent, reasonable. Keep controllable and restricted.

    2. OverStand

       2.1 AttemtiOnTime - Just in time parallel modules with content swapped in and out for managing, preparing, loading and unloading the working comprehens. 

       2.2 OverBrain - Backend orchestrator of chat analysis, comprehension-base management, response resolving and consolidation, and continuous improvement.

       2.3 Comprehens - procedural modules with their data representations and projections. At the first stage we will build them in code. As we advance we'll move them into Comprehension base graphs and store them in the distributed comprehension base database(s?).

      

````
# OverstandAC – File Structure

```
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

## Folders in each project

| Folder | Purpose |
|--------|---------|
| `docs/` | Development documentation (`dev/initialPrompt.md`: the founding prompt for the project) |
| `src/` | Source code |
| `features/` | `features.md`: the feature list and its hierarchy, names only, no details. Gherkin `.feature` files only in reverse engineering, after a section is working and approved and the human requests them (see `DevelopNotes.md`) |
| `testing/unit/` | Unit tests, written only in reverse engineering, on the same conditions as Gherkin |
| `testing/e2e/` | End-to-end tests, on the same conditions as Gherkin |

`2.1.overGuard` is a parent group: it has no `docs/`, `src/`, `features/` or `testing/`. Empty folders hold a `.gitkeep`.
````
create a public repo called OverstandAC
with a readme v1.0.0 
Saying:  
```
# Overstand - attentive artificial comprehension 
A rule-based reasoning controlled intelligent topic-specific modular responder with continuous human alignment and self improvement. 

 Features:  
- Steerable alignment: Teaming with humans to study and resolve requests.
- Traceable contextual branching: Long term procedure and sequence follow-up. 
- Creating and loading field-specific comprehension base modules 
- Multimodality consolidation - translating and transforming between visual textual auditory and other representations of information analysis and usage. 

# Overstand Components 

1. Overdash - The Overstand Dashboard and Chat interface (Android, React Native Expo)

2. Overbrain - Backend orchestrator of chat analysis, comprehension-base management, resolving  and consolidating responses and continuous improvement 

3. ComprehensionBase - procedural modules with their data representations and projections.

4. AttemtiOnTime - Just in time modules with content swapped in and out for 

only make the file structure and the readme. do not write any code yet we'll do that one by one.  with claude code. 
 
only make the file structure and the readme. do not write any code yet we'll do that one by one.  with claude code. 
