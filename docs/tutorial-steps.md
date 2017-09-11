
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
      fileFields:
        markdownText: posts/my-first-blog-post.md
```

* Create this file `fixtures/files/posts/my-first-blog-post.md`:

```
Hello! This is my **very first** blog post.
```

* Run `carolina loaddata -d posts` and inspect the database.
* `var markdown = require('markdown').markdown` in `post.js`
* Add some instance methods to `post.js`:

```js
  getHTML() {
    return markdown.toHTML(this.markdownText);
  }
  getSnippetHTML() {
    var snippetMarkdown = this.markdownText.split('<!--more-->')[0];
    return markdown.toHTML(snippetMarkdown);
  }
```

* Delete `api/endpoint1.js` and `api/endpoint2.js`.
* Write `api/get-post.js`.

```js
var Post = require('../models/post');

async function getPost(req, res, next) {

  if (!req.body.hasOwnProperty('slug'))
    return res.status(400).send("No post slug provided.");
  
  try {
    let post = await Post.lookup(req.body.slug);
    res.json(post.exportData());
  } catch(err) { 
    console.log(err);
  }
};
module.exports = getPost;
```

* Change `api/get-post.js` to use the new endpoing for POST requests to /post.
  * Remove the references to endpoint1 and endpoint2.

```js
// register API endpoints
router.post('/get-post', require('./get-post'));
```

* Send a post request and check the response (sample in python)

```py
import requests
res = requests.post('http://localhost:8000/main/api/get-post', json={
  'slug': 'my-first-blog-post'
})
print(res.json())
```

## Adding More Models #

* Lets clear out the Posts database, and start it over.
* Run `carolina cleardata main myBlog Post`.
* Add another entries to `fixtures/posts.yml`

```yml
myBlog:
  Post:
    - fields:
        author: admin
        title: My First Blog Post
        slug: my-first-blog-post
        status: published
      fileFields:
        markdownText: posts/my-first-blog-post.md
    - fields:
        author: admin
        title: Snippet Post
        slug: snippet-post
        status: published
        publishDate: 2017-09-10T15:17:00Z
      fileFields:
        markdownText: posts/snippet-post.md
```

* Load the data: `carolina loaddata -d posts`.
* In `my-apps/carolina-blog/api/get-post.js`, change try/catch block:

```js
  try {
    
    let post = await Post.lookup(req.body.slug);
    var postData = post.exportData();
    postData.htmlText = post.getHTML();
    postData.snippet = post.getSnippetHTML();
    
    return res.json(postData);
  } catch(err) { 
    console.log(err);
  }
```

* Hit the endpoint again to see the expanded return (Use "snippet-post" as the slug).
* Create the model `blog-user.js`.

```js

var markdown = require('markdown').markdown;

var Model = require('carolina/lib/models/model');
var fields = require('carolina/lib/models/fields');

class BlogUser extends Model {

  static getMetadata() {
    return {
      indexField: 'username',
      model: 'BlogUser'
    }
  }
  static getSchema() {
    return {
      username: new fields.StringField({
        name: 'Username'
      }),
      markdownBio: new fields.CodeField({
        language: 'markdown',
        name: "Markdown Bio"
      })
    }
  }

  constructor(obj) {
    super("BlogPost", obj);
  }

  getBioHTML() {
    return markdown.toHTML(this.markdownBio);
  }
}
module.exports = BlogUser;
```

* Create the model `comment.js`:

```js
var markdown = require('markdown').markdown;

var Model = require('carolina/lib/models/model');
var fields = require('carolina/lib/models/fields');

class Comment extends Model {

  static getMetadata() {
    return {
      indexField: 'slug',
      model: 'Comment'
    };
  }
  static getSchema() {
    return {
      slug: new fields.StringField({
        name: 'Slug'
      }),
      author: new fields.StringField({
        default: 'admin',
        name: "Comment Author"
      }),
      post: new fields.StringField({
        name: "Post Slug"
      }),
      upvotes: new fields.IntegerField({
        default: 0,
        name: 'Upvotes'
      }),
      likingUsers: new fields.ListField({
        name: "Liking Users"
      }),
      markdownText: new fields.CodeField({
        language: 'markdown',
        name: "Markdown Text"
      })
    };
  }

  constructor(obj) {
    super("Comment", obj);
    // calculate the slug if new
    if (!obj.hasOwnProperty('slug'))
      this.slug = `${this.author}_${this.post}_${new Date().getTime()}`;
  }

  getHTML() {
    return markdown.toHTML(this.markdownText);
  }
}
module.exports = Comment;
```

* Create the model `category.js`:

```js
var markdown = require('markdown').markdown;

var Model = require('carolina/lib/models/model');
var fields = require('carolina/lib/models/fields');

class Category extends Model {

  static getMetadata() {
    return {
      indexField: 'slug',
      model: 'Category'
    }
  }
  static getSchema() {
    return {
      slug: new fields.StringField({
        name: 'Slug'
      }),
      categoryName: new fields.StringField({
        name: 'Name'
      }),
      parentPath: new fields.ListField({
        name: "Parent Path"
      }),
      markdownText: new fields.CodeField({
        language: 'markdown',
        name: "Markdown Text"
      })
    };
  }

  constructor(obj) {
    super("Category", obj);
  }

  getHTML() {
    return markdown.toHTML(this.markdownText);
  }
}
module.exports = Category;
```

* Register the models in `app.js`.

```js
app.models = {
  // include models here as in the below line
  BlogUser: require('./models/blog-user'),
  Category: require('./models/category'),
  Comment: require('./models/comment'),
  Post: require('./models/post')
};
```

* Add fixtures to `posts.yml`:

```yml
  Comment:
    - fields:
        author: TwilightSparkle
        post: snippet-post
        slug: TwilightSparkle_snippet-post_001
        markdownText: A *very* personal post. Thank you for sharing.
  BlogUser:
    - fields:
        username: admin
        markdownBio: Check out [my website](http://www.example.com).
  Category:
    - fields:
        slug: tests
        name: Tests
    - fields:
        slug: blog-tests-md
        name: Markdown Blog Tests
        parentPath: ['tests']
        markdownText: |
          These posts test features of markdown.
```

* Change the `snippet-post` category to "blog-tests-md".
* load the data.
* View your new models in the admin panel.
