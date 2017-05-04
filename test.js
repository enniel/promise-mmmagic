'use strict'

/**
 * promise-mmmagic
 *
 * (c) Evgeny Razumov <razumov.evgeni@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const Magic = require('./')
const mmm = require('mmmagic')
const fs = require('fs')
const expect = require('chai').expect

const magicFile = 'node_modules/mmmagic/src/binding.cc'

describe('promise-mmmagic', () => {
  it('detectFile - Normal operation, mime type', (done) => {
    const magic = new Magic(mmm.MAGIC_MIME_TYPE)
    magic
      .detectFile(magicFile)
      .then(result => {
        expect(result).to.equal('text/x-c++')
        done()
      })
      .catch(error => {
        done(error)
      })
  })

  it('detect - Normal operation, mime type', (done) => {
    const buffer = fs.readFileSync(magicFile)
    const magic = new Magic(mmm.MAGIC_MIME_TYPE)
    magic
      .detect(buffer)
      .then(result => {
        expect(result).to.equal('text/x-c++')
        done()
      })
      .catch(error => {
        done(error)
      })
  })
})
