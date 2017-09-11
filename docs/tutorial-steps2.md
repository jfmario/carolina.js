
## Expanding the API #

* `get-posts.js`:

```js
var Post = require('../models/post');

async function getPosts(req, res, next) {

  if (!req.body.hasOwnProperty('page'))
    req.body.page = 1;
  
  try {
    
    let posts = Post.getQueryPage(
      { status: 'published' }, // filter
      { publishDate: -1 }, // sort
      req.body.page, 10);
    
    var postList = [];
    for (var i =0; i < posts.length; ++i) {

      var post = posts[i];
      var postData = post.exportData();
      postData.htmlText = post.getHTML();
      postData.snippet = post.getSnippetHTML();

      postList.push(postData);
    }

    res.json(postList);
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = getPosts;
```

* Import it and test the endpoint.
* Create the endpoint `get-user.js`

```js
var BlogUser = require('../models/blog-user');

async function getUser(req, res, next) {
  
  if (!req.body.hasOwnProperty('blogUser'))
    return res.status(400).send("No user provided.");
  
  try {

    let blogUser = await BlogUser.lookup(req.body.blogUser);
    var blogUserData = blogUser.exportData();
    blogUserData.htmlBio = blogUser.getBioHTML();

    res.json(blogUserData); 
  } catch(err) {
    return res.status(400).send(err);
  }
}
module.exports = getUser;
```

* Test the endpoint.
* Endpoint `get-category.js`:

```js
var Category = require('../models/category');
var Post = require('../models/post');

async function getCategory(req, res, next) {

  if (!req.body.hasOwnProperty('category'))
    return res.status(400).send("No category provided.");
  if (!req.body.hasOwnProperty('page'))
    req.body.page = 1;

  var category = null;
  var categoryPosts = [];

  try {
    category = await Category.lookup(req.body.category);
  } catch(err) {
    // if category does not exist, make a placeholder one
    category = new Category({
      slug: req.body.category,
      categoryName: req.body.category,
      parentPath: [],
      markdownText: req.body.category
    });
  }
  try {
    let posts = await Post.getQueryPage(
      { categories: req.body.category },
      { publishDate: -1 },
      req.body.page,
      10
    );
    for (var i = 0; i < posts.length; ++i) {

      var post = posts[i];
      var postData = post.exportData();
      postData.htmlText = post.getHTML();
      postData.snippet = post.getSnippetHTML();

      categoryPosts.push(postData);
    }
  } catch(err) { console.log(err); }

  var categoryData = category.exportData();
  categoryData.htmlText = category.getHTML();

  return res.json({
    category: categoryData,
    posts: categoryPosts
  });
}
module.exports = getCategory;
```
* Test the endpoint.
* Create endpoint `get-comments.js`:

```js

var Comment = require('../models/comment');

async function getComments(req, res, next) {

  if (!req.body.hasOwnProperty('post'))
    return res.status(400).send("No post provided.");
  if (!req.body.hasOwnProperty('page'))
    req.body.page = 1;

  try {
    
    let comments = await Comment.getQueryPage(
      { post: req.body.post },
      { creationDate: -1 },
      req.body.page,
      20
    );

    var postComments = [];
    for (var i = 0; i < comments.length; ++i) {
      var commentData = comments[i].exportData();
      commentData.htmlText = comments[i].getHTML();
      postComments.push(commentData)
    }

    res.json(postComments);
  } catch(err) {
    return res.json([]);
  }
}
module.exports = getComments;
```

* Test the endpoint

## Starting the Angular App #

* Install the latest CLI
* Navigate to `my-apps/carolina-blog`
* Run `ng new ngCarolinaBlog` from that directory.
* Inspect the angular app created.
* In the `.angular-cli.json`, set the app's "outDir" to "../static/"
* Inspect the static folder
* Edit the main render in `carolina-blog/app.js`:

```js
  // render and return custom template with data
  return res.render('common/bootstrap_ng', templateData);
```

* Also edit the data var:

```js
// define overridable options for your app.
var data = {
  bootswatchTheme: 'slate',
  title: 'My Carolina Blog',
  subtitle: "A Carolina tutorial using Angular"
};
```

* Visit `/main` to view the starting Angular page.

## Creating the banner #

* Find an image to use as a banner and save it under `ngCarolinaBlog/src/assets/banner.jpg`.
* Create the folder `ngCarolinaBlog/src/apps/components/`.
* In that folder, create `banner-image.ts`.

```ts
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'blog-banner-image',
  templateUrl: './banner-image.html'
})
export class BannerImageComponent implements OnInit {

  private image: string = null;
  private subtitle: string = null;
  private title: string = null;

  constructor() {}

  ngOnInit() {

    // the included template provides this data to us.
    var carolinaMetadata = $('#carolinaMetadata');
    var appName = carolinaMetadata.attr('appName');
    var appData: any = JSON.parse(carolinaMetadata.attr('appData'));

    this.image = '/static/' + appName + '/assets/images/banner.jpg';
    this.title = appData.title;
    this.subtitle = appData.subtitle;
  }
};
```

* Create the file `banner-image.html`.

* Create `home.ts`.
* Create `home.html`.
* Change `app.module.ts`.
* Change `app.component.html`