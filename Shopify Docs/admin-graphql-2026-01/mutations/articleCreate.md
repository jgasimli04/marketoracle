---
title: articleCreate - GraphQL Admin
description: >-
  Creates an
  [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article).
  Articles are content pieces that include a title, body text, and author
  information.


  You can publish the article immediately or schedule it with a specific publish
  date. You can customize the article's URL handle, apply custom templates for
  rendering, and add optional fields like
  [tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.tags),
  an
  [image](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.image),
  and
  [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield)
  objects.


  The mutation validates article content and ensures proper blog association.
  Error handling provides specific feedback for content requirements.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate.md'
---

# article​Create

mutation

Requires Any of `write_content`, `write_online_store_pages` access scopes.

Creates an [`Article`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article). Articles are content pieces that include a title, body text, and author information.

You can publish the article immediately or schedule it with a specific publish date. You can customize the article's URL handle, apply custom templates for rendering, and add optional fields like [tags](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.tags), an [image](https://shopify.dev/docs/api/admin-graphql/latest/mutations/articleCreate#arguments-article.fields.image), and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

The mutation validates article content and ensures proper blog association. Error handling provides specific feedback for content requirements.

## Arguments

* article

  [Article​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleCreateInput)

  required

  The properties of the new article.

* blog

  [Article​Blog​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ArticleBlogInput)

  The properties of the new blog.

***

## Article​Create​Payload returns

