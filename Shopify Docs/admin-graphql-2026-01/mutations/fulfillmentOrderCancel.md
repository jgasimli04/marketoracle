---
title: fulfillmentOrderCancel - GraphQL Admin
description: >-
  Cancels a
  [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)
  and creates a replacement fulfillment order to represent the work left to be
  done. The original fulfillment order will be marked as closed.


  This mutation works when the fulfillment order has a `SUBMITTED` or
  `CANCELLATION_REQUESTED` status. For `SUBMITTED` orders, cancellation happens
  immediately because the fulfillment service hasn't accepted the request.


  > Note: Orders that have had cancellation requested but the cancellation has
  yet to be accepted by the fulfillment service might still have work completed
  despite cancellation.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderCancel.md
---

# fulfillment​Order​Cancel

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Cancels a [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) and creates a replacement fulfillment order to represent the work left to be done. The original fulfillment order will be marked as closed.

This mutation works when the fulfillment order has a `SUBMITTED` or `CANCELLATION_REQUESTED` status. For `SUBMITTED` orders, cancellation happens immediately because the fulfillment service hasn't accepted the request.

***

Note

Orders that have had cancellation requested but the cancellation has yet to be accepted by the fulfillment service might still have work completed despite cancellation.

***

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment order to mark as canceled.

***

## Fulfillment​Order​Cancel​Payload returns

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was marked as canceled.

* replacement​Fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order that was created to replace the canceled fulfillment order.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Cancel a fulfillment order

  #### Description

  A merchant or order management app cancels a fulfillment order before it is accepted by a fulfillment service.

  #### Query

  ```graphql
  mutation fulfillmentOrderCancel($id: ID!) {
    fulfillmentOrderCancel(id: $id) {
      fulfillmentOrder {
        id
        status
        requestStatus
      }
      replacementFulfillmentOrder {
        id
        status
        requestStatus
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
    "id": "gid://shopify/FulfillmentOrder/1046000804"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentOrderCancel($id: ID!) { fulfillmentOrderCancel(id: $id) { fulfillmentOrder { id status requestStatus } replacementFulfillmentOrder { id status requestStatus } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/FulfillmentOrder/1046000804"
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
    mutation fulfillmentOrderCancel($id: ID!) {
      fulfillmentOrderCancel(id: $id) {
        fulfillmentOrder {
          id
          status
          requestStatus
        }
        replacementFulfillmentOrder {
          id
          status
          requestStatus
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/FulfillmentOrder/1046000804"
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
    mutation fulfillmentOrderCancel($id: ID!) {
      fulfillmentOrderCancel(id: $id) {
        fulfillmentOrder {
          id
          status
          requestStatus
        }
        replacementFulfillmentOrder {
          id
          status
          requestStatus
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/FulfillmentOrder/1046000804"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentOrderCancel($id: ID!) {
        fulfillmentOrderCancel(id: $id) {
          fulfillmentOrder {
            id
            status
            requestStatus
          }
          replacementFulfillmentOrder {
            id
            status
            requestStatus
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/FulfillmentOrder/1046000804"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentOrderCancel": {
      "fulfillmentOrder": {
        "id": "gid://shopify/FulfillmentOrder/1046000804",
        "status": "CLOSED",
        "requestStatus": "SUBMITTED"
      },
      "replacementFulfillmentOrder": {
        "id": "gid://shopify/FulfillmentOrder/1046000805",
        "status": "OPEN",
        "requestStatus": "UNSUBMITTED"
      },
      "userErrors": []
    }
  }
  ```

* ### fulfillmentOrderCancel reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderCancel\(%24id%3A%20ID!\)%20%7B%0A%20%20fulfillmentOrderCancel\(id%3A%20%24id\)%20%7B%0A%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20requestStatus%0A%20%20%20%20%7D%0A%20%20%20%20replacementFulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20requestStatus%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046000804%22%0A%7D)

##### GQL

```graphql
mutation fulfillmentOrderCancel($id: ID!) {
  fulfillmentOrderCancel(id: $id) {
    fulfillmentOrder {
      id
      status
      requestStatus
    }
    replacementFulfillmentOrder {
      id
      status
      requestStatus
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
"query": "mutation fulfillmentOrderCancel($id: ID!) { fulfillmentOrderCancel(id: $id) { fulfillmentOrder { id status requestStatus } replacementFulfillmentOrder { id status requestStatus } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/1046000804"
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
  mutation fulfillmentOrderCancel($id: ID!) {
    fulfillmentOrderCancel(id: $id) {
      fulfillmentOrder {
        id
        status
        requestStatus
      }
      replacementFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/1046000804"
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
    "query": `mutation fulfillmentOrderCancel($id: ID!) {
      fulfillmentOrderCancel(id: $id) {
        fulfillmentOrder {
          id
          status
          requestStatus
        }
        replacementFulfillmentOrder {
          id
          status
          requestStatus
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/1046000804"
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
  mutation fulfillmentOrderCancel($id: ID!) {
    fulfillmentOrderCancel(id: $id) {
      fulfillmentOrder {
        id
        status
        requestStatus
      }
      replacementFulfillmentOrder {
        id
        status
        requestStatus
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/1046000804"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/FulfillmentOrder/1046000804"
}
```

## Response

JSON

```json
{
  "fulfillmentOrderCancel": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000804",
      "status": "CLOSED",
      "requestStatus": "SUBMITTED"
    },
    "replacementFulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000805",
      "status": "OPEN",
      "requestStatus": "UNSUBMITTED"
    },
    "userErrors": []
  }
}
```
