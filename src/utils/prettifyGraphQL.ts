export default function prettifyGraphQL(code: string) {
  const indentSize = 2;

  const lines = code.split('\n');

  const trimmedLines = lines.map((line) => line.trim());

  const minIndent = trimmedLines.reduce((min, line) => {
    if (!line) return min;
    const leadingWhitespace = line.match(/^\s*/)[0];
    return Math.min(min, leadingWhitespace.length);
  }, Infinity);

  const prettifiedCode = trimmedLines
    .map((line) => {
      if (!line) return line;
      return (
        ' '.repeat(line.match(/^\s*/)[0].length - minIndent + indentSize) + line
      );
    })
    .join('\n');

  return prettifiedCode;
}
