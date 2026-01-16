---
title: blogDelete - GraphQL Admin
description: >-
  Permanently deletes a blog from a shop. This mutation removes the blog
  container and its organizational structure.


  For example, when consolidating multiple seasonal blogs into a single
  year-round content strategy, merchants can use this mutation to remove unused
  blogs.


  Use the `blogDelete` mutation to:

  - Remove unused or outdated blogs

  - Consolidate content organization

  - Clean up blog structure


  The deletion is permanent and returns the deleted blog's ID for confirmation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogDelete'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/blogDelete.md'
---

# blog​Delete

mutation

Requires Any of `write_content`, `write_online_store_pages` access scopes.

Permanently deletes a blog from a shop. This mutation removes the blog container and its organizational structure.

For example, when consolidating multiple seasonal blogs into a single year-round content strategy, merchants can use this mutation to remove unused blogs.

Use the `blogDelete` mutation to:

* Remove unused or outdated blogs
* Consolidate content organization
* Clean up blog structure

The deletion is permanent and returns the deleted blog's ID for confirmation.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the blog to be deleted.

***

## Blog​Delete​Payload returns

* deleted​Blog​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted blog.

* user​Errors

  [\[Blog​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BlogDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Remove an existing Blog

  #### Query

  ```graphql
  mutation DeleteBlog($id: ID!) {
    blogDelete(id: $id) {
      deletedBlogId
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
    "id": "gid://shopify/Blog/389767568"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DeleteBlog($id: ID!) { blogDelete(id: $id) { deletedBlogId userErrors { code field message } } }",
   "variables": {
      "id": "gid://shopify/Blog/389767568"
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
    mutation DeleteBlog($id: ID!) {
      blogDelete(id: $id) {
        deletedBlogId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Blog/389767568"
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
    mutation DeleteBlog($id: ID!) {
      blogDelete(id: $id) {
        deletedBlogId
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Blog/389767568"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DeleteBlog($id: ID!) {
        blogDelete(id: $id) {
          deletedBlogId
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Blog/389767568"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "blogDelete": {
      "deletedBlogId": "gid://shopify/Blog/389767568",
      "userErrors": []
    }
  }
  ```

* ### blogDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DeleteBlog\(%24id%3A%20ID!\)%20%7B%0A%20%20blogDelete\(id%3A%20%24id\)%20%7B%0A%20%20%20%20deletedBlogId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FBlog%2F389767568%22%0A%7D)

##### GQL

```graphql
mutation DeleteBlog($id: ID!) {
  blogDelete(id: $id) {
    deletedBlogId
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
"query": "mutation DeleteBlog($id: ID!) { blogDelete(id: $id) { deletedBlogId userErrors { code field message } } }",
 "variables": {
    "id": "gid://shopify/Blog/389767568"
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
  mutation DeleteBlog($id: ID!) {
    blogDelete(id: $id) {
      deletedBlogId
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Blog/389767568"
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
    "query": `mutation DeleteBlog($id: ID!) {
      blogDelete(id: $id) {
        deletedBlogId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Blog/389767568"
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
  mutation DeleteBlog($id: ID!) {
    blogDelete(id: $id) {
      deletedBlogId
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Blog/389767568"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Blog/389767568"
}
```

## Response

JSON

```json
{
  "blogDelete": {
    "deletedBlogId": "gid://shopify/Blog/389767568",
    "userErrors": []
  }
}
```
