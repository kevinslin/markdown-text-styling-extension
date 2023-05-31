import Mocha from 'mocha';
import { glob } from 'glob';
import * as path from 'path';
import * as assert from 'assert';

const mocha = new Mocha({
  ui: 'tdd',
  color: true,
});

const testsRoot = path.resolve(__dirname, '..');

glob('**/**.test.js', { cwd: testsRoot }, (err: Error | null, files: string[]) => {
  if (err) {
    console.error(err);
    return;
  }

  files.forEach((f) => mocha.addFile(path.resolve(testsRoot, f)));

  try {
    mocha.run((failures: number) => {
      if (failures > 0) {
        assert.fail(`${failures} tests failed.`);
      }
    });
  } catch (err) {
    console.error(err);
    assert.fail('Error running tests');
  }
});