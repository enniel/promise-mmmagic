'use strict'

/**
 * promise-mmmagic
 *
 * (c) Evgeny Razumov <razumov.evgeni@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const methods = require('./methods')

const proxyHandler = exports = module.exports = {}

proxyHandler.get = (target, name) => {
  return methods[name](target)
}
