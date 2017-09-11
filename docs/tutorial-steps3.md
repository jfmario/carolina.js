
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