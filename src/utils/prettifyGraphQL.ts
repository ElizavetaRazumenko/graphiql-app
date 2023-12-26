export default function prettifyGraphQL(query: string) {
  const lines = query.split('\n');
  const indents: number[] = [];

  lines.forEach((line, index) => {
    const openingBraces = (line.match(/{/g) || []).length;
    const closingBraces = (line.match(/}/g) || []).length;

    const previousIndent = index > 0 ? indents[index - 1] : 0;

    const currentIndent = previousIndent + openingBraces - closingBraces;
    indents.push(currentIndent);
  });

  const formattedQuery = lines
    .map((line, index) => {
      const indent = ' '.repeat(indents[index] * 2);
      return (index === 0 ? '' : indent) + line.trim();
    })
    .join('\n');

  return formattedQuery;
}
