<p align="center">
  <img src="https://user-images.githubusercontent.com/41436010/125207308-fbd9eb80-e261-11eb-98e4-7ae01ad1f143.png" width="600">
</p>

# Nexpy Front-end Boilerplate

[![License](https://img.shields.io/github/license/nexpy-io/nexpy-frontend-boilerplate?style=flat)](https://github.com/nexpy-io/frontend-boilerplate/blob/main/LICENSE)
[![nexpy-io](https://circleci.com/gh/nexpy-io/nexpy-frontend-boilerplate.svg?style=svg)](https://app.circleci.com/pipelines/github/nexpy-io)

<br />

[nexpy-frontend-boilerplate](https://github.com/nexpy-io/nexpy-frontend-boilerplate) is an Nexpy.io open source template repository for front end development based on [Next.js](https://github.com/vercel/next.js) and [TypeScript](https://github.com/microsoft/TypeScript).

<br /><br />

## More Docs

**Documentation is under construction and may not be fully available.**

<br /><br />

## Installation

<br />

### Package Manager

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) to install the dependencies.

**Important:** Make sure you have the yarn installed globally as it is necessary for use the project's features.

Install yarn with the following command:

```sh
npm install -g yarn
```

<br />

### Dependencies

Install dependencies with the following command:

```sh
yarn
```

The postinstall script will run automatically. If you notice that this has not occurred, run the following command:

```sh
yarn postinstall
```

This command will install the husky hooks in the git repository to control preprocessors for commits and pushes, such as code formatters and Eslint, and the required automatic project settings.

<br />

### Technologies used

In this project you can find several interesting technologies, such as:

- [@nexpy/design-system](https://github.com/nexpy-io/nexpy-design-system)

  [NPM](https://www.npmjs.com/package/@nexpy/design-system)

  [Docs](https://design-system.nexpy.app/)

  Open source library of components and styles based on @sxtyled/styled-components.

  By using this lib, we adopt the possibility of full styling via prop and the full reuse of even the most basic components.
  This increases the scalability by a million times while making the final bundle much smaller.

- [@nexpy/react-easy-context-api](https://github.com/nexpy-io/react-easy-context-api)

  [NPM](https://www.npmjs.com/package/@nexpy/react-easy-context-api)

  Another open source library created by [Allan Oliveira](https://github.com/AllanOliveiraM), was dedicated to improving performance and making it easier to use contexts in React.

- Sentry

- PWA

- Jest

- Cypress

- Mobile gesture control

- Next.js and server side/static generation

There are others being used and they can be found in the development dependencies and dependencies section of the package.json file.

<br /><br />

## Available scripts and usage

initially, use the sample environment variables `.env.example` file to create your `.env` own file.

Note that the `NEXT_PUBLIC_SENTRY_DSN` variable is not mandatory if `NEXT_PUBLIC_IN_LOCAL_DEVELOPMENT=true` is set.

If you look at the scripts inside package.json you will see several methods, among them:

<br />

### Run development server

```sh
yarn dev
```

A server with a fast refresh for development. Do not use for production.

<br /><br />

### Reinstall dependencies

```sh
yarn reinstall
```

Asynchronously deletes all dependencies and reinstalls using yarn.

<br /><br />

### Commit your changes

```sh
yarn commit
```

Use the `yarn commit` command to start the [git-cz](https://www.npmjs.com/package/git-cz) cli. With
that we can make the commits in a standardized way.

<br /><br />

### Create production build

```sh
yarn build
```

Creates an optimized production build of the application. The output displays information about each route.

<br /><br />

### Starts the application in production mode

```sh
yarn start
```

The application should be compiled with next build first.

The application will start at `http://localhost:3000` by default. The default port can be changed with `-p`, like so:

```sh
npx next start -p 4000
```

Or using the PORT environment variable:

```sh
PORT=4000 npx next start
```

Note: PORT can not be set in .env as booting up the HTTP server happens before any other code is initialized.

<br /><br />

### Check typing

```sh
yarn type:check
```

Run a test using the TypeScript compiler to identify code typing failures.

<br /><br />

### Automatically format code

```sh
yarn prettier
```

Auto-formats code using Prettier. This command writes possible corrections to the project files.

<br /><br />

### Check code style

```sh
yarn prettier:check
```

Checks that all files follow the style pattern without changing them, reporting possible errors to the console.

<br /><br />

### Fix code integrity

```sh
yarn eslint
```

Looks for code integrity errors and fixes where possible. This command writes possible corrections to the project files.

<br /><br />

### Check code integrity

```sh
yarn eslint:check
```

Looks for code integrity errors in all files without changing them, reporting possible errors to the console.

<br /><br />

### Test the application

```sh
yarn test
```

Run the automated tests using [jest](https://jestjs.io/).

<br /><br />

### Run development storybook server

```sh
yarn storybook
```

A server with a fast refresh for components documentation development (Docs). Do not use for production.

<br /><br />

### Buid storybook

```sh
yarn build:storybook
```

Created a production build for storybook (Docs).

<br /><br />

<br />

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
