
# The Config File #

When you create a new project, the first thing you should do is get familiar
with your `config.yml` file. Here is an example one:

***

```yml
title: test # You can change the title to something user friendly.
description: This is my website.
```

**`title`**

A name for your overall site. It could be human-friendly.

**`description`**

An optional description for your website. This is currently unused.

***

```yml
runConfig:
  default:
    host: '127.0.0.1'
    port: 8000
  open:
    host: '0.0.0.0'
    port: 80
```

**`runConfig`**

An object containing multiple run configurations for the Express.js server.

It currently only uses two attributes, `host` and `port` - the host and port
that you want to run the server on.

This section is only used by the `carolina runserver` command. If you want to use
a configuration other than the default, you can specify another one by
running, for example, `carolina runserver -r open`. You can rename and add
whatever extra configurations you want, but you should leave one named
`default` so that you can run `carolina runserver` without further
specification.

***

```yml
db:
  main:
    type: nedb
    path: db
```

**`db`**

An object containing multiple database configurations.
You can specify multiple databases for your site and specify for each app which
one will be used by that app.

Each database configuration should contain a type and then whatever extra
info is required.

Currently, the only supported database type is `nedb`, which is basically a
folder that contains a bunch of JSON files. The only other information needed
is the `path` to a folder from your site's root directory.

***

```yml
adminUser:
  username: admin
  password: "GQpJziQL"
```

**`adminUser`**

The details for creating the admin account. It is used by the
`carolina createadmin` command.

***

```yml
secrets:
  clientSideSalt: mXn5JiVmHVJju
  salt1: 2LOb7gwxxhE7iQPPMsG5
  salt2: q7x1tatpQJDaGRn
  salt3: b3KLaIi3
  salt4: DCaoRdcHJSOM
  salt5: Ml27MksIAbe
  salt6: czlPY7KoNfqkfQxpTnHbcp9aenl6x
  salt7: KAv5xtRa2p5iTYVsv
  salt8: Wlt0GwlNmKU2vmXwjjWttig53Y
```

**`secrets`**

NOTE: In a future release, this section will probably be moved to a separate
file called `config.secrets.yml`, so that it can be excluded from git.

A collection of secrets (except for `clientSideSalt`, which can be seen by
users) that your site will use for hashing passwords and other information.
Once you run the `carolina createadmin` command, you should not change
any of these values or nothing will work.

***

```yml
siteMenu:
  - link: '/main'
    title: Home
  - link: '/auth'
    title: Account
  - link: '/admin'
    title: Admin Panel
```

**`siteMenu`**

A configuration for the top menu that will be present by default on your site.
Each item should contain a path for the link as well as the text value.

***

```yml
emailInterface:
  app: carolina/lib/email/terminal-email
  from: carolina_webmaster@example.com
```

**`emailInterface`**

The e-mail interface class you wish to use. This will be used by the default
authentication app and can be used by your custom apps as well.

Currently, only mocking e-mails by displaying them in the terminal is supported.
Soon, sending real mail using some provider will be supported.

***

```yml
apps:
  common: # Do not change this name or remove this app
    app: carolina/apps/common
  carolinaAuthenticationApp: # Do not remove this app, but you can change its data options
    app: carolina/apps/auth
    mount: 'auth'
    db: main
    data: # You can edit the values in this section
      emailVerificationSubject: E-Mail Verification
      emailVerificationText: "Your confirmation code is:"
      passwordResetSubject: Password Reset
      passwordResetText: "Your new password is:"
  carolinaAdminApp:
    app: carolina/apps/admin
    mount: 'admin'
    db: main
  carolinaStarterApp: # You may remove this app and replace it with your home page
    app: carolina/apps/starter
    mount: ''
    db: main
    data:
      bootswatchTheme: minty
      enterButtonText: ENTER
      link: /main
      title: "test"
      welcomeMessage: Welcome to test.
```

**`apps`**

A configuration for apps for your site. They generally contain information
pointing to the database an app should use as well as a "mount" point for
the app. They also often contain data that can alter the behavior or
appearance of an app.

Because Carolina apps should be pluggable, custom apps that your write for
use by others should be highly configurable using `data` options.

There are by default 4 apps installed, and you should generally leave the
first 3 alone.

The Common App has no mount point or database, but it contains many useful
templates and assets that are used by the following two apps. By virtue of
being listed here in `config.yml` all of those templates and static files
will be collected for serving your app.

The Authentication app should stay the same, although you can change the
parts under `data` to your liking. This is the part that allows users to log in
to your site.

The Admin application mounts at `/admin` and allows an admin user to edit
database entries in a web interface powered by Angular.

The Carolina Starter App is mounted at your site's root and is just for starting.
It can and should be replaced by an app for your home page.

If you don't want to use any common helper files AND don't want to have any
users, you should probably use some static site generator. But in such a case
you could safely remove all apps and only have your own.
