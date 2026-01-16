---
title: productReorderMedia - GraphQL Admin
description: >-
  Reorders
  [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)
  attached to a product, changing their sequence in product displays. The
  operation processes asynchronously to handle
  [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)
  with large media collections.


  Specify the [product
  ID](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-id)
  and an array of
  [moves](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-moves),
  where each move contains a media ID and its new zero-based position.


  > Note:

  > Only include media items that need repositioning. Unchanged items maintain
  their relative order automatically.


  The mutation returns a
  [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to
  track the reordering progress. Poll the job status to determine when the
  operation completes and media positions update across all sales channels.


  Learn more about [reordering product
  media](https://shopify.dev/docs/apps/build/online-store/product-media#step-6-reorder-media-objects).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia.md
---

# product​Reorder​Media

mutation

Requires `write_products` access scope. Also: The user must have a permission to reorder the media attached to a product.

Reorders [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media) attached to a product, changing their sequence in product displays. The operation processes asynchronously to handle [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with large media collections.

Specify the [product ID](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-id) and an array of [moves](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productReorderMedia#arguments-moves), where each move contains a media ID and its new zero-based position.

***

Note

Only include media items that need repositioning. Unchanged items maintain their relative order automatically.

***

The mutation returns a [`Job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) to track the reordering progress. Poll the job status to determine when the operation completes and media positions update across all sales channels.

Learn more about [reordering product media](https://shopify.dev/docs/apps/build/online-store/product-media#step-6-reorder-media-objects).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the product on which to reorder medias.

* moves

  [\[Move​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoveInput)

  required

  A list of moves to perform which will be evaluated in order.

***

## Product​Reorder​Media​Payload returns

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job which reorders the media.

* media​User​Errors

  [\[Media​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-nullDeprecated

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Reorder a product's media

  #### Description

  Update the order of a product's media

  #### Query

  ```graphql
  mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
    productReorderMedia(id: $id, moves: $moves) {
      job {
        id
      }
    }
  }
  ```

  #### Variables

  ```json
  {
    "id": "gid://shopify/Product/108828309",
    "moves": [
      {
        "id": "gid://shopify/MediaImage/183532652",
        "newPosition": "2"
      },
      {
        "id": "gid://shopify/MediaImage/731367280",
        "newPosition": "3"
      }
    ]
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) { productReorderMedia(id: $id, moves: $moves) { job { id } } }",
   "variables": {
      "id": "gid://shopify/Product/108828309",
      "moves": [
        {
          "id": "gid://shopify/MediaImage/183532652",
          "newPosition": "2"
        },
        {
          "id": "gid://shopify/MediaImage/731367280",
          "newPosition": "3"
        }
      ]
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
    mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
      productReorderMedia(id: $id, moves: $moves) {
        job {
          id
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/Product/108828309",
          "moves": [
              {
                  "id": "gid://shopify/MediaImage/183532652",
                  "newPosition": "2"
              },
              {
                  "id": "gid://shopify/MediaImage/731367280",
                  "newPosition": "3"
              }
          ]
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
    mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
      productReorderMedia(id: $id, moves: $moves) {
        job {
          id
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/Product/108828309",
    "moves": [
      {
        "id": "gid://shopify/MediaImage/183532652",
        "newPosition": "2"
      },
      {
        "id": "gid://shopify/MediaImage/731367280",
        "newPosition": "3"
      }
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
        productReorderMedia(id: $id, moves: $moves) {
          job {
            id
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/Product/108828309",
          "moves": [
              {
                  "id": "gid://shopify/MediaImage/183532652",
                  "newPosition": "2"
              },
              {
                  "id": "gid://shopify/MediaImage/731367280",
                  "newPosition": "3"
              }
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "productReorderMedia": {
      "job": {
        "id": "gid://shopify/Job/6dfa599a-a426-4030-8f10-6564abc465f9"
      }
    }
  }
  ```

* ### productReorderMedia reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20productReorderMedia\(%24id%3A%20ID!%2C%20%24moves%3A%20%5BMoveInput!%5D!\)%20%7B%0A%20%20productReorderMedia\(id%3A%20%24id%2C%20moves%3A%20%24moves\)%20%7B%0A%20%20%20%20job%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FProduct%2F108828309%22%2C%0A%20%20%22moves%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F183532652%22%2C%0A%20%20%20%20%20%20%22newPosition%22%3A%20%222%22%0A%20%20%20%20%7D%2C%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FMediaImage%2F731367280%22%2C%0A%20%20%20%20%20%20%22newPosition%22%3A%20%223%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
  productReorderMedia(id: $id, moves: $moves) {
    job {
      id
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
"query": "mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) { productReorderMedia(id: $id, moves: $moves) { job { id } } }",
 "variables": {
    "id": "gid://shopify/Product/108828309",
    "moves": [
      {
        "id": "gid://shopify/MediaImage/183532652",
        "newPosition": "2"
      },
      {
        "id": "gid://shopify/MediaImage/731367280",
        "newPosition": "3"
      }
    ]
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
  mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
    productReorderMedia(id: $id, moves: $moves) {
      job {
        id
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/Product/108828309",
        "moves": [
            {
                "id": "gid://shopify/MediaImage/183532652",
                "newPosition": "2"
            },
            {
                "id": "gid://shopify/MediaImage/731367280",
                "newPosition": "3"
            }
        ]
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
    "query": `mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
      productReorderMedia(id: $id, moves: $moves) {
        job {
          id
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/Product/108828309",
        "moves": [
            {
                "id": "gid://shopify/MediaImage/183532652",
                "newPosition": "2"
            },
            {
                "id": "gid://shopify/MediaImage/731367280",
                "newPosition": "3"
            }
        ]
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
  mutation productReorderMedia($id: ID!, $moves: [MoveInput!]!) {
    productReorderMedia(id: $id, moves: $moves) {
      job {
        id
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/Product/108828309",
  "moves": [
    {
      "id": "gid://shopify/MediaImage/183532652",
      "newPosition": "2"
    },
    {
      "id": "gid://shopify/MediaImage/731367280",
      "newPosition": "3"
    }
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Product/108828309",
  "moves": [
    {
      "id": "gid://shopify/MediaImage/183532652",
      "newPosition": "2"
    },
    {
      "id": "gid://shopify/MediaImage/731367280",
      "newPosition": "3"
    }
  ]
}
```

## Response

JSON

```json
{
  "productReorderMedia": {
    "job": {
      "id": "gid://shopify/Job/6dfa599a-a426-4030-8f10-6564abc465f9"
    }
  }
}
```
