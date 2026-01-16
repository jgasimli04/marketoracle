---
title: fulfillmentOrderOpen - GraphQL Admin
description: >-
  Marks a scheduled fulfillment order as open.


  From API version 2026-01, this will also mark a fulfillment order as open when
  it is assigned to a merchant managed location and has had progress reported.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderOpen.md
---

# fulfillment​Order​Open

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Marks a scheduled fulfillment order as open.

From API version 2026-01, this will also mark a fulfillment order as open when it is assigned to a merchant managed location and has had progress reported.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment order to mark as open.

***

## Fulfillment​Order​Open​Payload returns

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was transitioned to open and is fulfillable.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Marks the fulfillment order as open

  #### Description

  A scheduled fulfillment order can now be fulfilled, and a merchant or order management app marks the fulfillment order as open.

  #### Query

  ```graphql
  mutation fulfillmentOrderOpen($id: ID!) {
    fulfillmentOrderOpen(id: $id) {
      fulfillmentOrder {
        id
        status
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
    "id": "gid://shopify/FulfillmentOrder/1046000781"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentOrderOpen($id: ID!) { fulfillmentOrderOpen(id: $id) { fulfillmentOrder { id status } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/FulfillmentOrder/1046000781"
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
    mutation fulfillmentOrderOpen($id: ID!) {
      fulfillmentOrderOpen(id: $id) {
        fulfillmentOrder {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/FulfillmentOrder/1046000781"
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
    mutation fulfillmentOrderOpen($id: ID!) {
      fulfillmentOrderOpen(id: $id) {
        fulfillmentOrder {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/FulfillmentOrder/1046000781"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentOrderOpen($id: ID!) {
        fulfillmentOrderOpen(id: $id) {
          fulfillmentOrder {
            id
            status
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/FulfillmentOrder/1046000781"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentOrderOpen": {
      "fulfillmentOrder": {
        "id": "gid://shopify/FulfillmentOrder/1046000781",
        "status": "OPEN"
      },
      "userErrors": []
    }
  }
  ```

* ### fulfillmentOrderOpen reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderOpen\(%24id%3A%20ID!\)%20%7B%0A%20%20fulfillmentOrderOpen\(id%3A%20%24id\)%20%7B%0A%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046000781%22%0A%7D)

##### GQL

```graphql
mutation fulfillmentOrderOpen($id: ID!) {
  fulfillmentOrderOpen(id: $id) {
    fulfillmentOrder {
      id
      status
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
"query": "mutation fulfillmentOrderOpen($id: ID!) { fulfillmentOrderOpen(id: $id) { fulfillmentOrder { id status } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/1046000781"
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
  mutation fulfillmentOrderOpen($id: ID!) {
    fulfillmentOrderOpen(id: $id) {
      fulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/1046000781"
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
    "query": `mutation fulfillmentOrderOpen($id: ID!) {
      fulfillmentOrderOpen(id: $id) {
        fulfillmentOrder {
          id
          status
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/1046000781"
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
  mutation fulfillmentOrderOpen($id: ID!) {
    fulfillmentOrderOpen(id: $id) {
      fulfillmentOrder {
        id
        status
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/1046000781"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/FulfillmentOrder/1046000781"
}
```

## Response

JSON

```json
{
  "fulfillmentOrderOpen": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000781",
      "status": "OPEN"
    },
    "userErrors": []
  }
}
```
