Todo.md

- [v] 11.13.2026 04:25: After first draft of overDash (placeholders)
runs ok on web.

Next batch. Some updates: 

- [v] Version: one constant `APP_VERSION = '0.1.1'` at the top of `projects/1.overDash/src/app/App.tsx`. The header and the web page title both read it.
- [v] Page title: `Overdash v0.1.1`
- [v] Header: `Overdash - the Overstand chat and dashboard. v0.1.1`
- [v] Tabs: Chat on the left, opens by default. Dashboard on the right.

Chat tab:
- [v] Discussion table with three column headers: `Chat` | `Topics` | `Comprehens`. `Topics` and `Comprehens` stay empty.
- [v] Messages in the `Chat` column, above the text box. Each message is a green cartoon speech bubble with a small tail on its left side, showing it came from the human.
- [v] Text box below the messages, with a send button.
- [v] On send: the typed text is added to the top of the messages and the text box is cleared.
- [v] On send: a styled error box below the text box shows `Not Implemented yet`. The error is caught in a try/catch in the send handler.

Dashboard tab:
- [v] Top-left: a `Choose comprehens` button. It opens a popup titled `Choose comprehen` that says `No active comprehens listed.` for now.
- [v] Next to it: a view switch, Network | Word cloud | List. Each view is a placeholder for now.
- [v] A big `+` button adds a view under the existing ones.
- [v] Right side, first column: Details, one overview per comprehen. Placeholder text.
- [v] Right side, second column: Conclusions, insights from the comprehen. Placeholder text.

Checks:
- [v] `npx tsc --noEmit` passes.
- [ ] `npm run web` runs, and the chat and dashboard tabs show as described.



