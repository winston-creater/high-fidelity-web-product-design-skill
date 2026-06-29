import { readText } from './fs-utils.mjs';

function parseScalar(value) {
  const trimmed = String(value).trim();
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;
  if (trimmed === 'null') return null;
  if (/^-?\d+(\.\d+)?$/.test(trimmed)) return Number(trimmed);
  return trimmed.replace(/^['"]|['"]$/g, '');
}

export function parseSimpleYaml(text) {
  const lines = text.split(/\r?\n/);
  const root = {};
  const stack = [{ indent: -1, value: root }];

  for (let raw of lines) {
    if (!raw.trim() || raw.trim().startsWith('#')) continue;
    const indent = raw.match(/^\s*/)[0].length;
    const line = raw.trim();

    while (stack.length > 1 && indent <= stack[stack.length - 1].indent) stack.pop();
    const parent = stack[stack.length - 1].value;

    if (line.startsWith('- ')) {
      // Minimal list support. Lists under keys are represented as arrays.
      const itemText = line.slice(2).trim();
      if (!Array.isArray(parent)) continue;
      if (itemText.includes(':')) {
        const obj = {};
        const [k, ...rest] = itemText.split(':');
        obj[k.trim()] = parseScalar(rest.join(':'));
        parent.push(obj);
        stack.push({ indent, value: obj });
      } else {
        parent.push(parseScalar(itemText));
      }
      continue;
    }

    const [keyPart, ...rest] = line.split(':');
    const key = keyPart.trim();
    const valueText = rest.join(':').trim();

    if (!valueText) {
      const nextContainer = {};
      parent[key] = nextContainer;
      stack.push({ indent, value: nextContainer });
    } else if (valueText === '[]') {
      parent[key] = [];
    } else if (valueText === '{}') {
      parent[key] = {};
    } else {
      parent[key] = parseScalar(valueText);
    }
  }

  // Second pass for common `tools` mapping works with this minimal parser.
  return root;
}

export function readConfig(filePath) {
  const text = readText(filePath);
  try {
    return JSON.parse(text);
  } catch {
    return parseSimpleYaml(text);
  }
}
