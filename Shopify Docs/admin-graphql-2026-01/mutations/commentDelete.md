---
title: commentDelete - GraphQL Admin
description: >-
  Permanently removes a comment from a blog article.


  For example, when a comment contains spam links or inappropriate language that
  violates store policies, merchants can delete it entirely.


  Use the `commentDelete` mutation to:

  - Remove spam or inappropriate comments permanently

  - Clean up irrelevant discussions

  - Maintain content standards on blog articles


  Deletion is permanent and can't be undone.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentDelete'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentDelete.md'
---

# comment​Delete

mutation

Requires Any of `write_content`, `write_online_store_pages` access scopes.

Permanently removes a comment from a blog article.

For example, when a comment contains spam links or inappropriate language that violates store policies, merchants can delete it entirely.

Use the `commentDelete` mutation to:

* Remove spam or inappropriate comments permanently
* Clean up irrelevant discussions
* Maintain content standards on blog articles

Deletion is permanent and can't be undone.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the comment to be deleted.

***

## Comment​Delete​Payload returns

* deleted​Comment​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the comment that was deleted.

* user​Errors

  [\[Comment​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Removes a comment

  #### Query

  ```graphql
  mutation CommentDelete($id: ID!) {
    commentDelete(id: $id) {
      deletedCommentId
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
    "id": "gid://shopify/Comment/757536350"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation CommentDelete($id: ID!) { commentDelete(id: $id) { deletedCommentId userErrors { code field message } } }",
   "variables": {
      "id": "gid://shopify/Comment/757536350"
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
    mutation CommentDelete($id: ID!) {
      commentDelete(id: $id) {
        deletedCommentId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Comment/757536350"
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
    mutation CommentDelete($id: ID!) {
      commentDelete(id: $id) {
        deletedCommentId
        userErrors {
          code
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Comment/757536350"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation CommentDelete($id: ID!) {
        commentDelete(id: $id) {
          deletedCommentId
          userErrors {
            code
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Comment/757536350"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "commentDelete": {
      "deletedCommentId": "gid://shopify/Comment/757536350",
      "userErrors": []
    }
  }
  ```

* ### commentDelete reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20CommentDelete\(%24id%3A%20ID!\)%20%7B%0A%20%20commentDelete\(id%3A%20%24id\)%20%7B%0A%20%20%20%20deletedCommentId%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20code%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FComment%2F757536350%22%0A%7D)

##### GQL

```graphql
mutation CommentDelete($id: ID!) {
  commentDelete(id: $id) {
    deletedCommentId
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
"query": "mutation CommentDelete($id: ID!) { commentDelete(id: $id) { deletedCommentId userErrors { code field message } } }",
 "variables": {
    "id": "gid://shopify/Comment/757536350"
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
  mutation CommentDelete($id: ID!) {
    commentDelete(id: $id) {
      deletedCommentId
      userErrors {
        code
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Comment/757536350"
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
    "query": `mutation CommentDelete($id: ID!) {
      commentDelete(id: $id) {
        deletedCommentId
        userErrors {
          code
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Comment/757536350"
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
  mutation CommentDelete($id: ID!) {
    commentDelete(id: $id) {
      deletedCommentId
      userErrors {
        code
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Comment/757536350"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Comment/757536350"
}
```

## Response

JSON

```json
{
  "commentDelete": {
    "deletedCommentId": "gid://shopify/Comment/757536350",
    "userErrors": []
  }
}
```
