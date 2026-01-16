---
title: fulfillmentOrderSubmitCancellationRequest - GraphQL Admin
description: >-
  Sends a cancellation request to the fulfillment service of a fulfillment
  order.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest.md
---

# fulfillment​Order​Submit​Cancellation​Request

mutation

Requires `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Sends a cancellation request to the fulfillment service of a fulfillment order.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment order associated with the cancellation request.

* message

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  An optional reason for the cancellation request.

***

## Fulfillment​Order​Submit​Cancellation​Request​Payload returns

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  The fulfillment order specified in the cancelation request.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Sends a cancellation request

  #### Description

  A merchant or order management app submits a cancellation request for a fulfillment order that has already been accepted by a fulfillment service.

  #### Query

  ```graphql
  mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
    "id": "gid://shopify/FulfillmentOrder/1046001469",
    "message": "Customer cancelled their order"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) { fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) { fulfillmentOrder { id status requestStatus } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/FulfillmentOrder/1046001469",
      "message": "Customer cancelled their order"
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
    mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
      fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
          "id": "gid://shopify/FulfillmentOrder/1046001469",
          "message": "Customer cancelled their order"
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
    mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
      fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
    "id": "gid://shopify/FulfillmentOrder/1046001469",
    "message": "Customer cancelled their order"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
        fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
          "id": "gid://shopify/FulfillmentOrder/1046001469",
          "message": "Customer cancelled their order"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentOrderSubmitCancellationRequest": {
      "fulfillmentOrder": {
        "id": "gid://shopify/FulfillmentOrder/1046001469",
        "status": "IN_PROGRESS",
        "requestStatus": "ACCEPTED"
      },
      "userErrors": []
    }
  }
  ```

* ### fulfillmentOrderSubmitCancellationRequest reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderSubmitCancellationRequest\(%24id%3A%20ID!%2C%20%24message%3A%20String\)%20%7B%0A%20%20fulfillmentOrderSubmitCancellationRequest\(id%3A%20%24id%2C%20message%3A%20%24message\)%20%7B%0A%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20requestStatus%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F1046001469%22%2C%0A%20%20%22message%22%3A%20%22Customer%20cancelled%20their%20order%22%0A%7D)

##### GQL

```graphql
mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
  fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
"query": "mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) { fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) { fulfillmentOrder { id status requestStatus } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/1046001469",
    "message": "Customer cancelled their order"
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
  mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
        "id": "gid://shopify/FulfillmentOrder/1046001469",
        "message": "Customer cancelled their order"
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
    "query": `mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
      fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
        "id": "gid://shopify/FulfillmentOrder/1046001469",
        "message": "Customer cancelled their order"
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
  mutation fulfillmentOrderSubmitCancellationRequest($id: ID!, $message: String) {
    fulfillmentOrderSubmitCancellationRequest(id: $id, message: $message) {
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
  "id": "gid://shopify/FulfillmentOrder/1046001469",
  "message": "Customer cancelled their order"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/FulfillmentOrder/1046001469",
  "message": "Customer cancelled their order"
}
```

## Response

JSON

```json
{
  "fulfillmentOrderSubmitCancellationRequest": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/1046001469",
      "status": "IN_PROGRESS",
      "requestStatus": "ACCEPTED"
    },
    "userErrors": []
  }
}
```
