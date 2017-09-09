
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

```yml
  myBlog:
    app: carolina-blog
    mount: 'main'
    db: main
    data: null
```

* Change the starter app link back to `/main`.
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

## Creating Models #

* Create the folder `{project_name}/my-apps/carolina-blog/models/`.
* In the new models folder, create the file `post.js`.

```js
var Model = require('carolina/lib/models/model');
var fields = require('carolina/lib/models/fields');

class Post extends Model {

  // return a metadata object for the model
  static getMetadata() {
    return {
      indexField: 'slug',
      model: "Post"
    }
  }
  // return the schema object for the model
  static getSchema() {
    return {
      author: new fields.StringField({
        default: 'admin',
        name: "Author"
      }),
      title: new fields.StringField({
        default: "New Post",
        name: "Title"
      }),
      slug: new fields.StringField({
        name: "Slug"
      }),
      categories: new fields.ListField({
        default: ['uncategorized'],
        name: "Categories"
      }),
      tags: new fields.ListField({
        default: [],
        name: "Tags"
      }),
      publishDate: new fields.DateField({
        name: "Publication Date"
      }),
      status: new fields.ChoiceField({
        default: 'draft',
        name: "Status",
        options: [
          ["Draft", 'draft'],
          ['Published', 'published'],
          ['Archived', 'archived']
        ]
      }),
      markdownText: new fields.CodeField({
        default: "This is my *new post*.",
        language: 'markdown',
        name: "Markdown Text"
      })
    }
  }

  constructor(obj) {
    // must call super like this
    super("Post", obj);
  }

  // methods for instances will go here later
}

module.exports = Post;
```

* Create this fixture `fixtures/posts.yml`:

```yml

myBlog:
  Post:
    - fields:
        author: admin
        title: My First Blog Post
        slug: my-first-blog-post
        status: published
    - fileFields:
        markdownText: posts/my-first-blog-post.md
```