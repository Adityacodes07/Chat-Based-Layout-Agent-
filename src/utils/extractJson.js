export function extractJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    const match = text.match(/```json\s*([\s\S]*?)```/) ||
                  text.match(/```\s*([\s\S]*?)```/);

    if (match) {
      return JSON.parse(match[1]);
    }

    throw new Error('Unable to parse JSON from AI response.');
  }
}