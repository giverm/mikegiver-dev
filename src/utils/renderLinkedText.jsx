// Matches markdown-style links: [link text](url)
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

// Converts a string containing markdown-style links into an array of
// React elements (strings and <a> tags) that can be rendered directly.
// Also collapses whitespace so template literals with line breaks render cleanly.
export default function renderLinkedText(text) {
  // Collapse newlines and extra spaces from multi-line template literals
  const normalized = text.replace(/\s+/g, ' ').trim();
  const parts = [];
  let lastIndex = 0;

  for (const match of normalized.matchAll(LINK_PATTERN)) {
    // Push any plain text before this link
    if (match.index > lastIndex) {
      parts.push(normalized.slice(lastIndex, match.index));
    }

    // Push the link as a React <a> element
    // match[1] = link text, match[2] = URL
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
      >
        {match[1]}
      </a>,
    );

    lastIndex = match.index + match[0].length;
  }

  // Push any remaining text after the last link
  if (lastIndex < normalized.length) {
    parts.push(normalized.slice(lastIndex));
  }

  return parts;
}
