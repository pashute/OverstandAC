Draft files: 

projPrompt

atentiOnTime - parallel procedure loading technology
overBrain flow diagram
comprehensionBase vision


# jotted down

the front end is run on local host.
the "reasoning" back-end has to deal with various situations. i'll give 3 examples after explaining how the overal reasoning app works.
we'll skip discussing the CBM KG (concept bottleneck knowledge graph) insertion just mentioning that we'll be using rdflib.js with 384 dimensions .

The front end gets a prompt. calls an ai to summarize: 1. how many questions/topics/fields of knowledge and what they are. 2. the kind of request: an open question/choice online/experience action/discuss.

In parallel it calls a rule based GOFAI (another backend called to get terms and expected dimension names, by closing in on the topic area and spreading out to associated fields of knowledge.



the reasoning back end is NOT an LLM but services with code that was created ad hoc (by ai 
