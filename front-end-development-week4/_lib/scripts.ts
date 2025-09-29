export function truncate(text: string, maxLength = 120): string {
  if (!text) return "";
  if (text.length <= maxLength) return text;

  // Find the last space before the maxLength to avoid cutting words
  const truncated = text.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  // If we found a space and it's not too close to the beginning, cut there
  if (lastSpaceIndex > maxLength * 0.5) {
    return truncated.slice(0, lastSpaceIndex).trimEnd() + " ...";
  }

  // Fallback to the original behavior if no good space found
  return truncated.trimEnd() + "...";
}

export function formatPrice(value: number | string): string {
  const num = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(num)) return "0";
  const formatted = num.toFixed(2).replace(".", ",");
  return formatted.endsWith(",00") ? formatted.slice(0, -3) : formatted;
}
