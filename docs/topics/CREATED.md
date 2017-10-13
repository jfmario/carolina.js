
# Overview of Created File #

This section discusses the project that is created by the
`carolina startproject {name}` command.

**`config.yml`**

The configuration for your site. See [Site Configuration](CONFIG.md).

**`config.js`**

A file that can be required and returns your site configuration.

**`package.json`**

The NPM `package.json` for your project. You should install your NPM dependencies
using `npm install --save {packageName}` so that the dependencies are
saved here.

**`fixtures/`**

The fixtures directory contains an example fixture, `starting_users.yml`.
See [Fixtures](FIXTURES.md).

**`my-apps/`**

This is a master directory for Carolina Apps that you create.

**`static/`**

A place where the static files from all your registered apps will be gathered.

**`templates/`**

A place where the `.pug` templates from all your registered apps will be gathered.
