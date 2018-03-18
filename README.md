# Javascript Library Boilerplate

Minimal boilerplate for writing JavaScript libaries

[![Build Status](https://travis-ci.org/MainShayne233/javascript-library-boilerplate.svg?branch=master)](https://travis-ci.org/MainShayne233/javascript-library-boilerplate)

## Tools
- [Babel](https://babeljs.io/) for ES6 + other JavaScript features
- [Webpack](https://webpack.js.org/) for building bundle
- [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/) for testing
- [ESlint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) for linting
- [Prettier](https://github.com/prettier/prettier) for auto code formatting

## Use
```bash
# clone the repo and name it whatever you like
git clone https://github.com/MainShayne233/javascript-library-boilerplate very_helpful_library

# enter project and install dependencies
cd very_helpful_library
npm i

# build bundle and run tests to verify everything works
npm run build
npm test
```

## Commands
- Build bundle: `npm run build`
- Run tests: `npm test`
- Run tests in watch mode: `npm run test:watch`
- Lint code: `npm run lint`
- Format code: `npm run format`
