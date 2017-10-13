
# Carolina App Basics #

A Carolina app should be pluggable (ie, it shouldn't depend on its mount point
and it should be easily usable by another user).

When you run the `carolina newapp {name}` command, a new app will be created
for you in the `my-apps` directory.

Your `app.js` file should do the following things (and the starting example does):

* Load the site configuration.
* Define defaults for any options you want configurable by the site's config.
* Create an instance of `ExpressApp` using the current `__dirname` and the default data object.
* Create an express router.
* Attach all routes to that router.
* Set the `models` property on your ExpressApp object if you want to store any data.
* Set the `router` property on your ExpressApp to the configured router.
* Expose the ExpressApp object.

The standard way of doing things is to have an `api` folder containing all
API routes and `templates` folder containing 1 or more `.pug` templates.
In `app.js`, the router should render a template that will interact with
your API if you have one. You can create a `static` folder that will be collected
and available for your app as well.

For more on static files and templates, see [Static Files and Templates](STATIC.md).

For a walkthrough on creating a simple Blog App, see the [Tutorial](../TUTORIAL.md).
