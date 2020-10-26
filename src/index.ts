import "harmony-reflect";
import mmm from "mmmagic";

import type { Magic as MMMMagic } from "mmmagic";

const constants = [
  "MAGIC_NONE",
  "MAGIC_DEBUG",
  "MAGIC_SYMLINK",
  "MAGIC_DEVICES",
  "MAGIC_MIME_TYPE",
  "MAGIC_CONTINUE",
  "MAGIC_CHECK",
  "MAGIC_PRESERVE_ATIME",
  "MAGIC_RAW",
  "MAGIC_MIME_ENCODING",
  "MAGIC_MIME",
  "MAGIC_APPLE",
  "MAGIC_NO_CHECK_TAR",
  "MAGIC_NO_CHECK_SOFT",
  "MAGIC_NO_CHECK_APPTYPE",
  "MAGIC_NO_CHECK_ELF",
  "MAGIC_NO_CHECK_TEXT",
  "MAGIC_NO_CHECK_CDF",
  "MAGIC_NO_CHECK_TOKENS",
  "MAGIC_NO_CHECK_ENCODING",
];

type MagicPath = string;
type Mask = number;
type Args = Mask | [MagicPath, Mask];

class Magic {
  magic: MMMMagic;

  constructor(...args: undefined[] | Args[]) {
    // @ts-expect-error
    this.magic = new mmm.Magic(...args);
  }

  detectFile(path: string) {
    return new Promise((resolve, reject) => {
      this.magic.detectFile(path, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  detect(data: Buffer) {
    return new Promise((resolve, reject) => {
      this.magic.detect(data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}

export default new Proxy(Magic, {
  // @ts-expect-error
  get(target: T, name: string) {
    // @ts-expect-error
    if (constants.includes(name) && mmm[name]) {
      // @ts-expect-error
      return mmm[name];
    }

    return target[name];
  },
});
