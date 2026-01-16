---
title: commentSpam - GraphQL Admin
description: >-
  Marks a comment as spam, removing it from public view. This mutation enables
  merchants to quickly handle unwanted promotional content, malicious links, or
  other spam that appears in blog discussions.


  For example, when a comment contains suspicious links to unrelated products or
  services, merchants can mark it as spam to immediately hide it from customers.


  Use the `commentSpam` mutation to:

  - Hide promotional or malicious comments from public view

  - Protect customers from potentially harmful links

  - Maintain professional discussion quality on blog articles


  Spam-marked comments can be reviewed later and potentially restored using the
  `commentNotSpam` mutation if they were incorrectly classified.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/mutations/commentSpam.md'
---

# comment​Spam

mutation

Requires Any of `write_content`, `write_online_store_pages` access scopes.

Marks a comment as spam, removing it from public view. This mutation enables merchants to quickly handle unwanted promotional content, malicious links, or other spam that appears in blog discussions.

For example, when a comment contains suspicious links to unrelated products or services, merchants can mark it as spam to immediately hide it from customers.

Use the `commentSpam` mutation to:

* Hide promotional or malicious comments from public view
* Protect customers from potentially harmful links
* Maintain professional discussion quality on blog articles

Spam-marked comments can be reviewed later and potentially restored using the `commentNotSpam` mutation if they were incorrectly classified.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the comment to be marked as spam.

***

## Comment​Spam​Payload returns

* comment

  [Comment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Comment)

  The comment that was marked as spam.

* user​Errors

  [\[Comment​Spam​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CommentSpamUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Marks a comment as spam

  #### Description

  Marks a comment as spam

  #### Query

  ```graphql
  mutation MarkCommentAsSpam($id: ID!) {
    commentSpam(id: $id) {
      comment {
        id
      }
      userErrors {
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
  "query": "mutation MarkCommentAsSpam($id: ID!) { commentSpam(id: $id) { comment { id } userErrors { field message } } }",
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
    mutation MarkCommentAsSpam($id: ID!) {
      commentSpam(id: $id) {
        comment {
          id
        }
        userErrors {
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
    mutation MarkCommentAsSpam($id: ID!) {
      commentSpam(id: $id) {
        comment {
          id
        }
        userErrors {
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
      "query": `mutation MarkCommentAsSpam($id: ID!) {
        commentSpam(id: $id) {
          comment {
            id
          }
          userErrors {
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
    "commentSpam": {
      "comment": {
        "id": "gid://shopify/Comment/757536350"
      },
      "userErrors": []
    }
  }
  ```

* ### commentSpam reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20MarkCommentAsSpam\(%24id%3A%20ID!\)%20%7B%0A%20%20commentSpam\(id%3A%20%24id\)%20%7B%0A%20%20%20%20comment%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FComment%2F757536350%22%0A%7D)

##### GQL

```graphql
mutation MarkCommentAsSpam($id: ID!) {
  commentSpam(id: $id) {
    comment {
      id
    }
    userErrors {
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
"query": "mutation MarkCommentAsSpam($id: ID!) { commentSpam(id: $id) { comment { id } userErrors { field message } } }",
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
  mutation MarkCommentAsSpam($id: ID!) {
    commentSpam(id: $id) {
      comment {
        id
      }
      userErrors {
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
    "query": `mutation MarkCommentAsSpam($id: ID!) {
      commentSpam(id: $id) {
        comment {
          id
        }
        userErrors {
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
  mutation MarkCommentAsSpam($id: ID!) {
    commentSpam(id: $id) {
      comment {
        id
      }
      userErrors {
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
  "commentSpam": {
    "comment": {
      "id": "gid://shopify/Comment/757536350"
    },
    "userErrors": []
  }
}
```
