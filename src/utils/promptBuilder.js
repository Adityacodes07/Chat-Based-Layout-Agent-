export function buildPrompt(layoutJson, instruction) {
  return `
You are an expert design layout assistant.

Your task is to modify the given design JSON based on the user's instruction.

Rules:
1. Return ONLY valid JSON.
2. Do not include markdown.
3. Preserve all fields.
4. Modify only the necessary values.
5. Keep the JSON structure unchanged.

Semantic mapping:
- Headline = text_1778486306230_8
- Subtitle = text_1778486136643_7
- Product Image = img_1778489515746_17
- Offer Badge Circle = circle_1778488914968_15
- Offer Badge Text = text_1778489078397_16
- Footer Text = text_1778486004640_6
- Artboard = artboard_1778485662755_3

Current Layout JSON:
${JSON.stringify(layoutJson, null, 2)}

User Instruction:
${instruction}
`;
}