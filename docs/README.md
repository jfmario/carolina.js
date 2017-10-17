
# Carolina #

Carolina is a basic web application framework that is under development.

**Installation**

To get started, install the CLI via NPM.

```
npm install jfmario/carolina.js
```

**Create Project**

To create a new project:

```
carolina startproject mysite
cd mysite
npm install
```

The folder `mysite` has been created.

Next step is to inspect the `config.yml` file. Do not casually make changes to
the file. It is recommended that you consult the
[Config Documentation](topics/CONFIG.md).

You should also take a look at an [Overview of Created Files](CREATED.md).

For now, look at this section:

```
adminUser:
  username: admin
  password: "GQpJziQL"
```

If you want, you can change the admin password before moving on to the next step.

**Create the Admin User**

Run the following command to create an admin user based on the `adminUser`
specification in `config.yml`.

NOTE: From now on, all `carolina` commands should be run from the root
directory of your project.

```
carolina createadmin
```

**Inspect Database**

The previous command created the `db` folder. Go into it and take a look at
`carolinaAuthenticationApp/User.db`. It is an
[NEDB](https://www.npmjs.com/package/nedb)
file (which is the default
db configuration for starting out). Note that there is an entry for the admin
user. You should avoid editing this file by hand.

**Load Fixtures**

You should look at the file `fixtures/starting_users.yml`. This sets some
information that can be loaded into the database. Run the following command
to do so:

`carolina loaddata`

Inspect the database again and note the new entries.

See: [Fixtures](FIXTURES.md).

## Run the Server #

**Run the Server**

Run the Express Server by running the following command:

```
carolina runserver
```

You can visit your site at `http://localhost:8000`.

**Visit the Site**

If you click on the ENTER button on the site now, you should see an error
telling you that you cannot get `/main`.

Go back and and click on the "Account" link and log in using the admin username
(default: admin) and password (generated) as found in your `config.yml`
file.

You can change the admin password if you wish.

**Admin Panel**

Click the "Admin Panel" link now that you are logged in as admin. You should
see a view of your installed applications, corresponding to what you have
under `apps` in `config.yml`.

Under the `carolinaAuthenticationApp`, you should see a link to the model
"User". Click the link and play around with the interface. Add a new user
manually.

See the [Topical Docs](TOPICS.md).
