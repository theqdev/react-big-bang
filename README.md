## About

A ready-to-go, production ready React.js boilerplate, backed by reliant technologies and tools to get your React projects up and running in no time. The boilerplate includes basic examples of API calls and UI elements usage.

---

##### 2024 Update

While researching different frameworks and tools to assist with building new SPAs, I realized that this older boilerplate had some neat development and production tools that facilitate fast development.

All deprecated libraries have been updated, and those no longer supported have been replaced with alternatives that offer long-term support.

Compatibility with the latest versions of Node.js, npm, and operating systems has also been improved.

## Getting Started

You can also check out the official page of the boilerplate [here](https://rbb.qdev.tech).

#### Installation and Development Mode

* `git clone https://github.com/theqdev/react-big-bang`
* `npm run setup` or `npm install`
* `npm start`

### Creating a Production Build

* `npm run clean-dist` - _Cleans the build directory_
* `npm run prebuild` - _Cleans the build directory and runs linting and tests_
* `npm run build` - _Generates the production build_
* `npm run analyze-bundle` - _Analyzes bundle size and its libraries_

### Linting and Tests

* `npm run lint` or `npm run lint:watch`
* `npm run test`

## Technologies

Under the hood, the kit is powered by:

| **Tech** | **Description**                                                                                                                                                      |
|----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [React](https://facebook.github.io/react/) | Fast, composable client-side components.                                                                                                                             |
| [react-bootstrap](https://react-bootstrap.github.io/) | React Bootstrap UI kit for React.js.                                                                                                                                  | 
| [Redux](http://redux.js.org) - [Redux Sauce](https://github.com/infinitered/reduxsauce) - [Redux Saga](https://github.com/redux-saga/redux-saga) | Redux store implementation. Enforces unidirectional data flows and an immutable, hot-reloadable store that supports time-travel debugging.                              | 
| [APISauce](https://github.com/infinitered/apisauce) | Axios-based API wrapper for mapping your app's backend.                                                                                                              | 
| [React Router](https://github.com/reactjs/react-router) | A complete routing library for React.                                                                                                                                 |  
| [Babel](http://babeljs.io) | Compiles code to any desired presets.                                                                                                                                | 
| [Webpack](https://webpack.js.org) | Bundles npm packages and our JS into a single file. Includes hot reloading.                                                                                          | 
| [Browsersync](https://www.browsersync.io/) | Lightweight development HTTP server that supports synchronized testing and debugging on multiple devices.                                                            | 
| [Jest](https://facebook.github.io/jest/) | Automated tests with built-in expect assertions and react-testing-library for DOM testing without a browser using Node.                                              |  
| [TrackJS](https://trackjs.com/) | JavaScript error tracking.                                                                                                                                           | 
| [ESLint](http://eslint.org/) | Lint JS. Reports syntax and style issues. Using [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) for additional React-specific linting rules. | 
| [SASS](http://sass-lang.com/) | Compiled CSS styles with variables, functions, and more.                                                                                                             |
| [PostCSS](https://github.com/postcss/postcss) | Transforms styles with JS plugins. Used to autoprefix CSS.                                                                                                             |
| [EditorConfig](http://editorconfig.org) | Enforces consistent editor settings (spaces vs tabs, etc).                                                                                                            |
| [npm Scripts](https://docs.npmjs.com/misc/scripts) | Glues all this together in a handy automated build.                                                                                                                  |

## Contributing

If you ever end up using this and find a fix or an improvement, don't hesitate to open a [PR of your changes](https://docs.github.com/en/get-started/exploring-projects-on-github/contributing-to-a-project).

---

Check out our website at [Qdev](https://qdev.tech) and our other projects at [Envato Market](https://codecanyon.net/user/ic0de) for more cool stuff.
