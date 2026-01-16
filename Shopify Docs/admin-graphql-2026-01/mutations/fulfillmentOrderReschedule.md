---
title: fulfillmentOrderReschedule - GraphQL Admin
description: >-
  Reschedules a scheduled fulfillment order.


  Updates the value of the `fulfillAt` field on a scheduled fulfillment order.


  The fulfillment order will be marked as ready for fulfillment at this date and
  time.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule.md
---

# fulfillment​Order​Reschedule

mutation

Requires `write_merchant_managed_fulfillment_orders` access scope or `write_third_party_fulfillment_orders` access scope. Also: The user must have fulfill\_and\_ship\_orders permission.

Reschedules a scheduled fulfillment order.

Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

The fulfillment order will be marked as ready for fulfillment at this date and time.

## Arguments

* fulfill​At

  [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  required

  A future date and time when the fulfillment order will be marked as ready for fulfillment.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment order to reschedule.

***

## Fulfillment​Order​Reschedule​Payload returns

* fulfillment​Order

  [Fulfillment​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)

  A fulfillment order with the rescheduled line items.

  Fulfillment orders may be merged if they have the same `fulfillAt` datetime.

  If the fulfillment order is merged then the resulting fulfillment order will be returned. Otherwise the original fulfillment order will be returned with an updated `fulfillAt` datetime.

* user​Errors

  [\[Fulfillment​Order​Reschedule​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderRescheduleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Reschedules the fulfill\_at time of a scheduled fulfillment order

  #### Description

  The merchant or an order management app postpones a scheduled fulfillment order for a later date

  #### Query

  ```graphql
  mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
    fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
      fulfillmentOrder {
        id
        status
        fulfillAt
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
    "id": "gid://shopify/FulfillmentOrder/564786110",
    "fulfillAt": "2024-11-25T18:40:54Z"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) { fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) { fulfillmentOrder { id status fulfillAt } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/FulfillmentOrder/564786110",
      "fulfillAt": "2024-11-25T18:40:54Z"
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
    mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
      fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
        fulfillmentOrder {
          id
          status
          fulfillAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    {
      variables: {
          "id": "gid://shopify/FulfillmentOrder/564786110",
          "fulfillAt": "2024-11-25T18:40:54Z"
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
    mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
      fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
        fulfillmentOrder {
          id
          status
          fulfillAt
        }
        userErrors {
          field
          message
        }
      }
    }
  QUERY

  variables = {
    "id": "gid://shopify/FulfillmentOrder/564786110",
    "fulfillAt": "2024-11-25T18:40:54Z"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
        fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
          fulfillmentOrder {
            id
            status
            fulfillAt
          }
          userErrors {
            field
            message
          }
        }
      }`,
      "variables": {
          "id": "gid://shopify/FulfillmentOrder/564786110",
          "fulfillAt": "2024-11-25T18:40:54Z"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentOrderReschedule": {
      "fulfillmentOrder": {
        "id": "gid://shopify/FulfillmentOrder/564786110",
        "status": "SCHEDULED",
        "fulfillAt": "2024-11-25T18:40:54Z"
      },
      "userErrors": []
    }
  }
  ```

* ### fulfillmentOrderReschedule reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentOrderReschedule\(%24fulfillAt%3A%20DateTime!%2C%20%24id%3A%20ID!\)%20%7B%0A%20%20fulfillmentOrderReschedule\(fulfillAt%3A%20%24fulfillAt%2C%20id%3A%20%24id\)%20%7B%0A%20%20%20%20fulfillmentOrder%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%20%20fulfillAt%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillmentOrder%2F564786110%22%2C%0A%20%20%22fulfillAt%22%3A%20%222024-11-25T18%3A40%3A54Z%22%0A%7D)

##### GQL

```graphql
mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
  fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
    fulfillmentOrder {
      id
      status
      fulfillAt
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
"query": "mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) { fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) { fulfillmentOrder { id status fulfillAt } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/FulfillmentOrder/564786110",
    "fulfillAt": "2024-11-25T18:40:54Z"
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
  mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
    fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
      fulfillmentOrder {
        id
        status
        fulfillAt
      }
      userErrors {
        field
        message
      }
    }
  }`,
  {
    variables: {
        "id": "gid://shopify/FulfillmentOrder/564786110",
        "fulfillAt": "2024-11-25T18:40:54Z"
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
    "query": `mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
      fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
        fulfillmentOrder {
          id
          status
          fulfillAt
        }
        userErrors {
          field
          message
        }
      }
    }`,
    "variables": {
        "id": "gid://shopify/FulfillmentOrder/564786110",
        "fulfillAt": "2024-11-25T18:40:54Z"
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
  mutation fulfillmentOrderReschedule($fulfillAt: DateTime!, $id: ID!) {
    fulfillmentOrderReschedule(fulfillAt: $fulfillAt, id: $id) {
      fulfillmentOrder {
        id
        status
        fulfillAt
      }
      userErrors {
        field
        message
      }
    }
  }
QUERY

variables = {
  "id": "gid://shopify/FulfillmentOrder/564786110",
  "fulfillAt": "2024-11-25T18:40:54Z"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/FulfillmentOrder/564786110",
  "fulfillAt": "2024-11-25T18:40:54Z"
}
```

## Response

JSON

```json
{
  "fulfillmentOrderReschedule": {
    "fulfillmentOrder": {
      "id": "gid://shopify/FulfillmentOrder/564786110",
      "status": "SCHEDULED",
      "fulfillAt": "2024-11-25T18:40:54Z"
    },
    "userErrors": []
  }
}
```
