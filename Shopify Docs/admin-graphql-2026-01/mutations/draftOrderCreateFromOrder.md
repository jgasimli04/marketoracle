---
title: draftOrderCreateFromOrder - GraphQL Admin
description: Creates a draft order from order.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderCreateFromOrder.md
---

# draft​Order​Create​From​Order

mutation

Requires `write_draft_orders` access scope. Also: Requires `write_orders` access scope.

Creates a draft order from order.

## Arguments

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  Specifies the order's id that we create the draft order from.

***

## Draft​Order​Create​From​Order​Payload returns

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The created draft order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Create a draft order from order

  #### Description

  Create a draft order from order

  #### Query

  ```graphql
  mutation DraftOrderCreateFromOrder($orderId: ID!) {
    draftOrderCreateFromOrder(orderId: $orderId) {
      draftOrder {
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
    "orderId": "gid://shopify/Order/148977776"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation DraftOrderCreateFromOrder($orderId: ID!) { draftOrderCreateFromOrder(orderId: $orderId) { draftOrder { id } userErrors { field message } } }",
   "variables": {
      "orderId": "gid://shopify/Order/148977776"
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
    mutation DraftOrderCreateFromOrder($orderId: ID!) {
      draftOrderCreateFromOrder(orderId: $orderId) {
        draftOrder {
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
          "orderId": "gid://shopify/Order/148977776"
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
    mutation DraftOrderCreateFromOrder($orderId: ID!) {
      draftOrderCreateFromOrder(orderId: $orderId) {
        draftOrder {
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
    "orderId": "gid://shopify/Order/148977776"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation DraftOrderCreateFromOrder($orderId: ID!) {
        draftOrderCreateFromOrder(orderId: $orderId) {
          draftOrder {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "orderId": "gid://shopify/Order/148977776"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "draftOrderCreateFromOrder": {
      "draftOrder": {
        "id": "gid://shopify/DraftOrder/1069920479"
      },
      "userErrors": []
    }
  }
  ```

* ### draftOrderCreateFromOrder reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20DraftOrderCreateFromOrder\(%24orderId%3A%20ID!\)%20%7B%0A%20%20draftOrderCreateFromOrder\(orderId%3A%20%24orderId\)%20%7B%0A%20%20%20%20draftOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22orderId%22%3A%20%22gid%3A%2F%2Fshopify%2FOrder%2F148977776%22%0A%7D)

##### GQL

```graphql
mutation DraftOrderCreateFromOrder($orderId: ID!) {
  draftOrderCreateFromOrder(orderId: $orderId) {
    draftOrder {
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
"query": "mutation DraftOrderCreateFromOrder($orderId: ID!) { draftOrderCreateFromOrder(orderId: $orderId) { draftOrder { id } userErrors { field message } } }",
 "variables": {
    "orderId": "gid://shopify/Order/148977776"
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
  mutation DraftOrderCreateFromOrder($orderId: ID!) {
    draftOrderCreateFromOrder(orderId: $orderId) {
      draftOrder {
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
        "orderId": "gid://shopify/Order/148977776"
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
    "query": `mutation DraftOrderCreateFromOrder($orderId: ID!) {
      draftOrderCreateFromOrder(orderId: $orderId) {
        draftOrder {
          id
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "orderId": "gid://shopify/Order/148977776"
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
  mutation DraftOrderCreateFromOrder($orderId: ID!) {
    draftOrderCreateFromOrder(orderId: $orderId) {
      draftOrder {
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
  "orderId": "gid://shopify/Order/148977776"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "orderId": "gid://shopify/Order/148977776"
}
```

## Response

JSON

```json
{
  "draftOrderCreateFromOrder": {
    "draftOrder": {
      "id": "gid://shopify/DraftOrder/1069920479"
    },
    "userErrors": []
  }
}
```
