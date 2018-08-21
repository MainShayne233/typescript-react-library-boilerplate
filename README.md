# Typescript React Library Boilerplate

Minimal boilerplate for writing React libaries

(builds off [this React Boilerplate Library](https://github.com/MainShayne233/react-library-boilerplate))

## Tools

* [Babel](https://babeljs.io/) for ES6 + other JavaScript features
* [Webpack](https://webpack.js.org/) for building bundle
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) and [React Hot Loader](https://github.com/gaearon/react-hot-loader) For live development
* [Typescript](https://www.typescriptlang.org/) for type checking
* [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/) and [jsdoc-test](https://github.com/MainShayne233/jsdoc-test) for testing
* [ESlint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) for linting
* [Prettier](https://github.com/prettier/prettier) for auto code formatting
* [Travis CI](https://travis-ci.org/) for continuous integration

## Use

NOTE: This boilerplate uses [`yarn`](https://yarnpkg.com/lang/en/) for
dependency management, but if you prefer to use the
[`npm` CLI](https://docs.npmjs.com/cli/npm), just remove the `yarn.lock` file
and use the appropriate `npm` commands.

```bash
# clone the repo and name it whatever you like
git clone https://github.com/MainShayne233/typescript-react-library-boilerplate very_helpful_library

# enter project, re-initialize git, and install dependencies
cd very_helpful_library
rm -rf .git
git init
yarn

# build bundle and run tests to verify everything works
yarn build
yarn test
```

Then change the following to accomodate your library:

* `README.md`
* `package.json`
* `.travis.yml`

## Commands

* Start development app: `yarn start` (will be running at [localhost:4000](http://localhost:4000) by default)
* Build bundle: `yarn build`
* Run tests: `yarn test`
* Run tests in watch mode: `yarn test:watch`
* Run type checking: `yarn typecheck`
* Run type checking in watch mode: `yarn typecheck:watch`
* Lint code: `yarn lint`
* Format code: `yarn format`
* Install precommit hook: `yarn precommit:install`
* Uninstall precommit hook: `yarn precommit:uninstall`

## Precommit hook

In order to use the precommit hook, you must first run `yarn precommit:install`.
The precommit hook will run the tests, type checker, linter, and formatter
prior to commiting changes, and exit if any of these steps failed. If you
do not want to use this feature, simply remove the precommit scripts and the
`precommit` command from `package.json`, and remove the `.precommit.json` file.


