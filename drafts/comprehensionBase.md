# OverstandAC Comprehension-Bases – The Core Idea

## Vision

OverstandAC Comprehension-Bases is a reasoning engine that **grows and
evolves its own representations** of a problem and reasons the way a
human does: it focuses on one kind of information at a time, bets on
the most promising view, and builds understanding step by step.

It stands on a strong foundation of proven tools: established math
engines, logic and constraint solvers, and search engines. On top of
these, it adds a new layer: evolving representations guided by
attention and betting.

## Foundation: existing engines

OverstandAC Comprehension-Bases uses the best available engines as its
building blocks:

- **Math engines** for symbolic algebra and equation solving
- **Logic and constraint solvers** for deduction, verification and
  systematic search
- **Search engines and algorithms** for exploring possibilities
  efficiently

The evolving representation layer directs these engines, choosing what
to look at and which engine to apply.

## The model case: Sudoku

Sudoku is the testbed for developing and demonstrating the mechanism.

### 1. Multiple representations

The system builds several views of the same puzzle, each focused on
one kind of information:

- **Rows** – the 9 horizontal lines
- **Columns** – the 9 vertical lines
- **Tiles** – the 9 boxes of 3×3
- **Trios** – the 3-cell segments where a row or column crosses a tile
- **Digits** – each digit 1–9 as its own view: where it is placed,
  where it can go, and its eliminations

### 2. Human-like attention and betting

Like a human solver, the system works with focus. At each step it:

- attends to **one representation at a time**,
- estimates which representation is most **promising** right now,
- **bets** on that view and works in it, and
- shifts attention to the next most promising view as needed,

until the puzzle is solved.

### 3. From representations to systematic solving

Once the representations are in place, the system builds a
**systematic search procedure** that reaches the solution, starting
from:

- **existing information** – e.g. take a common digit and complete
  all 9 of its locations, or
- **eliminations** – work from the cells where a digit is ruled out
  to narrow down where it belongs.

### 4. Growing and evolving

The representations, the attention strategy and the betting strategy
are **grown and evolved**: the system develops, tests and keeps the
representations and strategies that lead to solutions.

## Comprehension Base 1: Early-reader stories

The first proof of concept applies the mechanism to language. The
system grows a **small comprehension base** containing:

- **representations of a toddler's story**,
- **detailed, simple descriptions of the story's pictures**, and
- **a first-grade reader vocabulary**.

This shows the same approach (multiple representations, focused
attention, betting on promising views, and growth over time) producing
comprehension of a story.

## Comprehension Base 2: Hebrew manuscript deciphering and analysis

The second comprehension base applies the mechanism to Hebrew
manuscripts, through a new kind of OCR and analysis pipeline:

1. **Text area detection** – finds text areas and suspected text
   areas in the manuscript image.
2. **Letter evaluation** – identifies each letter and rates how
   clearly it reads.
3. **Script and font comparison** – compares the handwriting and
   letterforms with known scripts and hands.
4. **Codicology** – evaluates the physical manuscript: layout, ruling,
   page structure, material and production features.
5. **Word decisions** – determines the most likely words, weighing
   letter clarity, context and vocabulary.
6. **Synoptic comparison** – aligns the text with other known versions
   and highlights agreements and variants.
7. **Hermeneutics** – explores the possible interpretations and
   meanings of the text.

Each stage is its own representation, and the system applies the same
attention and betting approach across them, moving between letters,
words, script, layout and parallel versions to build the strongest
reading.

## Development partnership

Growth and development happen **in close collaboration with a human
assistant**, who is also the developer. The human guides, reviews and
confirms the system's new representations and readings, and the system
learns from each round of feedback.