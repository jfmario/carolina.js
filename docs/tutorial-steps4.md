
## The Post View #

* Write component `post-view.ts`.

```ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Post } from '../classes/post';
import { ApiService } from '../services/api';

@Component({
  selector: 'blog-post-view',
  templateUrl: './post-view.html',
})
export class PostViewComponent implements OnInit {

  private postSlug: string = null;
  private post: Post;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.postSlug = this.route.snapshot.paramMap.get('slug');
    let response = await this.apiService.post('/get-post', {
      slug: this.postSlug
    });
    this.post = response;
  }
}
```

* Write `post-view.html`

```html
<blog-banner-image></blog-banner-image>

<br />

<div class="row">
  <div class="col-8">

    <p><small class="text-muted">
      {{ post.publishDate | date:'longDate' }} by {{ post.author }}
    </small></p>

    <h2 class="display">{{ post.title }}</h2>

    <div *ngIf="post.imageUrl.length > 0">

      <img class="rounded" width="50%" [src]="post.imageUrl" />

      <p *ngIf="post.imageCaption.length > 0">
        <small><i>{{ post.imageCaption }}</i></small>
      </p>
    </div>

    <div [innerHTML]="post.snippet | safeHtml"></div>

    <hr class="my-4" />

    <p class="lead"><b>
      {{ post.categories.join(", ") }}
    </b></p>

    <hr class="my-4" />

    <!--previous link-->
    <!--next link-->
  </div>
  <div class="col-4">
    <!-- await sidebar -->
  </div>
</div>
```

* Import and register the component in `app.module.ts`.
* Add a router:

```ts
const appRoutes: Routes = [
  { component: HomeComponent, path: '' },
  { component: PostViewComponent, path: 'post/:slug' }
];
```

* Edit `post-snippet.html` to add links:

```html
<div>

  <br />

  <p><small class="text-muted">
    {{ post.publishDate | date:'longDate' }}
  </small></p>

  <h3><a [routerLink]="['/post', post.slug]">{{ post.title }}</a></h3>

  <div *ngIf="post.imageUrl.length > 0">

    <img class="rounded" width="50%" [src]="post.imageUrl" />

    <p *ngIf="post.imageCaption.length > 0">
      <small><i>{{ post.imageCaption }}</i></small>
    </p>
  </div>

  <div [innerHTML]="post.snippet | safeHtml"></div>

  <a [routerLink]="['/post', post.slug]">Read more</a>

  <br />
</div>
```

* Test the site and note that the categories are showing slugs.
* Edit the endpoint `get-post`:

```js
var Category = require('../models/category');
var Post = require('../models/post');

async function getPost(req, res, next) {

  if (!req.body.hasOwnProperty('slug'))
    return res.status(400).send("No post slug provided.");
  
  try {
    
    let post = await Post.lookup(req.body.slug);
    var postData = post.exportData();
    postData.htmlText = post.getHTML();
    postData.snippet = post.getSnippetHTML();

    var categoryNames = [];

    for (var i = 0; i < postData.categories.length; ++i) {
      var category = await Category.lookup(postData.categories[i]);
      categoryNames.push(category.categoryName);
    }
    
    postData.categories = categoryNames;
    return res.json(postData);
  } catch(err) { 
    console.log(err);
  }
};
module.exports = getPost;
```

* Now the category names show up.
* Note that "Deep Post" is only a real child of its lowest category. We would have to explicitly make it a member of the entire hierarcy.

## Recent Posts Widget #

* Write component `recent-post`.

```ts
import { Component, OnInit } from '@angular/core';

import { Post } from '../classes/post';
import { ApiService } from '../services/api';

@Component({
  selector: 'blog-recent-posts',
  templateUrl: './recent-posts.html',
})
export class RecentPostsComponent implements OnInit {

  private posts: Post[] = [];

  constructor(
    private apiService: ApiService
  ) {}

  async ngOnInit() {
    let recentPosts = await this.apiService.post('/get-posts', {});
    this.posts = recentPosts.slice(0, 5);
  }
}
```
```html
<div>

  <h4>Recent Posts</h4>

  <hr class="my-2">

  <div *ngFor="let post of posts">

    <a [routerLink]="['/post', post.slug]">{{ post.title }}</a>

    <hr class="my-2">
  </div>
</div>
```

* Write component `sidebar`.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'blog-sidebar',
  templateUrl: './sidebar.html',
})
export class SidebarComponent{
  constructor() {}
}
```

```html
<div>
  <blog-recent-posts></blog-recent-posts>
</div>
```

* Register the two components in `app.module.ts`.
* In `home.html` add `<br /><br /><blog-sidebar></blog-sidebar>` after the search form.

## Comment Support #

<!-- support user images in auth app -->
<!-- provide api endpoint for get-comments (create BlogUser if it doesnt exist) -->
<!-- display paginated comments below post -->
<!-- edit post model with allow-comments -->
<!-- edit blogUser model with can-comment -->
<!-- provide api endpoint for submit-comment -->
<!-- create authApiService for authenticated requests -->
<!-- install Angular component for Codemirror -->
<!-- create comment submission form -->
