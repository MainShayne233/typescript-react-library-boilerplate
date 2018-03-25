# React Library Boilerplate

Minimal boilerplate for writing React libaries

(builds off [this JavaScript Library Boilerplate](https://github.com/MainShayne233/javascript-library-boilerplate))

## Tools

* [Babel](https://babeljs.io/) for ES6 + other JavaScript features
* [Webpack](https://webpack.js.org/) for building bundle
* [Webpack Dev Server](https://github.com/webpack/webpack-dev-server) and [React Hot Loader](https://github.com/gaearon/react-hot-loader) For live development
* [Flow](https://flow.org/) for type checking
* [Mocha](https://mochajs.org/) and [Chai](http://www.chaijs.com/) for testing
* [ESlint](https://eslint.org/) with [Airbnb's config](https://www.npmjs.com/package/eslint-config-airbnb) for linting
* [Prettier](https://github.com/prettier/prettier) for auto code formatting
* [Travis CI](https://travis-ci.org/) for continuous integration

## Use

```bash
# clone the repo and name it whatever you like
git clone https://github.com/MainShayne233/react-library-boilerplate very_helpful_library

# enter project, re-initialize git, and install dependencies
cd very_helpful_library
rm -rf .git
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

* Start development app: `npm start` (will be running at [localhost:4000](http://localhost:4000) by default)
* Build bundle: `npm run build`
* Run tests: `npm test`
* Run tests in watch mode: `npm run test:watch`
* Run type checking: `npm run flow`
* Lint code: `npm run lint`
* Format code: `npm run format`
* Install precommit hook: `npm run precommit:install`
* Uninstall precommit hook: `npm run precommit:uninstall`

## Precommit hook

In order to use the precommit hook, you must first run `npm run precommit:install`.
The precommit hook will run the tests, type checker, linter, and formatter
prior to commiting changes, and exit if any of these steps failed. If you
do not want to use this feature, simply remove the precommit scripts and the
`precommit` command from `package.json`, and remove the `.precommit.json` file.


