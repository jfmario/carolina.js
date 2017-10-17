
# Run the Server #


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

**Altering App Data**

Change some of the data for your apps in `config.yml`.

Rerun the server (Ctrl+C to stop the server, then `carolina runserver`)
and note changes that
occur. Note that the `bootswatchTheme` can be any theme that was present
in version `4.0.0-alpha.6` of [Bootswatch](https://bootswatch.com/).
