import {Magic} from './index';
import fs from 'fs';
import {expect} from 'chai';

const magicFile = 'node_modules/mmmagic/src/binding.cc';

describe('promise-mmmagic', () => {
  it('detectFile - Normal operation, mime type', (done) => {
    const magic = new Magic(Magic.MAGIC_MIME_TYPE);

    magic
      .detectFile(magicFile)
      .then((result: string) => {
        expect(result).to.equal('text/x-c++');
        done();
      })
      .catch((error: Error) => {
        done(error);
      });
  });

  it('detect - Normal operation, mime type', (done) => {
    const buffer = fs.readFileSync(magicFile);
    const magic = new Magic(Magic.MAGIC_MIME_TYPE);

    magic
      .detect(buffer)
      .then((result: string) => {
        expect(result).to.equal('text/x-c++');
        done();
      })
      .catch((error: Error) => {
        done(error);
      });
  });
});
