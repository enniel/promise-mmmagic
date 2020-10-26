import 'harmony-reflect';
import mmm from 'mmmagic';

export class Magic extends mmm.Magic {
  /** No flags (default for Windows) */
  static MAGIC_NONE = 0x000000;
  /** Turn on debugging */
  static MAGIC_DEBUG = 0x000001;
  /** Follow symlinks (default for *nix) */
  static MAGIC_SYMLINK = 0x000002;
  /** Look at the contents of devices */
  static MAGIC_DEVICES = 0x000008;
  /** Return the MIME type */
  static MAGIC_MIME_TYPE = 0x000010;
  /** Return all matches */
  static MAGIC_CONTINUE = 0x000020;
  /** Print warnings to stderr */
  static MAGIC_CHECK = 0x000040;
  /** Restore access time on exit */
  static MAGIC_PRESERVE_ATIME = 0x000080;
  /** Don't translate unprintable chars */
  static MAGIC_RAW = 0x000100;
  /** Return the MIME encoding */
  static MAGIC_MIME_ENCODING = 0x000400;
  /*(MAGIC_MIME_TYPE|MAGIC_MIME_ENCODING)*/
  static MAGIC_MIME = (0x000010|0x000400);
  /** Return the Apple creator and type */
  static MAGIC_APPLE = 0x000800;
  /** Don't check for tar files */
  static MAGIC_NO_CHECK_TAR = 0x002000;
  /** Don't check magic entries */
  static MAGIC_NO_CHECK_SOFT = 0x004000;
  /** Don't check application type */
  static MAGIC_NO_CHECK_APPTYPE = 0x008000;
  /** Don't check for elf details */
  static MAGIC_NO_CHECK_ELF = 0x010000;
  /** Don't check for text files */
  static MAGIC_NO_CHECK_TEXT = 0x020000;
  /** Don't check for cdf files */
  static MAGIC_NO_CHECK_CDF = 0x040000;
  /** Don't check tokens */
  static MAGIC_NO_CHECK_TOKENS = 0x100000;
  /** Don't check text encodings */
  static MAGIC_NO_CHECK_ENCODING = 0x200000;

  detectFile(path: string) {
    return new Promise((resolve, reject) => {
      super.detectFile(path, (err, result) => {
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
      super.detect(data, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
