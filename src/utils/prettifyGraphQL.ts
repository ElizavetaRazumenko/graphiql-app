export default function prettifyGraphQL(str: string) {
  let result = '';
  let indentation = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '{') {
      result += '{\n';
      indentation += 2;
      result += ' '.repeat(indentation);
    } else if (str[i] === '}') {
      result += '\n';
      indentation -= 2;
      result += ' '.repeat(indentation);
      result += '}';
    } else if (str[i] === ',') {
      result += ',\n';
      result += ' '.repeat(indentation);
    } else {
      result += str[i];
    }
  }

  return result;
}
