# frontend-boilerplate

[![License](https://img.shields.io/github/license/AllanOliveiraM/nexpy-frontend-boilerplate?style=flat)](https://github.com/nexpy-io/frontend-boilerplate/blob/main/LICENSE)
[![All Contributors](https://img.shields.io/github/all-contributors/AllanOliveiraM/nexpy-frontend-boilerplate/main)](#contributors-)
[![Nexpy](https://circleci.com/gh/AllanOliveiraM/nexpy-frontend-boilerplate.svg?style=svg)](https://app.circleci.com/pipelines/github/AllanOliveiraM/nexpy-frontend-boilerplate)

[frontend-boilerplate](https://github.com/nexpy-io/nexpy-frontend-boilerplate) is an Nexpy.io open source template repository for front end development based on [Next.js](https://github.com/vercel/next.js) and [TypeScript](https://github.com/microsoft/TypeScript).

## More Docs

**Documentation is under construction and may not be fully available.**

A components documentation is available [here](https://nexpy-frontend-boilerplate-storybook.nexpy.com.br/).

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

> For production options, take a look at the [Next.js](https://github.com/vercel/next.js) and [Storybook](https://storybook.js.org/docs/) documentations :blush:

## Roadmap

See what we are preparing for the future:

- Create standard production home page for boilerplate;
- Theme configs;
- Create a design system components with docs;
- Auth;
- Custom hooks.

## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/camilaffonseca"><img src="https://avatars.githubusercontent.com/u/54648900?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Camila Fonseca</b></sub></a><br /><a href="https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate/commits?author=camilaffonseca" title="Code">💻</a> <a href="#ideas-camilaffonseca" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/AllanOliveiraM"><img src="https://avatars.githubusercontent.com/u/41436010?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Allan Oliveira Miraballes</b></sub></a><br /><a href="https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate/commits?author=AllanOliveiraM" title="Code">💻</a> <a href="https://github.com/AllanOliveiraM/nexpy-frontend-boilerplate/commits?author=AllanOliveiraM" title="Documentation">📖</a> <a href="#ideas-AllanOliveiraM" title="Ideas, Planning, & Feedback">🤔</a> <a href="#maintenance-AllanOliveiraM" title="Maintenance">🚧</a> <a href="#projectManagement-AllanOliveiraM" title="Project Management">📆</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) license.
