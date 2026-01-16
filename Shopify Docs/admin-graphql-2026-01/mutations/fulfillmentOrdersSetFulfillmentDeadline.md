---
title: fulfillmentOrdersSetFulfillmentDeadline - GraphQL Admin
description: >-
  Sets the latest date and time by which the fulfillment orders need to be
  fulfilled.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline.md
---

# fulfillment​Orders​Set​Fulfillment​Deadline

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope, `write_third_party_fulfillment_orders` access scope or `write_marketplace_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Sets the latest date and time by which the fulfillment orders need to be fulfilled.

## Arguments

* fulfillment​Deadline

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  required

  The new fulfillment deadline of the fulfillment orders.

* fulfillment​Order​Ids

  [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The IDs of the fulfillment orders for which the deadline is being set.

***

## Fulfillment​Orders​Set​Fulfillment​Deadline​Payload returns

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the fulfillment deadline was successfully set.

* user​Errors

  [\[Fulfillment​Orders​Set​Fulfillment​Deadline​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Sets deadline for fulfillment orders

  #### Description

  The merchant or an order management app set the date and time, by which the fulfillment orders have to be fulfilled

  #### Query

  ```graphql
  mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
    fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
      success
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
    "fulfillmentDeadline": "2024-11-25T18:44:04Z",
    "fulfillmentOrderIds": [
      "gid://shopify/FulfillmentOrder/234125762",
      "gid://shopify/FulfillmentOrder/564786110"
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
  "query": "mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) { fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) { success userErrors { field message } } }",
   "variables": {
      "fulfillmentDeadline": "2024-11-25T18:44:04Z",
      "fulfillmentOrderIds": [
        "gid://shopify/FulfillmentOrder/234125762",
        "gid://shopify/FulfillmentOrder/564786110"
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
    mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
      fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
        success
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "fulfillmentDeadline": "2024-11-25T18:44:04Z",
          "fulfillmentOrderIds": [
              "gid://shopify/FulfillmentOrder/234125762",
              "gid://shopify/FulfillmentOrder/564786110"
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
    mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
      fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
        success
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "fulfillmentDeadline": "2024-11-25T18:44:04Z",
    "fulfillmentOrderIds": [
      "gid://shopify/FulfillmentOrder/234125762",
      "gid://shopify/FulfillmentOrder/564786110"
    ]
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
        fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
          success
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "fulfillmentDeadline": "2024-11-25T18:44:04Z",
          "fulfillmentOrderIds": [
              "gid://shopify/FulfillmentOrder/234125762",
              "gid://shopify/FulfillmentOrder/564786110"
          ]
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentOrdersSetFulfillmentDeadline": {
      "success": true,
      "userErrors": []
    }
  }
  ```

* ### fulfillmentOrdersSetFulfillmentDeadline reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrdersSetFulfillmentDeadline\(%24fulfillmentDeadline%3A%20DateTime!%2C%20%24fulfillmentOrderIds%3A%20%5BID!%5D!\)%20%7B%0A%20%20fulfillmentOrdersSetFulfillmentDeadline\(fulfillmentDeadline%3A%20%24fulfillmentDeadline%2C%20fulfillmentOrderIds%3A%20%24fulfillmentOrderIds\)%20%7B%0A%20%20%20%20success%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22fulfillmentDeadline%22%3A%20%222024-11-25T18%3A44%3A04Z%22%2C%0A%20%20%22fulfillmentOrderIds%22%3A%20%5B%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F234125762%22%2C%0A%20%20%20%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F564786110%22%0A%20%20%5D%0A%7D)

##### GQL

```graphql
mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
  fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
    success
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
"query": "mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) { fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) { success userErrors { field message } } }",
 "variables": {
    "fulfillmentDeadline": "2024-11-25T18:44:04Z",
    "fulfillmentOrderIds": [
      "gid://shopify/FulfillmentOrder/234125762",
      "gid://shopify/FulfillmentOrder/564786110"
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
  mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
    fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
      success
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "fulfillmentDeadline": "2024-11-25T18:44:04Z",
        "fulfillmentOrderIds": [
            "gid://shopify/FulfillmentOrder/234125762",
            "gid://shopify/FulfillmentOrder/564786110"
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
    "query": `mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
      fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
        success
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "fulfillmentDeadline": "2024-11-25T18:44:04Z",
        "fulfillmentOrderIds": [
            "gid://shopify/FulfillmentOrder/234125762",
            "gid://shopify/FulfillmentOrder/564786110"
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
  mutation fulfillmentOrdersSetFulfillmentDeadline($fulfillmentDeadline: DateTime!, $fulfillmentOrderIds: [ID!]!) {
    fulfillmentOrdersSetFulfillmentDeadline(fulfillmentDeadline: $fulfillmentDeadline, fulfillmentOrderIds: $fulfillmentOrderIds) {
      success
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "fulfillmentDeadline": "2024-11-25T18:44:04Z",
  "fulfillmentOrderIds": [
    "gid://shopify/FulfillmentOrder/234125762",
    "gid://shopify/FulfillmentOrder/564786110"
  ]
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "fulfillmentDeadline": "2024-11-25T18:44:04Z",
  "fulfillmentOrderIds": [
    "gid://shopify/FulfillmentOrder/234125762",
    "gid://shopify/FulfillmentOrder/564786110"
  ]
}
```

## Response

JSON

```json
{
  "fulfillmentOrdersSetFulfillmentDeadline": {
    "success": true,
    "userErrors": []
  }
}
```
