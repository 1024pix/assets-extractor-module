# assets-extractor-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Github Actions CI][github-actions-ci-src]][github-actions-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Download remote files to put it in the generated build

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `assets-extractor-module` dependency to your project

```bash
yarn add assets-extractor-module # or npm install assets-extractor-module
```

2. Add `assets-extractor-module` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'assets-extractor-module',

    // With options
    ['assets-extractor-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Team Pix <https://github.com/1024pix>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/assets-extractor-module/latest.svg
[npm-version-href]: https://npmjs.com/package/assets-extractor-module

[npm-downloads-src]: https://img.shields.io/npm/dt/assets-extractor-module.svg
[npm-downloads-href]: https://npmjs.com/package/assets-extractor-module

[github-actions-ci-src]: https://github.com/1024pix/assets-extractor-module/workflows/ci/badge.svg
[github-actions-ci-href]: https://github.com/1024pix/assets-extractor-module/actions?query=workflow%3Aci

[codecov-src]: https://img.shields.io/codecov/c/github/1024pix/assets-extractor-module.svg
[codecov-href]: https://codecov.io/gh/1024pix/assets-extractor-module

[license-src]: https://img.shields.io/npm/l/assets-extractor-module.svg
[license-href]: https://npmjs.com/package/assets-extractor-module
