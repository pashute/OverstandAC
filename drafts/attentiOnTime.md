# attentiOnTime

A program is a group of small **natural-language procedures** that run in parallel and work together toward a goal. Only **7 are active at a time**, in warm, waiting runners. When focus shifts, the current procedure is saved and swapped out, and the next one is loaded together with data **prefetched** close to it. Each procedure is **compiled to JavaScript just in time** by an LLM, then cached. The effect is one "thought page" in view at a time; everything else is stored and can be recalled instantly.

## Backend stack (all free and open source)

| Layer | Choice |
|---|---|
| Language/runtime | **Node.js** (JavaScript) |
| Procedures as actors | **Dapr** virtual actors (JS SDK), idle timeout for eviction |
| Durable long processes | **Dapr Workflow** |
| Actor state, cache, pub/sub | **Valkey** (NATS JetStream later if messaging grows) |
| Main database | **PostgreSQL** with **pgvector** for semantic prefetch (optionally **Apache AGE** for graphs) |
| Natural language → JS compiler | Local open-weight model via **Ollama**, output cached by hash of the procedure text |
| Sandbox for generated code | **isolated-vm** |
| Tracing | **OpenTelemetry** + Jaeger/Zipkin |
| Deployment | Dapr self-hosted → **Docker Compose** on one machine you own → **k3s** if you need more machines |