* article

  [Article](https://shopify.dev/docs/api/admin-graphql/latest/objects/Article)

  The article that was created.

* user​Errors

  [\[Article​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ArticleCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Creates an article for a blog

  #### Query

  ```graphql
  mutation CreateArticle($article: ArticleCreateInput!) {
    articleCreate(article: $article) {
      article {
        id
        title
        author {
          name
        }
        handle
        body
        summary
        tags
        image {
          altText
          originalSrc
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "article": {
      "blogId": "gid://shopify/Blog/389767568",
      "title": "New Article Title",
      "author": {
        "name": "Test User"
      },
      "handle": "new-article-title",
      "body": "This is the content of the article.",
      "summary": "This is a summary of the article.",
      "isPublished": true,
      "publishDate": "2023-01-01T12:00:00Z",
      "tags": [
        "Tag1",
        "Tag2"
      ],
      "image": {
        "altText": "Alt text for the image",
        "url": "http://example.com/fake_image.jpg"
      }
    }
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CreateArticle($article: ArticleCreateInput!) { articleCreate(article: $article) { article { id title author { name } handle body summary tags image { altText originalSrc } } userErrors { code field message } } }",
   "variables": {
      "article": {
        "blogId": "gid://shopify/Blog/389767568",
        "title": "New Article Title",
        "author": {
          "name": "Test User"
        },
        "handle": "new-article-title",
        "body": "This is the content of the article.",
        "summary": "This is a summary of the article.",
        "isPublished": true,
        "publishDate": "2023-01-01T12:00:00Z",
        "tags": [
          "Tag1",
          "Tag2"
        ],
        "image": {
          "altText": "Alt text for the image",
          "url": "http://example.com/fake_image.jpg"
        }
      }
    }
  }'
  ```

  #### React Router

  ```javascript
  import { authenticate } from "../shopify.server";

  export const loader = async ({request}) => {
    const { admin } = await authenticate.admin(request);
    const response = await admin.graphql(
      `#graphql
    mutation CreateArticle($article: ArticleCreateInput!) {
      articleCreate(article: $article) {
        article {
          id
          title
          author {
            name
          }
          handle
          body
          summary
          tags
          image {
            altText
            originalSrc
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "article": {
              "blogId": "gid://shopify/Blog/389767568",
              "title": "New Article Title",
              "author": {
                  "name": "Test User"
              },
              "handle": "new-article-title",
              "body": "This is the content of the article.",
              "summary": "This is a summary of the article.",
              "isPublished": true,
              "publishDate": "2023-01-01T12:00:00Z",
              "tags": [
                  "Tag1",
                  "Tag2"
              ],
              "image": {
                  "altText": "Alt text for the image",
                  "url": "http://example.com/fake_image.jpg"
              }
          }
      },
    },
    );
    const json = await response.json();
    return json.data;
  }
  ```

  #### Ruby

  ```ruby
  session = ShopifyAPI::Auth::Session.new(
    shop: "your-development-store.myshopify.com",
    access_token: access_token
  )
  client = ShopifyAPI::Clients::Graphql::Admin.new(
    session: session
  )

  query = <<~QUERY
    mutation CreateArticle($article: ArticleCreateInput!) {
      articleCreate(article: $article) {
        article {
          id
          title
          author {
            name
          }
          handle
          body
          summary
          tags
          image {
            altText
            originalSrc
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "article": {
      "blogId": "gid://shopify/Blog/389767568",
      "title": "New Article Title",
      "author": {
        "name": "Test User"
      },
      "handle": "new-article-title",
      "body": "This is the content of the article.",
      "summary": "This is a summary of the article.",
      "isPublished": true,
      "publishDate": "2023-01-01T12:00:00Z",
      "tags": [
        "Tag1",
        "Tag2"
      ],
      "image": {
        "altText": "Alt text for the image",
        "url": "http://example.com/fake_image.jpg"
      }
    }
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CreateArticle($article: ArticleCreateInput!) {
        articleCreate(article: $article) {
          article {
            id
            title
            author {
              name
            }
            handle
            body
            summary
            tags
            image {
              altText
              originalSrc
            }
          }
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "article": {
              "blogId": "gid://shopify/Blog/389767568",
              "title": "New Article Title",
              "author": {
                  "name": "Test User"
              },
              "handle": "new-article-title",
              "body": "This is the content of the article.",
              "summary": "This is a summary of the article.",
              "isPublished": true,
              "publishDate": "2023-01-01T12:00:00Z",
              "tags": [
                  "Tag1",
                  "Tag2"
              ],
              "image": {
                  "altText": "Alt text for the image",
                  "url": "http://example.com/fake_image.jpg"
              }
          }
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "articleCreate": {
      "article": {
        "id": "gid://shopify/Article/1051293784",
        "title": "New Article Title",
        "author": {
          "name": "Test User"
        },
        "handle": "new-article-title",
        "body": "This is the content of the article.",
        "summary": "This is a summary of the article.",
        "tags": [
          "Tag1",
          "Tag2"
        ],
        "image": {
          "altText": "Alt text for the image",
          "originalSrc": "https://cdn.shopify.com/s/files/1/2637/1970/articles/fake_image.jpg?v=1730243735"
        }
      },
      "userErrors": []
    }
  }
  ```

* ### articleCreate reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CreateArticle\(%24article%3A%20ArticleCreateInput!\)%20%7B%0A%20%20articleCreate\(article%3A%20%24article\)%20%7B%0A%20%20%20%20article%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20author%20%7B%0A%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20handle%0A%20%20%20%20%20%20body%0A%20%20%20%20%20%20summary%0A%20%20%20%20%20%20tags%0A%20%20%20%20%20%20image%20%7B%0A%20%20%20%20%20%20%20%20altText%0A%20%20%20%20%20%20%20%20originalSrc%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22article%22%3A%20%7B%0A%20%20%20%20%22blogId%22%3A%20%22gid%3A%2F%2Fshopify%2FBlog%2F389767568%22%2C%0A%20%20%20%20%22title%22%3A%20%22New%20Article%20Title%22%2C%0A%20%20%20%20%22author%22%3A%20%7B%0A%20%20%20%20%20%20%22name%22%3A%20%22Test%20User%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%22handle%22%3A%20%22new-article-title%22%2C%0A%20%20%20%20%22body%22%3A%20%22This%20is%20the%20content%20of%20the%20article.%22%2C%0A%20%20%20%20%22summary%22%3A%20%22This%20is%20a%20summary%20of%20the%20article.%22%2C%0A%20%20%20%20%22isPublished%22%3A%20true%2C%0A%20%20%20%20%22publishDate%22%3A%20%222023-01-01T12%3A00%3A00Z%22%2C%0A%20%20%20%20%22tags%22%3A%20%5B%0A%20%20%20%20%20%20%22Tag1%22%2C%0A%20%20%20%20%20%20%22Tag2%22%0A%20%20%20%20%5D%2C%0A%20%20%20%20%22image%22%3A%20%7B%0A%20%20%20%20%20%20%22altText%22%3A%20%22Alt%20text%20for%20the%20image%22%2C%0A%20%20%20%20%20%20%22url%22%3A%20%22http%3A%2F%2Fexample.com%2Ffake_image.jpg%22%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D)

##### GQL

```graphql
mutation CreateArticle($article: ArticleCreateInput!) {
  articleCreate(article: $article) {
    article {
      id
      title
      author {
        name
      }
      handle
      body
      summary
      tags
      image {
        altText
        originalSrc
      }
    }
    userErrors {
      code
      field
      message
    }
  }
}
```

##### cURL

```bash
curl -X POST \
https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
-H 'Content-Type: application/json' \
-H 'X-Shopify-Access-Token: {access_token}' \
-d '{
"query": "mutation CreateArticle($article: ArticleCreateInput!) { articleCreate(article: $article) { article { id title author { name } handle body summary tags image { altText originalSrc } } userErrors { code field message } } }",
 "variables": {
    "article": {
      "blogId": "gid://shopify/Blog/389767568",
      "title": "New Article Title",
      "author": {
        "name": "Test User"
      },
      "handle": "new-article-title",
      "body": "This is the content of the article.",
      "summary": "This is a summary of the article.",
      "isPublished": true,
      "publishDate": "2023-01-01T12:00:00Z",
      "tags": [
        "Tag1",
        "Tag2"
      ],
      "image": {
        "altText": "Alt text for the image",
        "url": "http://example.com/fake_image.jpg"
      }
    }
  }
}'
```

##### React Router

```javascript
import { authenticate } from "../shopify.server";

export const loader = async ({request}) => {
  const { admin } = await authenticate.admin(request);
  const response = await admin.graphql(
    `#graphql
  mutation CreateArticle($article: ArticleCreateInput!) {
    articleCreate(article: $article) {
      article {
        id
        title
        author {
          name
        }
        handle
        body
        summary
        tags
        image {
          altText
          originalSrc
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "article": {
            "blogId": "gid://shopify/Blog/389767568",
            "title": "New Article Title",
            "author": {
                "name": "Test User"
            },
            "handle": "new-article-title",
            "body": "This is the content of the article.",
            "summary": "This is a summary of the article.",
            "isPublished": true,
            "publishDate": "2023-01-01T12:00:00Z",
            "tags": [
                "Tag1",
                "Tag2"
            ],
            "image": {
                "altText": "Alt text for the image",
                "url": "http://example.com/fake_image.jpg"
            }
        }
    },
  },
  );
  const json = await response.json();
  return json.data;
}
```

##### Node.js

```javascript
const client = new shopify.clients.Graphql({session});
const data = await client.query({
  data: {
    "query": `mutation CreateArticle($article: ArticleCreateInput!) {
      articleCreate(article: $article) {
        article {
          id
          title
          author {
            name
          }
          handle
          body
          summary
          tags
          image {
            altText
            originalSrc
          }
        }
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "article": {
            "blogId": "gid://shopify/Blog/389767568",
            "title": "New Article Title",
            "author": {
                "name": "Test User"
            },
            "handle": "new-article-title",
            "body": "This is the content of the article.",
            "summary": "This is a summary of the article.",
            "isPublished": true,
            "publishDate": "2023-01-01T12:00:00Z",
            "tags": [
                "Tag1",
                "Tag2"
            ],
            "image": {
                "altText": "Alt text for the image",
                "url": "http://example.com/fake_image.jpg"
            }
        }
    },
  },
});
```

##### Ruby

```ruby
session = ShopifyAPI::Auth::Session.new(
  shop: "your-development-store.myshopify.com",
  access_token: access_token
)
client = ShopifyAPI::Clients::Graphql::Admin.new(
  session: session
)

query = <<~QUERY
  mutation CreateArticle($article: ArticleCreateInput!) {
    articleCreate(article: $article) {
      article {
        id
        title
        author {
          name
        }
        handle
        body
        summary
        tags
        image {
          altText
          originalSrc
        }
      }
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "article": {
    "blogId": "gid://shopify/Blog/389767568",
    "title": "New Article Title",
    "author": {
      "name": "Test User"
    },
    "handle": "new-article-title",
    "body": "This is the content of the article.",
    "summary": "This is a summary of the article.",
    "isPublished": true,
    "publishDate": "2023-01-01T12:00:00Z",
    "tags": [
      "Tag1",
      "Tag2"
    ],
    "image": {
      "altText": "Alt text for the image",
      "url": "http://example.com/fake_image.jpg"
    }
  }
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "article": {
    "blogId": "gid://shopify/Blog/389767568",
    "title": "New Article Title",
    "author": {
      "name": "Test User"
    },
    "handle": "new-article-title",
    "body": "This is the content of the article.",
    "summary": "This is a summary of the article.",
    "isPublished": true,
    "publishDate": "2023-01-01T12:00:00Z",
    "tags": [
      "Tag1",
      "Tag2"
    ],
    "image": {
      "altText": "Alt text for the image",
      "url": "http://example.com/fake_image.jpg"
    }
  }
}
```

## Response

JSON

```json
{
  "articleCreate": {
    "article": {
      "id": "gid://shopify/Article/1051293784",
      "title": "New Article Title",
      "author": {
        "name": "Test User"
      },
      "handle": "new-article-title",
      "body": "This is the content of the article.",
      "summary": "This is a summary of the article.",
      "tags": [
        "Tag1",
        "Tag2"
      ],
      "image": {
        "altText": "Alt text for the image",
        "originalSrc": "https://cdn.shopify.com/s/files/1/2637/1970/articles/fake_image.jpg?v=1730243735"
      }
    },
    "userErrors": []
  }
}
```
