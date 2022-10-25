# pndc-homegrown-initiative

<h1 align="center">Penn-Northwest Homegrown Initiative</h1>

<p align="center">
  <a href="https://materializecss.github.io/materialize/">
    <img src="https://static.wixstatic.com/media/b534f1_62798cc0e7ea4c12802be0a93d46dd99~mv2.png/v1/crop/x_146,y_109,w_221,h_279/fill/w_309,h_372,al_c,lg_1,q_85,enc_auto/Homegrown.png" width="150">
  </a>
</p>

<h3 align="center">PNDC Home Grown</h3>

<p align="center">
  Built with the Materialize CSS Framework - An Open Source Framework Maintained and Developed by the GitHub Community.
  <br>
  <a href="https://materializecss.github.io/materialize/"><strong>-- Browse the docs --</strong></a>
  <br>
  <br>
  <a href="https://github.com/materializecss/materialize/actions/">
    <img src="https://github.com/materializecss/materialize/actions/workflows/nightly.yml/badge.svg" alt="GitHub Actions badge">
  </a>
  <a href="https://www.npmjs.com/package/@materializecss/materialize">
    <img src="https://badge.fury.io/js/%40materializecss%2Fmaterialize.svg" alt="npm version badge">
  </a>
  <a href="https://www.jsdelivr.com/package/npm/@materializecss/materialize">
    <img src="https://data.jsdelivr.com/v1/package/npm/@materializecss/materialize/badge" alt="jsDelivr version badge">
  </a>
  <a href="https://david-dm.org/materializecss/materialize">
    <img src="https://david-dm.org/materializecss/materialize/status.svg" alt="dependencies Status badge">
    </a>
  <a href="https://david-dm.org/materializecss/materialize#info=devDependencies">
    <img src="https://david-dm.org/materializecss/materialize/dev-status.svg" alt="devDependency Status badge">
  </a>
  <a href="https://gitter.im/materializecss/materialize">
    <img src="https://badges.gitter.im/Join%20Chat.svg" alt="Gitter badge">
  </a>
</p>

## Table of Contents

- [Quickstart](#quickstart)
- [Documentation](#documentation)
- [Build](#build)
- [Supported Browsers](#supported-browsers)
- [Changelog](#changelog)
- [Testing](#testing)
- [Contributing](#contributing)
- [Copyright and license](#copyright-and-license)

## Quickstart:

Read the [getting started guide](https://materializecss.github.io/materialize/getting-started.html) for more information on how to use materialize.

- [Download the latest release](https://github.com/materializecss/materialize/releases/latest) of materialize directly from GitHub. ([Beta](https://github.com/materializecss/materialize/releases/))
- Clone the repo: `git clone https://github.com/materializecss/materialize.git`
- Include the files via [jsDelivr](https://www.jsdelivr.com/package/npm/@materializecss/materialize).
- Install with [npm](https://www.npmjs.com): `npm install @materializecss/materialize` (Beta: `npm install @materializecss/materialize@next`)

## Documentation

The documentation can be found at <https://materializecss.github.io/materialize>. To run the documentation locally on your machine, you need [Node.js](https://nodejs.org/en/) installed on your computer.

### Running documentation locally

Run these commands to set up the documentation:

```bash
git clone https://github.com/materializecss/materialize
cd materialize
npm install
```

Then run `npm run dev` to compile the documentation. When it finishes, open a new browser window and navigate to `localhost:8000/docs`. We use [BrowserSync](https://www.browsersync.io/) to display the documentation.

### Documentation for previous releases

Previous releases and their documentation are available for [download](https://github.com/materializecss/materialize/releases).

## Build

If you want to build `materialize.css` or `materialize.js` from the latest commit, you can build the files with the following command after `npm install`. See `package.json` to check the current version like `1.0.0`.

```sh
npm run release -- --oldver=<current_version> --newver=<new_version>
```

## Supported Browsers:

Materialize is compatible with:

- Chrome 35+
- Firefox 31+
- Safari 9+
- Opera
- Edge
- IE 11+

## Changelog

For changelogs, check out [the Releases section of materialize](https://github.com/materializecss/materialize/releases) or the [CHANGELOG.md](CHANGELOG.md).

## Testing

We use Jasmine as our testing framework and we're trying to write a robust test suite for our components. If you want to help, [here's a starting guide on how to write tests in Jasmine](CONTRIBUTING.md#jasmine-testing-guide).

## Contributing

Check out the [CONTRIBUTING document](CONTRIBUTING.md) in the root of the repository to learn how you can contribute. You can also browse the [help-wanted](https://github.com/materializecss/materialize/labels/help-wanted) tag in our issue tracker to find things to do.

## Copyright and license

Code Copyright 2021 Materialize. Code released under the MIT license.
