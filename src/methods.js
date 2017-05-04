'use strict'

/**
 * promise-mmmagic
 *
 * (c) Evgeny Razumov <razumov.evgeni@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const methods = exports = module.exports = {}

methods.detectFile = target => {
  return path => {
    return new Promise((resolve, reject) => {
      target.magic.detectFile(path, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}

methods.detect = target => {
  return data => {
    return new Promise((resolve, reject) => {
      target.magic.detect(data, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    })
  }
}
