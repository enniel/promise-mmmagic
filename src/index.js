'use strict'

/**
 * promise-mmmagic
 *
 * (c) Evgeny Razumov <razumov.evgeni@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

require('harmony-reflect')
const Magic = require('mmmagic').Magic
const proxyHandler = require('./proxyHandler')

module.exports = class {
  constructor (...args) {
    this.magic = new Magic(...args)
    return new Proxy(this, proxyHandler)
  }
}
