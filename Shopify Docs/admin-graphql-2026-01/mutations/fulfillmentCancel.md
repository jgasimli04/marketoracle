---
title: fulfillmentCancel - GraphQL Admin
description: >-
  Cancels an existing
  [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)
  and reverses its effects on associated
  [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder)
  objects. When you cancel a fulfillment, the system creates new fulfillment
  orders for the cancelled items so they can be fulfilled again.


  The cancellation affects fulfillment orders differently based on their
  fulfillment status. If a fulfillment order was entirely fulfilled, then it
  automatically closes. If a fulfillment order is partially fulfilled, then the
  remaining quantities adjust to include the cancelled items. The system creates
  new fulfillment orders at the original
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)
  when items are still stocked there, or at alternative locations based on the
  store's fulfillment priority settings.


  Learn more about [canceling
  fulfillments](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-cancel-a-fulfillment).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentCancel.md
---

# fulfillment​Cancel

mutation

Cancels an existing [`Fulfillment`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment) and reverses its effects on associated [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects. When you cancel a fulfillment, the system creates new fulfillment orders for the cancelled items so they can be fulfilled again.

The cancellation affects fulfillment orders differently based on their fulfillment status. If a fulfillment order was entirely fulfilled, then it automatically closes. If a fulfillment order is partially fulfilled, then the remaining quantities adjust to include the cancelled items. The system creates new fulfillment orders at the original [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) when items are still stocked there, or at alternative locations based on the store's fulfillment priority settings.

Learn more about [canceling fulfillments](https://shopify.dev/docs/apps/build/orders-fulfillment/fulfillment-service-apps/build-for-fulfillment-services#step-7-cancel-a-fulfillment).

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the fulfillment to be canceled.

***

## Fulfillment​Cancel​Payload returns

* fulfillment

  [Fulfillment](https://shopify.dev/docs/api/admin-graphql/latest/objects/Fulfillment)

  The canceled fulfillment.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### Cancels a fulfillment

  #### Description

  A fulfillment service cancels a fulfillment.

  #### Query

  ```graphql
  mutation fulfillmentCancel($id: ID!) {
    fulfillmentCancel(id: $id) {
      fulfillment {
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
    "id": "gid://shopify/Fulfillment/237894043"
  }
  ```

  #### cURL

  ```bash
  curl -X POST \
  https://your-development-store.myshopify.com/admin/api/2026-01/graphql.json \
  -H 'Content-Type: application/json' \
  -H 'X-Shopify-Access-Token: {access_token}' \
  -d '{
  "query": "mutation fulfillmentCancel($id: ID!) { fulfillmentCancel(id: $id) { fulfillment { id status } userErrors { field message } } }",
   "variables": {
      "id": "gid://shopify/Fulfillment/237894043"
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
    mutation fulfillmentCancel($id: ID!) {
      fulfillmentCancel(id: $id) {
        fulfillment {
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
          "id": "gid://shopify/Fulfillment/237894043"
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
    mutation fulfillmentCancel($id: ID!) {
      fulfillmentCancel(id: $id) {
        fulfillment {
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
    "id": "gid://shopify/Fulfillment/237894043"
  }

  response = client.query(query: query, variables: variables)
  ```

  #### Node.js

  ```javascript
  const client = new shopify.clients.Graphql({session});
  const data = await client.query({
    data: {
      "query": `mutation fulfillmentCancel($id: ID!) {
        fulfillmentCancel(id: $id) {
          fulfillment {
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
          "id": "gid://shopify/Fulfillment/237894043"
      },
    },
  });
  ```

  #### Response

  ```json
  {
    "fulfillmentCancel": {
      "fulfillment": {
        "id": "gid://shopify/Fulfillment/237894043",
        "status": "CANCELLED"
      },
      "userErrors": []
    }
  }
  ```

* ### fulfillmentCancel reference

[Open in GraphiQL](http://localhost:3457/graphiql?query=mutation%20fulfillmentCancel\(%24id%3A%20ID!\)%20%7B%0A%20%20fulfillmentCancel\(id%3A%20%24id\)%20%7B%0A%20%20%20%20fulfillment%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20status%0A%20%20%20%20%7D%0A%20%20%20%20userErrors%20%7B%0A%20%20%20%20%20%20field%0A%20%20%20%20%20%20message%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D\&variables=%7B%0A%20%20%22id%22%3A%20%22gid%3A%2F%2Fshopify%2FFulfillment%2F237894043%22%0A%7D)

##### GQL

```graphql
mutation fulfillmentCancel($id: ID!) {
  fulfillmentCancel(id: $id) {
    fulfillment {
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
"query": "mutation fulfillmentCancel($id: ID!) { fulfillmentCancel(id: $id) { fulfillment { id status } userErrors { field message } } }",
 "variables": {
    "id": "gid://shopify/Fulfillment/237894043"
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
  mutation fulfillmentCancel($id: ID!) {
    fulfillmentCancel(id: $id) {
      fulfillment {
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
        "id": "gid://shopify/Fulfillment/237894043"
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
    "query": `mutation fulfillmentCancel($id: ID!) {
      fulfillmentCancel(id: $id) {
        fulfillment {
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
        "id": "gid://shopify/Fulfillment/237894043"
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
  mutation fulfillmentCancel($id: ID!) {
    fulfillmentCancel(id: $id) {
      fulfillment {
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
  "id": "gid://shopify/Fulfillment/237894043"
}

response = client.query(query: query, variables: variables)
```

## Input variables

JSON

```json
{
  "id": "gid://shopify/Fulfillment/237894043"
}
```

## Response

JSON

```json
{
  "fulfillmentCancel": {
    "fulfillment": {
      "id": "gid://shopify/Fulfillment/237894043",
      "status": "CANCELLED"
    },
    "userErrors": []
  }
}
```
