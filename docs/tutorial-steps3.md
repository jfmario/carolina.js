
## Creating Filler Posts #

* Add this to `fixtures/posts.yml` under `Category`:

```yml
    - fields:
        slug: child-category
        categoryName: Child Category
        parentPath:
          - great-grandparent-category
          - grandparent-category
          - parent-category
        markdownText: This category is like a million levels nested deep.
```

* Create the following post fixtures, with proper dates

```yml
category: child-category
slug: deep-post
```

```md
This post is very deep in categories.
```

```yml
category: blog-tests-md
slug: link-post
```

```md
Here is a link to [Google](http://google.com)
and here is a link to [Wikipedia](http://en.wikipedia.org).
```

* The rest could be any category.

`list-post`

```
This is an unordered list:

* Item one
* Item two
* Item three

This is an ordered list:

1. Item one
2. Item two
3. Item three
```

`various-post`

```
# Heading 1 #

## Heading 2 #

### Heading 3 #

#### Heading 4 #

##### Heading 5 #

###### Heading 6 # 

### Dictionary List #

<dl>
  
  <dt>Hurricane Irma</dt>
  <dd>The cause of all the rain outside right now.</dd>

  <dt>Hurricane Harvey</dt>
  <dd>Something from last week.</dd>
</dl>

### Table #

| Row Number | Column A | Column B | Column C |
| --- | --- | --- | --- |
| 1 | Cell A1 | Cell B1 | Cell C1 |
| 2 | Cell A2 | Cell B2 | Cell C2 |
| 1 | Cell A3 | Cell B3 | Cell C3 |

### Superscript and Subscript #

My favorite chemical is H<sub>2</sub>O and my favorite number is 2<sup>8</sup>.

### Pre/code #

Here is some javascript code:

    var carolina = require('carolina');

    for (var i = 0; i < 10; ++i) {
      console.log(i+1);
    }

### Blockquote #

> Despite constant negative press covfefe
>
> by President Donald J Trump
```

* Load the data and view the site.
* The markdown isn't working, so we need to use a better library.
* In every post, change the markdown input to: `var md = require('markdown-it')({ html: true });`
* In every model, edit the toHTML functions to be like: `return md.render(this.markdownText);`
* Run `npm install --save markdown-it`.
* View the site.
* Some the elements don't work prefectly, you can use either your own CSS or type HTML to address this.

## Expanding the Post Model #

* Add the following fields to `carolina-blog/models/post.js`:

```js
      imageCaption: new fields.StringField({
        default: '',
        name: "Image Caption"
      }),
      imageUrl: new fields.StringField({
        default: '',
        name: "Image Link"
      })
```

* Add the properties `public imageCaption: string;` and `public imageUrl: string;` to `carolina-blog/ngCarolinaBlog/app/classes/post.ts`.

* Edit `carolina-blog/ngCarolinaBlog/app/components/post-snippet.html` to add below the h3 tag:

```html
  <div *ngIf="post.imageUrl.length > 0">

    <img class="rounded" width="50%" [src]="post.imageUrl" />

    <p *ngIf="post.imageCaption.length > 0">
      <small><i>{{ post.imageCaption }}</i></small>
    </p>
  </div>
```

* Add another post fixture called "image-post" this time with an image url and a caption.
* Rebuild the Angular app and serve it.

## Pagination #

* Rewrite `carolina-blog/ngCarolinaBlog/app/components/home.ts` and `carolina-blog/ngCarolinaBlog/app/components/home.html`.

```ts
export class HomeComponent implements OnInit {

  private posts: Post[] = [];
  private page = 1;

  constructor(private apiService: ApiService) {}

  private async previousPage() {
    --this.page;
    this.getPage();
  }
  private async nextPage() {
    ++this.page;
    this.getPage();
  }

  private async getPage() {
    this.posts = await this.apiService.post('/get-posts', { page: this.page });
  }

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

<div class="btn-group">
  <button class="btn btn-danger" (click)="previousPage()" *ngIf="page > 1">Newer Posts</button>
  <button class="btn btn-info" (click)="nextPage()" *ngIf="posts.length>0">Older Posts</button>
</div>
```

## Search Form #

* Create an endpoint to support text searches against all posts or against a category.

```js

var Post = require('../models/post');

async function search(req, res, next) {

  if (!req.body.hasOwnProperty('search'))
    return res.status(400).send("No search provided.");
  if (!req.body.hasOwnProperty('page'))
    req.body.page = 1;
  
  try {
    
    var queryFunction = function() {
      if (this.markdownText.indexOf(req.body.search) != -1) return true;
      else return false;
    };
    var filter = { $where: queryFunction };

    if (req.body.hasOwnProperty('category'))
      filter.categories = req.body.category;

    let posts = await Post.getQueryPage(
      filter,
      { publishDate: -1 },
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
    console.log(err);
    res.status(400).send(err);
  }
}
module.exports = search;
```

* Attach it to `/search` and test the endpoint. It does an exact match search on the `markdownText`, but the search query function could be expanded later.
* In `carolina-blog/ngCarolinaApp/src/app/components/home.ts`, add:

```ts
  private searchText: string = '';
  private search: string = null;
```

* Rewrite `getPage()`:

```ts
  private async getPage() {
    if (this.search) {
      this.posts = await this.apiService.post('/search', {
        page: this.page,
        search: this.search
      });
    }
    else this.posts = await this.apiService.post('/get-posts', { page: this.page });
  }
```

* Create methods `submitSearch()` and `clearSearch()`.

```ts
  private submitSearch() {
    this.page = 1;
    this.search = this.searchText;
    this.getPage();
  }
  private clearSearch() {
    this.page = 1;
    this.search = null;
    this.searchText = '';
    this.getPage();
  }
```

* Rewrite `home.html`.

```html
<blog-banner-image></blog-banner-image>

<br />

<div class="row">
  <div class="col-8">
    <h2 class="display">POSTS</h2>

    <div *ngFor="let post of posts">
      <blog-post-snippet [post]="post"></blog-post-snippet>
    </div>

    <div class="btn-group">
      <button class="btn btn-success" (click)="previousPage()" *ngIf="page > 1">Newer Posts</button>
      <button class="btn btn-warning" (click)="nextPage()" *ngIf="posts.length>0">Older Posts</button>
    </div>
  </div>
  <div class="col-4">
    <form class="form-inline">

      <input class="form-control mb-2 mr-sm-2 mb-sm-0" name="searchText" type="text" [(ngModel)]="searchText" />

      <button class="btn btn-primary" (click)="submitSearch()">Search</button>
      <button class="btn btn-secondary" (click)="clearSearch()">Clear</button>
    </form>
  </div>
</div>
```

* Import and register `FormsModule` in `app.module.ts`.