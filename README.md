# promise-mmmagic

Add `Promise` support for [mmmagic](https://github.com/mscdex/mmmagic).

## Installation

```sh
npm install @anthonynichols/promise-mmmagic
```
or

```sh
yarn add @anthonynichols/promise-mmmagic
```

## Example

```js
const fs = require('fs')
const Magic = require('promise-mmmagic')

const magicFile = 'node_modules/mmmagic/src/binding.cc'

const magic = new Magic(Magic.MAGIC_MIME_TYPE)
// file path
magic
  .detectFile(magicFile)
  .then(result => {
    // text/x-c++
    console.log(result)
  })
// buffer
const buffer = fs.readFileSync(magicFile)
magic
  .detect(buffer)
  .then(result => {
    // text/x-c++
    console.log(result)
  })
```

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
