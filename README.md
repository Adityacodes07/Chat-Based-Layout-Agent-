# AI Layout Agent
LIVE LINK = https://chat-based-layout-agent-two.vercel.app

AI Layout Agent is a chat-based design editing application that allows users to modify a structured layout JSON using natural language instructions. The application interprets commands such as moving elements, resizing components, and changing the canvas aspect ratio, then returns the updated JSON in real time.

This project was built as part of the Compra AI Engineer assignment to demonstrate chat interface design, LLM integration, layout reasoning, and safe JSON transformation.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js 18 or higher
- npm (comes with Node.js)
- OpenRouter API key (free tier)

Create a free API key at:
https://openrouter.ai

---


---

## How to Use

Enter natural language instructions in the chat panel. The AI interprets the command and updates the layout JSON.

### Example Prompts

- Move the headline to the top
- Make the headline smaller
- Move the offer badge higher
- Keep the product large
- Convert this design to 9:16
- Center the footer text

The updated layout JSON appears in the right-hand panel after each instruction.

---

## Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- React Router DOM

### AI Integration
- OpenRouter API
- openai/gpt-oss-20b:free model

### Utilities
- JavaScript
- JSON parsing and validation

### Deployment
- Vercel (optional)

---

## Project Structure

```text
src/
├── assets/
│   └── design.json
├── components/
│   ├── ChatInput.jsx
│   ├── ChatMessage.jsx
│   ├── ChatPanel.jsx
│   ├── JsonViewer.jsx
│   ├── LoadingOverlay.jsx
│   └── Developer.jsx
├── constants/
│   └── defaultMessages.js
├── services/
│   └── openRouterService.js
├── utils/
│   ├── promptBuilder.js
│   └── extractJson.js
├── App.jsx
├── main.jsx
└── index.css

---

# APPROACH.md

```md
# Approach Note

## 1. Prompt Design Strategy

The application sends the current layout JSON and the user instruction to the language model in a structured prompt. The prompt includes:

- Clear instructions to return only valid JSON
- Semantic mapping between human-friendly terms and node IDs
- The current layout JSON
- The latest user instruction

This approach allows the model to understand commands such as “headline,” “offer badge,” and “product image” without needing to infer element identities from raw IDs.

---

## 2. Safe JSON Transformation

The AI response is parsed using a dedicated `extractJson()` utility. This utility:

1. Attempts direct `JSON.parse()`
2. Extracts JSON from Markdown code blocks if present
3. Throws a descriptive error if parsing fails

The application preserves the previous layout until valid JSON is returned, ensuring that malformed responses do not corrupt the state.

---

## 3. Conversation Context Handling

The application maintains the latest updated layout in React state. Each new instruction is applied to the most recent version of the JSON rather than the original file.

This enables follow-up instructions such as:

1. Move the headline to the top
2. Make the headline smaller
3. Convert this design to 9:16

Each instruction builds on the results of the previous transformation.

---

## 4. Trade-offs and Design Decisions

### Using OpenRouter
Google Gemini was initially considered, but quota limitations prevented consistent access. OpenRouter was chosen because it offers free models and an OpenAI-compatible API.

### Sending the Full JSON
The entire layout JSON is included in each request to keep the implementation straightforward and ensure deterministic context, at the cost of slower responses on free models.

### Frontend-Only Architecture
No backend was used to minimize complexity and align with the assignment requirements. Environment variables are managed using Vite.

---

## 5. Improvements with More Time

If more development time were available, the following enhancements would be added:

- Interactive visual canvas preview
- Undo and redo history
- Schema validation for returned JSON
- Streaming responses for improved UX
- Local rule-based fallback engine
- Export and download of transformed JSON
- Automated unit tests

---

## 6. Summary

The solution combines a React-based chat interface with LLM-powered JSON transformation. It emphasizes safe parsing, context preservation, and a clean user experience while remaining simple enough to complete within the assignment time limit.
