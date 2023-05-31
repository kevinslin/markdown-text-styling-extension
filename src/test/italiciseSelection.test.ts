import { italiciseSelection } from '../commands/italiciseSelection';
import * as assert from 'assert';
import { suite, test } from 'mocha';

suite('italiciseSelection', () => {
  test('should wrap text in asterisks', () => {
    const input = 'hello world';
    const expectedOutput = '*hello world*';
    const result = italiciseSelection(input);
    assert.strictEqual(result, expectedOutput);
  });

  test('should not modify text already wrapped in asterisks', () => {
    const input = '*hello world*';
    const expectedOutput = '*hello world*';
    const result = italiciseSelection(input);
    assert.strictEqual(result, expectedOutput);
  });

  test('should not modify text wrapped in double asterisks', () => {
    const input = '**hello world**';
    const expectedOutput = '**hello world**';
    const result = italiciseSelection(input);
    assert.strictEqual(result, expectedOutput);
  });

  test('should not modify text wrapped in triple asterisks', () => {
    const input = '***hello world***';
    const expectedOutput = '***hello world***';
    const result = italiciseSelection(input);
    assert.strictEqual(result, expectedOutput);
  });
});