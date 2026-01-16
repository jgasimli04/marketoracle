---
title: fulfillmentOrderRejectCancellationRequest - GraphQL Admin
description: >-
  Rejects a cancellation request sent to a fulfillment service for a fulfillment
  order.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectCancellationRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderRejectCancellationRequest.md
---

# fulfillment​Order​Reject​Cancellation​Request

mutation

Requires `write_assigned_fulfillment_orders` access scope. Also: The user must have `fulfill_and_ship_orders` permission.

Rejects a cancellation request sent to a fulfillment service for a fulfillment order.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment order associated with the cancellation request.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An optional reason for rejecting the cancellation request.

***

## Fulfillment​Order​Reject​Cancellation​Request​Payload returns

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order whose cancellation request was rejected.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Rejects a cancellation request

  #### Description

  A fulfillment service rejects a cancellation request for a fulfillment order that has already been accepted.

  #### Query

  ```graphql
  mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
      fulfillmentOrder {
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
    "id": "gid://shopify/FulfillmentOrder/1046000785",
    "message": "Already shipped product"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) { fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) { fulfillmentOrder { id status requestStatus } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/FulfillmentOrder/1046000785",
      "message": "Already shipped product"
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
    mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
      fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
        fulfillmentOrder {
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
          "id": "gid://shopify/FulfillmentOrder/1046000785",
          "message": "Already shipped product"
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
    mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
      fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
        fulfillmentOrder {
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
    "id": "gid://shopify/FulfillmentOrder/1046000785",
    "message": "Already shipped product"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
        fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
          fulfillmentOrder {
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
          "id": "gid://shopify/FulfillmentOrder/1046000785",
          "message": "Already shipped product"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentOrderRejectCancellationRequest": {
      "fulfillmentOrder": {
        "id": "gid://shopify/FulfillmentOrder/1046000785",
        "status": "IN_PROGRESS",
        "requestStatus": "CANCELLATION_REJECTED"
      },
      "userErrors": []
    }
  }
  ```

* ### fulfillmentOrderRejectCancellationRequest reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderRejectCancellationRequest\(%24id%3A%20ID!%2C%20%24message%3A%20String\)%20%7B%0A%20%20fulfillmentOrderRejectCancellationRequest\(id%3A%20%24id%2C%20message%3A%20%24message\)%20%7B%0A%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20requestStatus%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046000785%22%2C%0A%20%20%22message%22%3A%20%22Already%20shipped%20product%22%0A%7D)

##### GQL

```graphql
mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
  fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
    fulfillmentOrder {
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
"query": "mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) { fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) { fulfillmentOrder { id status requestStatus } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/1046000785",
    "message": "Already shipped product"
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
  mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
      fulfillmentOrder {
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
        "id": "gid://shopify/FulfillmentOrder/1046000785",
        "message": "Already shipped product"
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
    "query": `mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
      fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
        fulfillmentOrder {
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
        "id": "gid://shopify/FulfillmentOrder/1046000785",
        "message": "Already shipped product"
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
  mutation fulfillmentOrderRejectCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderRejectCancellationRequest(id: $id, message: $message) {
      fulfillmentOrder {
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
  "id": "gid://shopify/FulfillmentOrder/1046000785",
  "message": "Already shipped product"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/FulfillmentOrder/1046000785",
  "message": "Already shipped product"
}
```

## Response

JSON

```json
{
  "fulfillmentOrderRejectCancellationRequest": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046000785",
      "status": "IN_PROGRESS",
      "requestStatus": "CANCELLATION_REJECTED"
    },
    "userErrors": []
  }
}
```
