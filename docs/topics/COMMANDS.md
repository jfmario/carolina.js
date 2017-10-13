
# Commands #

## Start a New Project #

`carolina startproject {name}`

Running this command will create a starter Carolina project in the folder
called `{name}`.

## Project Commands #

The following commands should all be run from the root directory of a
Carolina Project.

**Create Admin Account**

`carolina createadmin`

This command creates an admin account from the `adminUser` section of `config.yml`.

If you change your admin password through the site and forget it, running this
command again will reset the admin account.

SEE ALSO: [Carolina Authentication](AUTH.md)

**Clearing Data**

`carolina cleardata {database} {app} {model}`

This command will "drop" an entire table from the database. For example,
if you are working with the default `config.yml` and want to delete all users,
run the following command:

`carolina cleardata main carolinaAuthenticationApp User`

**Loading Preset Data**

`carolina loaddata -d {dataName|all}`

Running this command will load all data from your fixtures folder into your
database. If the argument is literally "all" (or is run with no arguments),
all files in your fixtures
directory will be loaded. Otherwise, to load data from the file
`fixtures/starting_users.yml`, you would run:

`carolina loaddata -d starting_users`

SEE ALSO: [Fixtures](FIXTURES.md)

**Creating a New App**

`carolina newapp {name}`

Running this command will create a new directory called `{name}`
under your `my-apps` directory
that will contain a valid Carolina app.

SEE ALSO: [Carolina App Basics](APP_BASICS.md)

**Running the Express.js Server**

`carolina runserver [--runConfig default]`

Running this command will start the server using a configuration
from your `runConfig` section of `config.yml`. By default, the
configuration labeled `default` will be used.
