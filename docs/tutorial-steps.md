
## Setup #

* `carolina startproject mysite`
* `cd mysite`
* `npm install`
* Inspect created files
* `carolina createadmin`
* Inspect database
* Inspect fixtures
* `carolina loaddata`
* Inspect database

## Run Starter Site #

* `carolina runserver`
* Visit site `localhost:8000`
* Click the ENTER button (error), then go back
* Click the "Account" link at the top, and login as admin
* Change admin password
* Click "Admin Panel" link at the top
  * List of apps, most have no models.
  * `carolinaAuthenticationApp` has one model, User.

* Play around with Admin Panel for users.
* Create a new user from scratch.
* Change some of the `data` attributes in the apps and observe the changes
  * Try setting the starter app's link to /admin

## Start New App #

* `carolina newapp carolina-blog`
* Add the following app to `config.apps`:
* Change the starter app link back to `/main`.

```yml
  myBlog:
    app: carolina-blog
    mount: 'main'
    db: main
    data: null
```

* Run the site and go to `/main` to view the default new application
* Change the entry to add a new bootswatchTheme to confirm that it responds to data

```yml
  myBlog:
    app: carolina-blog
    mount: 'main'
    db: main
    data:
      bootswatchTheme: cerulean
```

* Change it to any bootswatch theme you like