
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

* Test the endpoint.