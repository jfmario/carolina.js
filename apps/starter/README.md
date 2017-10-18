
# Carolina Starter App #

```yml
apps:
  carolinaStarterApp:
    app: carolina/apps/starter
    mount: ''
    db: main
    data:
      bootswatchTheme: minty
      enterButtonText: ENTER
      link: /main
      title: "appName"
      welcomeMessage: Welcome to appName.
```

## Name and Mount Point #

This app can be named anything and mounted anywhere. By default it is used
as the landing page to your applicaiton, and it can forward user's to your
app via its ENTER button.

You can set this app's data options in accordance with the following table.

## Data Options #

| Options | Default | Description |
| --- | --- | -- |
| `bootswatchTheme` | `minty` | Any Bootswatch 4 theme to style the page. |
| `enterButtonText` | `enter` | The text for the main enter button. |
| `link` | `/main` | The `href` for the main enter button. |
| `title` | `Title` | The title of the page. |
| `welcomeMessage` | `Welcome to the site.` | The text of the page. |
