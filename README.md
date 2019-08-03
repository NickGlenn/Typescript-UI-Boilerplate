# Typescript UI Boilerplate

This is a simple boilerplate project for creating UI applications using Typescript.  I've included [SASS/SCSS](https://sass-lang.com/) for compiling styles and have included both [Rollup](https://rollupjs.org/guide/en/) and [Webpack](https://webpack.js.org/) for compiling Typescript into ES5 compatible Javascript.

I personally prefer to use Rollup over Webpack thanks to the inclusion-based treeshaking and clean, readable output.  You can try compiling either one using `npx rollup -c` or `npx webpack` to compare the results.

## Development

To get started, run `npm install` to install the depdendencies.  You can then run the `npm start` command to kick off the `watch:*` tasks, which includes `browser-sync`.  Browser Sync is a both a static file server and a live reload client for immediately previewing your application changes.

```bash
npm install && npm start
```

## Additional Notes

### TS Config & Linting Rules

The Typescript configuration and linting rules are pretty strict but are set up for creating the most clear and least error prone code possible.  Additionally, some good practices (such as comment enforcement) has been added to promote better and more maintainable code.

### I want to use Rollup, not Webpack

Good news!  Rollup is the configured build tool for Typescript by default on this project.

You can run the following set of commands to remove the dependencies and configuration for Webpack.

```bash
rm webpack.config.js
npm uninstall webpack webpack-cli ts-loader
```

### I want to use Webpack, not Rollup

Open `package.json` and change the `build:scripts` command to `webpack`.  Then you can run the following set of commands to remove the dependencies and configuration for Rollup.

```bash
rm rollup.config.js
npm uninstall rollup rollup-plugin-typescript rollup-plugin-commonjs rollup-plugin-node-resolve
```