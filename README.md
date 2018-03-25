# Javascript Library Boilerplate

Minimal boilerplate for writing JavaScript libaries

[![Build Status](https://travis-ci.org/MainShayne233/javascript-library-boilerplate.svg?branch=master)](https://travis-ci.org/MainShayne233/javascript-library-boilerplate)

## Tools

* [Babel](https://babeljs.io/) for ES6 + other JavaScript features
* [Webpack](https://webpack.js.org/) for building bundle
* [Flow](https://flow.org/) for type checking
* [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/) for testing
* [ESlint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) for linting
* [Prettier](https://github.com/prettier/prettier) for auto code formatting
* [Travis CI](https://travis-ci.org/) for continuous integration

## Use

```bash
# clone the repo and name it whatever you like
git clone https://github.com/MainShayne233/javascript-library-boilerplate very_helpful_library

# enter project, re-initialize git, and install dependencies
cd very_helpful_library
git init
npm i

# build bundle and run tests to verify everything works
npm run build
npm test
```

Then change the following to accomodate your library:

* `README.md`
* `package.json`
* `.travis.yml`

## Commands

* Build bundle: `npm run build`
* Run tests: `npm test`
* Run tests in watch mode: `npm run test:watch`
* Run type checking: `npm run flow`
* Lint code: `npm run lint`
* Format code: `npm run format`
* Install precommit hook: `npm run precommit:install`
* Uninstall precommit hook: `npm run precommit:uninstall`

## Precommit hook

The precommit hook will run the tests, type checker, linter, and formatter
prior to commiting changes, and exit if any of these steps failed. If you
do not want to use this feature, simply remove the precommit scripts and the
`precommit` command from `package.json`, and remove the `.precommit.json` file.


