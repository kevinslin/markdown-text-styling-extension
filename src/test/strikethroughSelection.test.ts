import { strikethroughSelection } from '../commands/strikethroughSelection';
import * as assert from 'assert';
import { describe, it } from 'mocha';

describe('strikethroughSelection', () => {
  it('should wrap the text with double tildes', () => {
    const input = 'example text';
    const expectedOutput = '~~example text~~';
    const result = strikethroughSelection(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should not modify an empty string', () => {
    const input = '';
    const expectedOutput = '';
    const result = strikethroughSelection(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should handle text with special characters', () => {
    const input = 'example &^%$#@! text';
    const expectedOutput = '~~example &^%$#@! text~~';
    const result = strikethroughSelection(input);
    assert.strictEqual(result, expectedOutput);
  });
});