import { boldSelection } from '../commands/boldSelection';
import * as assert from 'assert';
import 'mocha';

describe('boldSelection', () => {
  it('should wrap the text in double asterisks', () => {
    const input = 'Hello, world!';
    const expectedOutput = '**Hello, world!**';
    const result = boldSelection(input);
    assert.strictEqual(result, expectedOutput);
  });

  it('should not modify text that is already bold', () => {
    const input = '**Hello, world!**';
    const expectedOutput = '**Hello, world!**';
    const result = boldSelection(input);
    assert.strictEqual(result, expectedOutput);
  });
});