
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
    var appData: any = JSON.parse(carolinaMetadata.attr('data'));

    this.image = '/static/' + appName + '/assets/images/banner.jpg';
    this.title = appData.title;
    this.subtitle = appData.subtitle;
  }
};
```

* Create the file `banner-image.html`.

```html
<div class="card card-inverse">

  <img class="card-img" [src]="image" width="100%" />

  <div class="card-img-overlay">

    <h4 class="card-title">{{ title }}</h4>

    <p class="card-text">{{ subtitle }}</p>
  </div>
</div>
```

* Create `home.ts`.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'blog-home',
  templateUrl: './home.html',
})
export class HomeComponent {
  constructor() {}
}
```

* Create `home.html`.

```html
<blog-banner-image></blog-banner-image>
```

* Change `app.module.ts`.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BannerImageComponent } from './components/banner-image';
import { HomeComponent } from './components/home';

const appRoutes: Routes = [
  { component: HomeComponent, path: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    BannerImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

* Change `app.component.html`

```html
<router-outlet></router-outlet>
```

* From `ngCarolinaBlog`, run `ng build`.
* Check the site out.
* Create `ngCarolinaBlog/app/classes/post.ts`.

```ts
export class Post {
  public author: string;
  public categories: string[];
  public creationDate: Date;
  public htmlText: string;
  public markdownText: string;
  public modifiedDate: Date;
  public publishDate: Date;
  public slug: string;
  public snippet: string;
  public status: string;
  public tags: string[];
  public title: string;
};
```

## Creating the Main Page #

* Create `ngCarolinaBlog/app/components/post-snippet.ts` and html.

```ts
import { Component, Input } from '@angular/core';
import { Post } from '../classes/post';

@Component({
  selector: 'blog-post-snippet',
  templateUrl: './post-snippet.html',
})
export class PostSnippetComponent {

  @Input()
  private post: Post;

  constructor() {}
}
```

```html
<div>

  <p><small class="text-muted">
    {{ post.publishDate | date:'longDate' }}
  </small></p>

  <h3>{{ post.title }}</h3>

  <div [innerHTML]="post.snippet | safeHtml"></div>

  <br />
  <br />
</div>
```

* Create `ngCarolinaBlog/app/services/api.ts`.

```ts
import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  private baseUrl = window.location.pathname.split('/')[1] + '/api';
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) {}

  public async post(endpoint: string, data: any) {
    try {
      let res = await this.http.post(
        this.baseUrl + endpoint,
        JSON.stringify(data),
        { headers: this.headers }
      ).toPromise();
      return res.json();
    } catch(error) {
      console.log(error);
    }
  }
}
```

* Create `ngCarolinaBlog/app/pipes/safe-html.ts`.

```ts
import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: string) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
```

* Register the above with the module.
* Import and register `HttpModule`.
* Update `home.ts` and html.

```ts
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { Post } from '../classes/post';
import { ApiService } from '../services/api';

@Component({
  selector: 'blog-home',
  templateUrl: './home.html',
})
export class HomeComponent implements OnInit {

  private posts: Post[] = [];

  constructor(private apiService: ApiService) {}

  async ngOnInit() {
    this.posts = await this.apiService.post('/get-posts', { page: 1 });
  }
}
```

```html
<blog-banner-image></blog-banner-image>

<br />

<h2 class="display">POSTS</h2>

<div *ngFor="let post of posts">
  <blog-post-snippet [post]="post"></blog-post-snippet>
</div>
```

* View the site.
