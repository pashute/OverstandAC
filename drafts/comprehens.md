# OverstandAC Artificial Comprehension – The Core Idea

## Vision

**OverstandAC** Artificial Comprehension is a reasoning engine that **grows and evolves its own representations** of a problem, and reasons the way a
human does: it focuses on one kind of information at a time, bets on the most promising view, builds its understanding step by step, and pursues human guidance and assistance.

OverstandAC has two parts:

**overGuard:** An intelligence guard, that keeps the comprehension process on track, constrains and guides it to use correct and proven tools for known paths of knowledge, determined by context. For example it will use established math engines, logic and constraint solvers, or search engines, and even standard AI, depending on the task at hand, assuring verifiable confirmed and comprehensive coherent content, aligned with the requester's meaning.

**overStand:** On top of these, the artificial comprehension brain adds a new layer of evolving representations guided by attention and comparison. Each representation, is a "Comprehension Base" called an Overstand **Comprehen**.  

The modular distributed comprehens are loaded into the workspace and memory ad-hoc per context, and serve as a replacement for LM AI. Instead, every topic has its  own knowledge representation of procedures and content, with human concept layers called **Overstand Aspects** connecting between the entities of that field. 

Working in parallel on several aspects and with several `Comprehens` in parallel the various task results are consolidated and an evolving result is construed.

Always self aware of its own replies and representations, OverstandAC updates its own stored representations along with its new experiences for knowledge improvement and personalized interaction.

Note: The comprehension layers (Overstand Aspects - named dense vectors) are created in three ways: 

1. **Forced aspects:** 

Some of the Overstand Aspects are pre-configured rather than learned dynamically. These aspects are assigned predefined names and integrated into the Comprehension-Base Aspect layer in advance, building the meaning into the architecture, from paradigms and notions found in the raw information, or in the human requests and responses throughout the thread of discussion.

This is similar to Concept Bottleneck Models in AI, except that in Overstand, we use rigidly evolving computed models, rather than automatic "blindly" trained models.

1. **Searched aspects:** While a model is being built from known content and explicit relationships, dedicated research procedures search for the existence of other known relationships or aspects in the model as an outcome of earlier relationship and aspect definitions. 

2. **Discovered aspects: ** Along with known aspects the search also analyzes the entity relationships and may find new novel yet un-named relationships, attempting to interpret them with human understandable names.

## OverGuard and the choice of tools

Once on a task (responding to a prompt or a discussion, after it was given a preliminary analysis of the topics) the brain orchestrator begins searching its `Experience Comprehends`, (its database of topics and fields of knowledge that it knows how to access, along with its set of procedures to use with that knowledge) for the right representations and best available tools for a good response.

For example:  A math question may include **Math engines** for symbolic algebra and equation solving,  **Logic and constraint solvers** for deduction, verification and systematic search, or **Search engines and algorithms** for exploring possibilities efficiently.

The evolving representation layer directs these engines, choosing what to look at and which engine to apply in what sequence or procedure.


## Comprehension Base 1: Early-reader stories

The first proof of concept applies the mechanism to language. The system grows a **small comprehension base** containing **representations** of a toddler's story and **detailed simple descriptions** of the pictures. 

We start with **a first-grade reader vocabulary**.

Around that we begin building representations, from answers given to our questions, and from the words in the questions themselves.

- A lexicon of tip-of-tongue words.
- A lexicon of all the story words.
- A lexicon of myself and my environment. Imaginary and real. Who is reading the story. What voice. Does he look anything like Dad in the book? (No. He has a beard)
- Feelings. Body responses. Expected reactions to feelings. Interactions. Scenarios.
- A lexicon of the toddler's vocabulary, of phonemes,
- of phonetic sounds and rhymes
- of categories
- of other entities and aspects (entity relations) as we read the story again and again with different perspectives and questions, within the chat.

This showcases the overstand approach of multiple representations, focused attention, betting on promising views, and growth over time, hopefully producing the comprehension of a story.

It will be tested and taught first by humans, then assisted by AI through the chat, and while updating this documentation and the code itself. 



## An advanced model case: Sudoku

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

Like a human solver, the system will work with focus. At each step it:

- attends to **one representation at a time**,
- estimates which representation is most **promising** right now (with the least number of unknowns, and the  highest number of solved parts)
- **bets** on that view and works in it, and
- shifts attention to the next most promising view as needed.

Until the puzzle is solved.

### 3. From representations to systematic solving

Once the representations are in place, the system builds a **systematic search procedure** that reaches the solution, starting from **existing information** – e.g. take a common digit and complete all 9 of its locations, or **eliminations** – mark were a digit is ruled out in a series of cells, to narrow down where the digit does belong.  

### 4. Growing and evolving

The representations, the attention strategy and the betting strategy are **grown and evolved**: the system develops, tests and keeps the representations and strategies that lead to solutions. While noting what to avoid.


## Comprehension Base 3: Hebrew manuscript deciphering and analysis

The third comprehension base applies the mechanism to Hebrew
manuscripts, through a new kind of OCR and analysis pipeline:

### New OCR pipeline, developed along with a human team: 

 Creating a new paradigm of image breakdown and analysis allowing new tools to easily access the raw image, evolving and creating a system for actual image comprehension, with reasoning.

For this layer we use ad hoc tools that we build ourselves, with algorithms and perhaps existing tools like text area detection, lines and letter property analysis, codecology etc.



1. **Image area detection and description** taking from toddler project... 
1.1. **Text area detection** – finds text areas and suspected text areas in the manuscript image. This is done with a tool of choice, to be discussed in the chat using AI, or by creating a DSP tool ad hoc.
1.2. **Letter evaluation** – identifies each letter, rates how clearly it reads, gives the possible interpretations when its not completely clear.
1.3. **Script and font comparison** – compares the handwriting and letter-forms with known scripts by known writers or scribes.
1.4 **Codecology**: – evaluates the physical manuscript: layout, ruling, page structure, material and production features.

### LM replacement for attempting an understanding of the text:

2. **Text analysis**
2.1 **Word decisions** – determines the most likely words, weighing letter clarity, context and vocabulary.
2.2 **Synoptic comparison** – aligns the text with other known versions and highlights agreements and variants.
2.3 **Hermeneutics** – explores the possible interpretations and meanings of the text.

Each stage is its own representation, and the system applies the same attention and betting approach across them, some in parallel, some with feedback from others, moving between letters, words, script, layout and parallel versions to build the strongest reading, all the time consulting with the user. 

#### Teaching: Growing and Evolving the Talmudic comprehension base: 

- Multilevel evolving study of talmudic discussions: tracing sources, accessing Manuscript versions, understanding periods and literature, using syntactical and practical talmudic structures, following the path to the biblical or sage literary source, understanding commentary (hermeneutics), using online websites and tools hachi garsinan, wikitext, sefaria, maagarim, ktiv, manuscript libraries, hebrewbooks, otzar, jstor, etc. reading articles.


## Development partnership

Growth and development happen **in close collaboration with a human assistant**, who is also the developer. The human guides, reviews and confirms the system's new representations and readings, and the system learns from each round of feedback.