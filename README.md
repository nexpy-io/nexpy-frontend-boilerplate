# frontend-boilerplate

[![Netlify Status](https://api.netlify.com/api/v1/badges/3e48b52d-4edf-4bb9-bdb3-bff075a249b9/deploy-status)](https://app.netlify.com/sites/nexpy-frontend-boilerplate-storybook/deploys)
![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=nexpy-frontend-boilerplate)
[![License](https://img.shields.io/github/license/nexpy-io/frontend-boilerplate?style=flat)](https://github.com/nexpy-io/frontend-boilerplate/blob/main/LICENSE)
[![All Contributors](https://img.shields.io/github/all-contributors/nexpy-io/frontend-boilerplate/main)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[frontend-boilerplate](https://github.com/nexpy-io/frontend-boilerplate) is an Nexpy.io open source template repository for front end development based on [Next.js](https://github.com/vercel/next.js) and [TypeScript](https://github.com/microsoft/TypeScript).

## Installation

### Package Manager

Use the package manager [yarn](https://yarnpkg.com/getting-started/install) to install the dependencies.

**Important:** Make sure you have the yarn installed globally as it is necessary for use the project's features.

Install yarn with the following command:

```sh
npm install -g yarn
```

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

A components documentation is here: [nexpy-frontend-boilerplate-storybook](https://nexpy-frontend-boilerplate-storybook.netlify.app/).

## Available scripts and usage

If you look at the scripts inside package.json you will see several methods, among them:

### Run development server

```sh
yarn dev
```

A server with a fast refresh for development. Do not use for production.

### Run development storybook server

```sh
yarn storybook
```

A server with a fast refresh for documentation development. Do not use for production.

> For production options, take a look at the [Next.js](https://github.com/vercel/next.js) and [Storybook](https://storybook.js.org/docs/) documentation :blush:

## Roadmap

See what we are preparing for the future:

- Create standard production home page for boilerplate;
- Theme configs;
- Create a design system components with docs;
- Auth;
- Custom hooks;

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/camilaffonseca"><img src="https://avatars.githubusercontent.com/u/54648900?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Camila Fonseca</b></sub></a><br /><a href="https://github.com/nexpy-io/frontend-boilerplate/commits?author=camilaffonseca" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
