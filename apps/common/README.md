
# Carolina Common #

```yml
common:
  app: carolina/apps/common
```

## Name and Mount Point #

This app should not be mounted but it must be named common.

## Templates #

### `common/basic_template.pug` #

Provides a simple HTML layout.

**Arguments**

| Argument | Description |
| --- | --- |
| `site.title` | The title of the site. |

**Blocks**

| Blocks | Description |
| --- | --- |
| `head` | The head of the document for metadata. |
| `css` | Area in the head for including CSS references. |
| `content` | Area in the body for the main page. |
| `foot` | Area at the end of the body for a footer. |
| `js` | Area at the end of the body for including JS files. |

### `common/bootstrap_boilerplate.pug` #

Adds Bootstrap 4 to the simple HTML layout of `common/basic_template.pug`

**Arguments**

| Argument | Description |
| --- | --- |
| `bootswatchTheme` | A valid Bootswatch 4 theme. |
| `site.title` | The title of the site. |

**Blocks**

| Blocks | Description |
| --- | --- |
| `head` | The head of the document for metadata. |
| `css` | Area in the head for including CSS references. Default contains the Bootstrap CSS files. |
| `content` | Area in the body for the main page. |
| `foot` | Area at the end of the body for a footer. |
| `js` | Area at the end of the body for including JS files. Default contains the Bootstrap JS files and dependencies like JQuery. |

### `common/bootstrap_ng.pug` #

Ready landing page for Angular 2+ apps.

If passed the app config as `appConfig`, it will properly set the base Url
and will also by default include the site menu at the top. It will reference
all the required files built by `ng build` with the assumption that it builds
into the app's `static` folder.
