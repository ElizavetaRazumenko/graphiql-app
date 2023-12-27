function removeCommentLines(query: string) {
  const lines = query.split('\n');
  const filteredLines = lines.filter((line) => !line.trim().startsWith('#'));
  return filteredLines.join('\n');
}

export default removeCommentLines;
